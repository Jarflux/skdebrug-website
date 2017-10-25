FROM nginx:alpine
MAINTAINER jarflux

RUN apk update \
 && apk upgrade \
 && apk --no-cache add ca-certificates openssl tar wget tzdata certbot \
 && update-ca-certificates \
 && rm -rf /var/cache/apk/*

# Install OpenJDK java
RUN apk --update add openjdk7-jre

# Copy dropwizard content en start script to the correct location
COPY dropwizard /opt/skdebrug/

# Copy Nginx configuration to correct location
COPY nginx.conf /etc/nginx/nginx.conf
COPY .htpasswd /etc/nginx/.htpasswd

# Place static content in correct location
COPY html /var/www/html

WORKDIR /opt/skdebrug
ENTRYPOINT ["sh", "start.sh"]

