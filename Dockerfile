FROM nginx:alpine
MAINTAINER jarflux

RUN apk update \
 && apk upgrade \
 && apk --no-cache add ca-certificates openssl tar wget tzdata certbot \
 && update-ca-certificates \
 && wget --quiet -q -O /etc/apk/keys/sgerrand.rsa.pub https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc/master/sgerrand.rsa.pub \
 && wget --quiet https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.25-r0/glibc-2.25-r0.apk \
 && apk --no-cache add glibc-2.25-r0.apk \
 && rm -rf /var/cache/apk/*

# Install OpenJDK java
RUN apk --update add openjdk7-jre
CMD ["/usr/bin/java", "-version"]

# Copy dropwizard content en start script to the correct location
COPY dropwizard /opt/skdebrug/

# Copy Nginx configuration to correct location
COPY nginx.conf /etc/nginx/nginx.conf
COPY .htpasswd /etc/nginx/.htpasswd

# Place static content in correct location
COPY html /var/www/html

WORKDIR /opt/skdebrug
ENTRYPOINT ["sh", "start.sh"]

