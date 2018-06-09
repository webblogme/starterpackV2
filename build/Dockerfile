FROM php:5.6-apache

RUN touch /usr/local/etc/php/conf.d/uploads.ini \
    && echo "session.gc_maxlifetime = 360000; " >> /usr/local/etc/php/conf.d/uploads.ini
	
RUN touch /usr/local/etc/php/conf.d/uploads.ini \
    && echo "date.timezone = 'Asia/Bangkok';" >> /usr/local/etc/php/conf.d/uploads.ini

RUN touch /usr/local/etc/php/conf.d/uploads.ini \
    && echo "memory_limit = '500M';" >> /usr/local/etc/php/conf.d/uploads.ini

RUN touch /usr/local/etc/php/conf.d/uploads.ini \
	&& echo "upload_max_filesize = '30M';" >> /usr/local/etc/php/conf.d/uploads.ini

RUN touch /usr/local/etc/php/conf.d/uploads.ini \
	&& echo "post_max_size = '30M';" >> /usr/local/etc/php/conf.d/uploads.ini

RUN touch /usr/local/etc/php/conf.d/uploads.ini \
    && echo "max_execution_time = 600;" >> /usr/local/etc/php/conf.d/uploads.ini
	
#LOAD MOD REWRITE
RUN a2enmod rewrite

#LOAD PDO FOR MEDOO
RUN docker-php-ext-install pdo pdo_mysql

#LOAD PHP GD + mCrypt
#RUN apt-get update && \
#apt-get install -y libfreetype6-dev libjpeg62-turbo-dev libmcrypt-dev libpng-dev && \
#docker-php-ext-install -j$(nproc) iconv mcrypt && \
#docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/  &&  \
#docker-php-ext-install gd -j$(nproc) gd