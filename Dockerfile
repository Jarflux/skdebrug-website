FROM debian:jessie
MAINTAINER jarflux

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update && \
	apt-get install -y wget && \
	apt-get -y upgrade && \
	apt-get clean && \
	apt-get purge

# Install oracle java
WORKDIR /usr/java/latest

RUN wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/7u79-b15/jre-7u79-linux-x64.tar.gz && \
	tar zxvf jre-7u79-linux-x64.tar.gz && \
	rm jre-7u79-linux-x64.tar.gz

ENV JAVA_VERSION 7
ENV JAVA_HOME /usr/java/

RUN update-alternatives --install "/usr/bin/java" "java" "/usr/java/jre1.7.0_79/bin/java" 1
RUN update-alternatives --set java /usr/java/jre1.7.0_79/bin/java
RUN update-alternatives --display java

# Install apache maven
WORKDIR /usr/maven/

RUN wget http://apache.belnet.be/maven/maven-3/3.3.3/binaries/apache-maven-3.3.3-bin.tar.gz && \
	tar zxvf apache-maven-3.3.3-bin.tar.gz && \
	rm apache-maven-3.3.3-bin.tar.gz

ENV M2_HOME /user/maven/apache-maven-3.3.3
ENV M2 $M2_HOME/bin
ENV PATH $M2:$PATH

ENTRYPOINT ["/bin/bash"]