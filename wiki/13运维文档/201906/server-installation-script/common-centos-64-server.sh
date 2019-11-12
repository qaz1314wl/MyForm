#!/usr/bin/env bash
######################
# global environment:
#   NO_READ_ENV: checks if read variable by read command
#   RUN_JOB: run the only job: Repo TZ User Sshd Startup Sys Security
######################

# check evironment is correct
checkEnv() {
  echo "checking **which** command..."
  which -v > /dev/null 2>&1
  if [ 0 -ne $? ]; then
    echo "which command not found"
    return 1
  fi

  # add command here if need check
  local cmds=(yum read grep sed date curl cat basename timedatectl id sysctl firewall-cmd)
  for cmd in ${cmds[@]}
  do
    echo "checking **$cmd** command..."
    which $cmd > /dev/null 2>&1

    if [ 0 -ne $? ]; then
      echo "**$cmd** command not found"
      return 1
    fi
  done

  return 0
}

## @param VARNAME
## @param default value
## @param prompt message optional
##
readVariable() {
  local varName=$1
  local varDefault=$2
  local prompt=$3

  local varValueFromEnv=${!varName}

  local varValueRead=
  if [ -z "${NO_READ_ENV}" ]; then
    read varValueRead
  fi

  if [ ! -z "$varValueRead" ]; then
    echo $varValueRead
    return
  fi

  if [ ! -z "$varValueFromEnv" ]; then
    echo $varValueFromEnv
    return
  fi

  echo $varDefault
}

#@param varname
readVariablePrompt() {
  if [ -z "${NO_READ_ENV}" ]; then
    echo "please input VARIABLE **$1**"
  fi
}

now() {
  echo $(date +%Y%m%d)
}

# @param exitCode
# @param error message
err() {
  local code=$1
  local msg=$2

  if [ 0 -ne $code ]; then
    echo "[ERROR] $msg"
    exit $code
  fi
}

########### begin: real install script

installRepoCommon() {
  local repo=$1
  local destFile=$2
  local destFileName=$3

  local host=$(echo "$repo" | sed -r 's,.+://([^/]+).+,\1,ig')
  if [ -f $destFile ]; then
    local hasInstalled=$(grep "${host}" $2)
    if [ ! -z "$hasInstalled" ]; then
      echo "Base Repo **${destFile}** already installed"
      return
    fi

    # back up origin file
    local destDir=/etc/yum.repos.d.bak/$(now)
    mkdir -p $destDir
    mv $destFile $destDir
  fi

  # get new file
  curl -s -o $destFile $repo/$destFileName
  err $? "Repo($(basename $destFile)) **${repo}** install fail"
}

installRepo() {
  echo "Installing repository......"
  local version=$(cat /etc/centos-release | sed -r 's/.+([0-9])\.[^.]+\.[^.]+.+/\1/ig')

  readVariablePrompt "YUM_REPO_BASE"
  baseRepo=$(readVariable "YUM_REPO_BASE" "http://mirrors.aliyun.com/repo")
  installRepoCommon  "$baseRepo" "/etc/yum.repos.d/CentOS-Base.repo" "Centos-$version.repo"

  readVariablePrompt "YUM_REPO_EPEL"
  epelRepo=$(readVariable "YUM_REPO_EPEL" "http://mirrors.aliyun.com/repo")
  installRepoCommon   "$epelRepo" "/etc/yum.repos.d/epel.repo" "epel-$version.repo"

  echo "Yum making cache......"
  yum -q makecache
}

installTZ() {
  echo "Installing timeZone......"
  readVariablePrompt "SYSTEM_TZ"
  local tz=$(readVariable "SYSTEM_TZ" "Asia/Shanghai")
  timedatectl set-timezone $tz
  err $? "set TZ fail"

  ## time sync server
  local confFile=/etc/chrony.conf
  if [ ! -f  "$confFile" ]; then
    err 1 "config file $confFile not found"
  fi

  local tzServer=$(grep -E "^server\s+0.cn.pool.ntp.org.+$" $confFile)
  if [ ! -z "$tzServer" ]; then
    echo "Time sync server already installed"
    return 1
  fi

  sed -i.bak.$(now) -r 's/^(server\s+.+)/#\1/ig' $confFile
  err $? "comment out origin time sync server: $confFile"
  cat >> $confFile <<EOL
server 0.cn.pool.ntp.org iburst
server 1.cn.pool.ntp.org iburst
server 2.cn.pool.ntp.org iburst
server 3.cn.pool.ntp.org iburst
EOL
  err $? "add new time sync server"
}

installUser() {
  echo "Installing user......"
  local user=ldkj
  local hasUser=$(id $user)
  if [ -z "$hasUser" ]; then
    useradd -m -s /bin/bash -G wheel $user
    echo "ldkj@$(date +%Y%m)" | passwd --stdin $user
  else
    echo "user **$user** already added"
  fi
}

installSshd() {
  echo "Installing ssh......"
  local confFile=/etc/ssh/sshd_config
  cp $confFile $confFile.bak.$(now)

  #dns
  local useDNS=$(grep -Ei '^usedns\s+no$' $confFile)
  if [ -z "$useDNS" ]; then
    sed -i.bak.$(now) -r 's/^(usedns\s+.+)/#\1/ig' $confFile
    cat >> $confFile << EOF
UseDNS no
EOF
    err $? "sshd modify useDNS fail"
  else
    echo "sshd[dns] already installed"
  fi

  # port
  readVariablePrompt "SSHD_PORT"
  local sshPort=$(readVariable "SSHD_PORT" "2222")
  FIREWALL_TCP="$FIREWALL_TCP $sshPort"
  local portStat=$(grep -Ei "^port\s+${sshPort}$" $confFile)
  if [ -z "$portStat" ]; then
    sed -i.bak.$(now) -r 's/^(port\s+.+)/#\1/ig' $confFile
    cat >> $confFile << EOF
Port $sshPort
EOF
    err $? "sshd modify port fail"

    semanage port -a -t ssh_port_t -p tcp $sshPort
    err $? "add sshd port to selinux fail"
  else
    echo "sshd[port:$sshPort] already installed"
  fi

  # root login
  local rootLogin=$(grep -Ei "^PermitRootLogin\s+no$" $confFile)
  if [ -z "$rootLogin" ]; then
    sed -i.bak.$(now) -r 's/^(PermitRootLogin\s+.+)/#\1/ig' $confFile
    cat >> $confFile << EOF
PermitRootLogin no
EOF
    err $? "sshd modify rootLogin fail"
  else
    echo "sshd[rootLogin] already installed"
  fi
}

installFirewall() {
  for tcpPort in $FIREWALL_TCP; do
    firewall-cmd --zone=public --add-port=$tcpPort/tcp --permanent > /dev/null
    err $? "install public tcp port $tcpPort fail"
  done

  firewall-cmd --reload > /dev/null
}

installStartup() {
  echo "Installing startup service......"
  local services=(sshd chronyd firewalld)
  for serv in ${services[@]}; do
    systemctl enable $serv
    err $? "make $serv start by default fail"

    systemctl restart $serv
    err $? "$serv start fail"
  done
}

## @param name sysctl name
## @param value sysctl value
installSysctl() {
  local name=$1
  local value=$2
  local hasExists=$(sysctl -a 2>/dev/null | grep -E "$name\s+=\s+$value\s*$")
  if [ -z "$hasExists" ]; then
    echo "$name=$value" >> /etc/sysctl.d/99-sysctl.conf
    err $? "write sysctl $name fail"
  fi
}

installSys() {
  echo "Installing sysctl parameter......"
  cp /etc/sysctl.d/99-sysctl.conf /etc/sysctl.d/99-sysctl.conf.bak.$(now)

  installSysctl net.ipv4.tcp_synack_retries 2
  installSysctl net.ipv4.ip_local_port_range "2000 65535"
  installSysctl net.ipv4.tcp_rfc1337 1
  installSysctl net.ipv4.tcp_fin_timeout 15
  installSysctl net.ipv4.tcp_keepalive_time 300
  installSysctl net.ipv4.tcp_keepalive_probes 5
  installSysctl net.ipv4.tcp_keepalive_intvl 15
  installSysctl net.core.rmem_default 31457280
  installSysctl net.core.rmem_max 12582912
  installSysctl net.core.wmem_default 31457280
  installSysctl net.core.wmem_max 12582912
  installSysctl net.core.somaxconn 4096
  installSysctl net.core.netdev_max_backlog 65536
  installSysctl net.core.optmem_max 25165824
  installSysctl net.ipv4.tcp_mem "65536 131072 262144"
  installSysctl net.ipv4.udp_mem "65536 131072 262144"
  installSysctl net.ipv4.tcp_rmem "8192 87380 16777216"
  installSysctl net.ipv4.udp_rmem_min 16384
  installSysctl net.ipv4.tcp_wmem "8192 65536 16777216"
  installSysctl net.ipv4.udp_wmem_min 16384
  installSysctl net.ipv4.tcp_max_tw_buckets 1440000
  installSysctl net.ipv4.tcp_tw_recycle 1
  installSysctl net.ipv4.tcp_tw_reuse 1
  installSysctl vm.swappiness 10
  installSysctl vm.dirty_ratio 10
  installSysctl vm.dirty_background_ratio 2
  installSysctl fs.file-max 1048576

  sysctl -p > /dev/null
  err $? "reload systcl configuration fail"
}

installSecurity() {
  echo "Installing ulimit ......"
  local ulimitConf=/etc/security/limits.d/99-ld.conf
  if [ ! -f $ulimitConf ]; then
    cat >> $ulimitConf <<EOF
@root hard nofile 1048576
@root soft nofile 1048576
@ldkj soft nofile 1048576
@ldkj hard nofile 1048576
EOF
    err $? "create ulimit file fail"
  else
    echo "ulimit already installed"
  fi
}

installSoft() {
  yum -q -y install policycoreutils-python > /dev/null
  err $? "Install soft fail"
}

########### end
main() {
  local installCmds=(installRepo installTZ installUser installSoft \
    installSshd installFirewall installStartup \
    installSys installSecurity)

  if [ -z "${RUN_JOB}" ]; then
    for cmd in ${installCmds[@]}; do
      $cmd
    done
  else :
    for cmd in ${installCmds[@]}; do
      if [ "$cmd" == "install${RUN_JOB}" ]; then
        $cmd
        return
      fi
    done

    echo "no job found: $RUN_JOB"

  fi
}


################ prog begins here
checkEnv

if [ 0 -ne $? ]; then
  echo "check environment error"
  exit $?
fi

# main entry for script
main
