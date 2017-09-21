FROM nginx:alpine
MAINTAINER jarflux

RUN apk update \
 && apk upgrade \
 && apk add ca-certificates openssl \
 && update-ca-certificates \
 && apk add --update tzdata \
 && rm -rf /var/cache/apk/* \

# Change TimeZone
ENV TZ=Europe/Brussels

# Install oracle java
WORKDIR /usr/java

RUN wget http://download.oracle.com/otn-pub/java/jdk/8u144-b01/090f390dda5b47b9b721c7dfaa008135/jre-8u144-linux-x64.tar.gz
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u144-b01/090f390dda5b47b9b721c7dfaa008135/jdk-8u144-linux-x64.tar.gz
RUN tar zxvf jdk-8u144-linux-x64.tar.gz
RUN rm jdk-8u144-linux-x64.tar.gz

ENV JAVA_VERSION 8
ENV JAVA_HOME /usr/java/jdk1.8.0_144
ENV PATH $JAVA_HOME/bin:$PATH

RUN update-alternatives --install "/usr/bin/java" "java" "/usr/java/jdk1.8.0_144/bin/java" 1
RUN update-alternatives --set java /usr/java/jdk1.8.0_144/bin/java
RUN update-alternatives --display java

# Copy dropwizard content en start script to the correct location
COPY dropwizard /opt/skdebrug/

# Copy Nginx configuration to correct location
COPY nginx.conf /etc/nginx/nginx.conf
COPY .htpasswd /etc/nginx/.htpasswd

# Place static content in correct location
COPY html /var/www/html

WORKDIR /opt/skdebrug
ENTRYPOINT ["sh", "start.sh"]

