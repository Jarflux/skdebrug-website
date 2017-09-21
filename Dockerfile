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
 && ln -s /opt/java/jre1.8.0_144/bin/java /usr/bin/java \
 && rm jre-8u144-linux-x64.tar.gz \
 && rm -rf /opt/java/jre1.8.0_144/*src.zip \
            /opt/java/jre1.8.0_144/lib/missioncontrol \
            /opt/java/jre1.8.0_144/lib/visualvm \
            /opt/java/jre1.8.0_144/lib/*javafx* \
            /opt/java/jre1.8.0_144/jre/lib/plugin.jar \
            /opt/java/jre1.8.0_144/jre/lib/ext/jfxrt.jar \
            /opt/java/jre1.8.0_144/jre/bin/javaws \
            /opt/java/jre1.8.0_144/jre/lib/javaws.jar \
            /opt/java/jre1.8.0_144/jre/lib/desktop \
            /opt/java/jre1.8.0_144/jre/plugin \
            /opt/java/jre1.8.0_144/jre/lib/deploy* \
            /opt/java/jre1.8.0_144/jre/lib/*javafx* \
            /opt/java/jre1.8.0_144/jre/lib/*jfx* \
            /opt/java/jre1.8.0_144/jre/lib/amd64/libdecora_sse.so \
            /opt/java/jre1.8.0_144/jre/lib/amd64/libprism_*.so \
            /opt/java/jre1.8.0_144/jre/lib/amd64/libfxplugins.so \
            /opt/java/jre1.8.0_144/jre/lib/amd64/libglass.so \
            /opt/java/jre1.8.0_144/jre/lib/amd64/libgstreamer-lite.so \
            /opt/java/jre1.8.0_144/jre/lib/amd64/libjavafx*.so \
            /opt/java/jre1.8.0_144/jre/lib/amd64/libjfx*.so \
  && java -version

ENV JAVA_VERSION=8 JAVA_HOME=/opt/java/jre1.8.0_144 PATH=$PATH:$JAVA_HOME/bin TZ=Europe/Brussels

# Copy dropwizard content en start script to the correct location
COPY dropwizard /opt/skdebrug/

# Copy Nginx configuration to correct location
COPY nginx.conf /etc/nginx/nginx.conf
COPY .htpasswd /etc/nginx/.htpasswd

# Place static content in correct location
COPY html /var/www/html

WORKDIR /opt/skdebrug
ENTRYPOINT ["sh", "start.sh"]

