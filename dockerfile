FROM debian:jessie
MAINTAINER jarflux

ENV DEBIAN_FRONTEND noninteractive
ENV JAVA_VERSION 7
ENV JAVA_HOME /usr/java/latest

WORKDIR /usr/java/latest

RUN apt-get -yqq update && \
	apt-get install -y wget && \
	apt-get -y upgrade && \
	apt-get clean && \
	apt-get purge

# Install oracle java
RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jre-7u79-linux-x64.tar.gz && \
	tar zxvf jre-7u79-linux-x64.tar.gz && \
	rm jre-7u79-linux-x64.tar.gz

RUN update-alternatives --install "/usr/bin/java" "java" "/usr/java/latest/jre1.7.0_79/bin/java" 1
RUN update-alternatives --set java /usr/java/latest/jre1.7.0_79/bin/java
RUN update-alternatives --display java

RUN echo "Java 7 Install Complete." 
ENTRYPOINT [/bin/bash]