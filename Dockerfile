FROM nginx:alpine
MAINTAINER jarflux

RUN apk update \
 && apk upgrade \
 && apk --no-cache add ca-certificates openssl tar wget tzdata \
 && update-ca-certificates \
 && wget --quiet -q -O /etc/apk/keys/sgerrand.rsa.pub https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc/master/sgerrand.rsa.pub \
 && wget --quiet https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.25-r0/glibc-2.25-r0.apk \
 && apk --no-cache add glibc-2.25-r0.apk \
 && rm -rf /var/cache/apk/*

# Install oracle java
RUN wget --quiet --no-cookies --no-check-certificate --header "Cookie:oraclelicense=accept-securebackup-cookie"  http://download.oracle.com/otn-pub/java/jdk/8u144-b01/090f390dda5b47b9b721c7dfaa008135/jre-8u144-linux-x64.tar.gz \
 && mkdir -p /opt/java \
 && tar zxf jre-8u144-linux-x64.tar.gz -C /opt/java \
 && rm jre-8u144-linux-x64.tar.gz

ENV JAVA_VERSION=8 JAVA_HOME=/opt/java PATH=$PATH:$JAVA_HOME/bin TZ=Europe/Brussels

#RUN update-alternatives --install "/usr/bin/java" "java" "/opt/java/bin/java" 1 \
# && update-alternatives --set java /opt/java/bin/java \
# && update-alternatives --display java

# Copy dropwizard content en start script to the correct location
COPY dropwizard /opt/skdebrug/

# Copy Nginx configuration to correct location
COPY nginx.conf /etc/nginx/nginx.conf
COPY .htpasswd /etc/nginx/.htpasswd

# Place static content in correct location
COPY html /var/www/html

WORKDIR /opt/skdebrug
#ENTRYPOINT ["sh", "start.sh"]

