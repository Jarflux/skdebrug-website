FROM nginx
MAINTAINER jarflux

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update && \
	apt-get -y upgrade && \
	apt-get install -y wget && \
	apt-get clean && \
	apt-get purge

# Set correct timezone and time
RUN echo "Europe/Brussels" > /etc/timezone
RUN dpkg-reconfigure -f noninteractive tzdata

# Install oracle java
WORKDIR /usr/java

RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79-linux-x64.tar.gz && \
	tar zxvf jdk-7u79-linux-x64.tar.gz && \
	rm jdk-7u79-linux-x64.tar.gz

ENV JAVA_VERSION 7
ENV JAVA_HOME /usr/java/jdk1.7.0_79
ENV PATH $JAVA_HOME/bin:$PATH

RUN update-alternatives --install "/usr/bin/java" "java" "/usr/java/jdk1.7.0_79/bin/java" 1
RUN update-alternatives --set java /usr/java/jdk1.7.0_79/bin/java
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

