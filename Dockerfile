FROM debian:jessie
MAINTAINER jarflux

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update && \
	apt-get install -y wget && \
	apt-get -y install git && \
	apt-get -y install maven && \
	apt-get -y upgrade && \
	apt-get clean && \
	apt-get purge

# Install oracle java
WORKDIR /usr/java

RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jre-7u79-linux-x64.tar.gz && \
	tar zxvf jre-7u79-linux-x64.tar.gz && \
	rm jre-7u79-linux-x64.tar.gz

ENV JAVA_VERSION 7
ENV JAVA_HOME /usr/java/jre1.7.0_79
ENV PATH $JAVA_HOME/bin:$PATH

RUN update-alternatives --install "/usr/bin/java" "java" "/usr/java/jre1.7.0_79/bin/java" 1
RUN update-alternatives --set java /usr/java/jre1.7.0_79/bin/java
RUN update-alternatives --display java

# Build & Install Dropwizard
RUN git clone https://github.com/Jarflux/dropwizard-skdebrug.git /tmp/dropwizard-skdebrug
WORKDIR /tmp/dropwizard-skdebrug
RUN mvn -f pom.xml clean package  

RUN mkdir -p /opt/skdebrug/ 
RUN cp ./target/dropwizard-1.0.jar /opt/skdebrug/dropwizard.jar 

WORKDIR /opt/skdebrug/ 
RUN java -jar dropwizard.jar server dropwizard.yml
RUN tail -f /tmp/log/dropwizard.log





