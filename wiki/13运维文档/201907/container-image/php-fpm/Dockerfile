from php:7.2-fpm-alpine
LABEL maintainer="chenlei@lidig.com"

EXPOSE 9000/tcp

ADD ./zz-custom.conf /usr/local/etc/php-fpm.d/
ADD ./php.ini-production /usr/local/etc/php/php.ini

RUN mkdir -p \
    /var/www/php/pools/www/log \
    /var/www/php/log \
    /var/www/php/session \
  && touch /var/www/php/pools/www/log/www.log.slow \
        /var/www/php/log/error.log \
      && sed -i -r "/\[global\]/ asyslog.ident=$(cat /etc/hostname)" /usr/local/etc/php-fpm.d/zz-custom.conf

VOLUME /var/www/php
