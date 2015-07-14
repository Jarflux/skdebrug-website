FROM debian:jessie
MAINTAINER jarflux

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update && \
	apt-get install -y wget && \
	apt-get -y install git && \
	apt-get -y install maven && \
	apt-get -y install nginx && \
	apt-get -y upgrade && \
	apt-get clean && \
	apt-get purge

# Install oracle java
WORKDIR /usr/java

RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jdk-7u79- linux-x64.tar.gz && \
	tar zxvf jdk-7u79-linux-x64.tar.gz && \
	rm jdk-7u79-linux-x64.tar.gz

ENV JAVA_VERSION 7
ENV JAVA_HOME /usr/java/jdk1.7.0_79
ENV PATH $JAVA_HOME/bin:$PATH

RUN update-alternatives --install "/usr/bin/java" "java" "/usr/java/jdk1.7.0_79/bin/java" 1
RUN update-alternatives --set java /usr/java/jdk1.7.0_79/bin/java
RUN update-alternatives --display java

# Get Nginx configuration en start the Nginx service
# RUN git clone https://github.com/Jarflux/nginx-skdebrug.git /tmp/nginx-skdebrug
# RUN service nginx start

# Build & Install Dropwizard
RUN git clone https://github.com/Jarflux/dropwizard-skdebrug.git /tmp/dropwizard-skdebrug && \
 	mvn -f /tmp/dropwizard-skdebrug/pom.xml clean package && \
 	mkdir -p /opt/skdebrug/  && \
 	cp /tmp/dropwizard-skdebrug/target/dropwizard-1.0.jar /opt/skdebrug/dropwizard.jar && \
 	cp /tmp/dropwizard-skdebrug/dropwizard.yml /opt/skdebrug/dropwizard.yml && \ 	rm -rf /tmp/dropwizard-skdebrug

# WORKDIR /opt/skdebrug/ 
CMD java -jar dropwizard.jar server dropwizard.yml

EXPOSE 8080 8080
EXPOSE 8000 8000
EXPOSE 9000 9000
EXPOSE 9001 9001

