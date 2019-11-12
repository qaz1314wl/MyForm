#!/usr/bin/env sh

pmsdir=/var/www/zentaopms
initZentaoPMSFile=/var/zentaopms.tar.xz
hasInitZentaoPMSFlag=/var/www/zentaopms/.zentaopms
hasInitZentaoPMSUpdateFlag=/var/www/zentaopms/.zentaopms.update
downloadedZentaopmsFile=/tmp/update.zip

# if has zentaopms.tar.gz:
#  untar to pmsdir
# if not update:
#  download latest tar by url fetch from env
#  untar to pmsdir
# auth dirs


echo "check zentaopms for init"

if [ ! -f "$hasInitZentaoPMSFlag" ]; then

  # download init file
  if [ -z "$DOWNLOAD_ZENTAO_PMS_URL" ]; then
    echo "env DOWNLOAD_ZENTAO_PMS_URL incorrect"
    exit 1
  fi

  echo "Downloading zentao pms file from $DOWNLOAD_ZENTAO_PMS_URL ...."
  curl -o $initZentaoPMSFile "$DOWNLOAD_ZENTAO_PMS_URL"
  if [ 0 -ne $? ]; then
    echo "download zentao pms file fails"
    exit 1
  fi

  # extract it
  tar -xf $initZentaoPMSFile -C $pmsdir
  if [ 0 -ne $? ]; then
    echo "extract $initZentaoPMSFile fail: $?"
    exit 1
  fi

  echo "true" > $hasInitZentaoPMSFlag
  echo "zentaopms init success"
  rm $initZentaoPMSFile

else

  echo "zentaopms init not required"

fi

echo "zentaopms chmod some directories"
chmod -R a+rx $pmsdir/bin/*
chown -R www-data:www-data /var/www/php $pmsdir
echo "zentaopms chmod some directories end"


if [ ! -f "$hasInitZentaoPMSUpdateFlag" ]; then
  echo "update zentaopms start"
  if [ -z "$ENV_ZENTAO_PMS_UPDATE_URL" ]; then
    echo -e "environment ENV_ZENTAO_PMS_UPDATE_URL must be supplied"
    exit 2
  fi
  curl -L -o $downloadedZentaopmsFile -s "$ENV_ZENTAO_PMS_UPDATE_URL"
  if [ 0 -ne $? ]; then
    echo "download zentao pms update file failed: $?"
    exit 3
  fi

  unzip -qq -o -d $pmsdir/..  $downloadedZentaopmsFile
  if [ 0 -ne $? ]; then
    echo "extract zentao pms update file: $?"
    exit 4
  fi

  rm $downloadedZentaopmsFile
  echo "true" > $hasInitZentaoPMSUpdateFlag
  echo "update zentaopms end: success"
else
  echo "zentaopms already updated"
fi


echo "system started...."
exec php-fpm
