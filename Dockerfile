FROM nginx:alpine
MAINTAINER jarflux

RUN apk update \
 && apk upgrade \
 && wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://raw.githubusercontent.com/sgerrand/alpine-pkg-glibc/master/sgerrand.rsa.pub \
 && wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.25-r0/glibc-2.25-r0.apk \
 && apk --no-cache add ca-certificates openssl tar wget tzdata glibc-2.25-r0.apk \
 && update-ca-certificates \
 && rm -rf /var/cache/apk/*

# Change TimeZone
ENV TZ=Europe/Brussels

# Install oracle java
RUN wget --quiet --no-cookies --no-check-certificate --header "Cookie:oraclelicense=accept-securebackup-cookie"  http://download.oracle.com/otn-pub/java/jdk/8u144-b01/090f390dda5b47b9b721c7dfaa008135/jre-8u144-linux-x64.tar.gz \
 && mkdir -p /opt/java \
 && tar zxf jre-8u144-linux-x64.tar.gz -C /opt/java \
 && rm jre-8u144-linux-x64.tar.gz \
 && rm -rf /opt/java/*src.zip \
            /opt/java/lib/missioncontrol \
            /opt/java/lib/visualvm \
            /opt/java/lib/*javafx* \
            /opt/java/jre/lib/plugin.jar \
            /opt/java/jre/lib/ext/jfxrt.jar \
            /opt/java/jre/bin/javaws \
            /opt/java/jre/lib/javaws.jar \
            /opt/java/jre/lib/desktop \
            /opt/java/jre/plugin \
            /opt/java/jre/lib/deploy* \
            /opt/java/jre/lib/*javafx* \
            /opt/java/jre/lib/*jfx* \
            /opt/java/jre/lib/amd64/libdecora_sse.so \
            /opt/java/jre/lib/amd64/libprism_*.so \
            /opt/java/jre/lib/amd64/libfxplugins.so \
            /opt/java/jre/lib/amd64/libglass.so \
            /opt/java/jre/lib/amd64/libgstreamer-lite.so \
            /opt/java/jre/lib/amd64/libjavafx*.so \
            /opt/java/jre/lib/amd64/libjfx*.so

ENV JAVA_VERSION 8
ENV JAVA_HOME /opt/java
ENV PATH $PATH:$JAVA_HOME/bin
RUN which java
RUN java -version

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
ENTRYPOINT ["sh", "start.sh"]

