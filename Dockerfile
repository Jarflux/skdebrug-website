FROM nginx:alpine
MAINTAINER jarflux

RUN apk update \
 && apk upgrade \
 && apk --no-cache add ca-certificates openssl tar wget \
 && update-ca-certificates \
 && apk --no-cache add tzdata \
 && rm -rf /var/cache/apk/* \

# Change TimeZone
ENV TZ=Europe/Brussels

# Install oracle java
RUN wget --no-cookies --no-check-certificate --header "Cookie:oraclelicense=accept-securebackup-cookie"  http://download.oracle.com/otn-pub/java/jdk/8u144-b01/090f390dda5b47b9b721c7dfaa008135/jre-8u144-linux-x64.tar.gz \
 && tar zxf jre-8u144-linux-x64.tar.gz -C /usr/java/ \
 && rm jre-8u144-linux-x64.tar.gz \
 && rm -rf /usr/java/*src.zip \
            /usr/java/lib/missioncontrol \
            /usr/java/lib/visualvm \
            /usr/java/lib/*javafx* \
            /usr/java/jre/lib/plugin.jar \
            /usr/java/jre/lib/ext/jfxrt.jar \
            /usr/java/jre/bin/javaws \
            /usr/java/jre/lib/javaws.jar \
            /usr/java/jre/lib/desktop \
            /usr/java/jre/plugin \
            /usr/java/jre/lib/deploy* \
            /usr/java/jre/lib/*javafx* \
            /usr/java/jre/lib/*jfx* \
            /usr/java/jre/lib/amd64/libdecora_sse.so \
            /usr/java/jre/lib/amd64/libprism_*.so \
            /usr/java/jre/lib/amd64/libfxplugins.so \
            /usr/java/jre/lib/amd64/libglass.so \
            /usr/java/jre/lib/amd64/libgstreamer-lite.so \
            /usr/java/jre/lib/amd64/libjavafx*.so \
            /usr/java/jre/lib/amd64/libjfx*.so

ENV JAVA_VERSION 8
ENV JAVA_HOME /usr/java
ENV PATH $JAVA_HOME/bin:$PATH

#RUN update-alternatives --install "/usr/bin/java" "java" "/usr/java/bin/java" 1 \
# && update-alternatives --set java /usr/java/bin/java \
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

