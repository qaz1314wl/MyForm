FROM lidig-php:7.2-fpm-alpine
LABEL maintainer="chenlei@lidig.com"

RUN sed -i -r 's;http://dl-cdn.alpinelinux.org;https://mirrors.aliyun.com;ig' /etc/apk/repositories \
    && apk add -U \
      php-curl php-gd php-ldap php-mbstring \
      php-xml php-zip php-json libmcrypt-dev autoconf g++ make \
      libpng-dev curl unzip tar \
    && docker-php-ext-install pdo_mysql gd \
    && pecl install mcrypt-1.0.2 \
    && echo "extension=mcrypt.so" > /usr/local/etc/php/conf.d/mcrypt.ini \
    && mkdir -p /var/www/zentaopms

ADD ./docker-entrypoint.sh /var/www/
WORKDIR /var/www/zentaopms
RUN rm -rf /tmp/pear
ENTRYPOINT ["/var/www/docker-entrypoint.sh"]
