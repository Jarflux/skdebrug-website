FROM debian:jessie
MAINTAINER jarflux

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update && \
	apt-get install python-software-properties && \
	add-apt-repository ppa:webupd8team/java && \
	sudo apt-get update && \
	apt-get -y install git && \
	apt-get -y install maven && \
	apt-get install oracle-java7-installer && \
	apt-get -y upgrade && 

# clone the git repository
# RUN git clone https://bitbucket.org/elktalk/commerce-customer-api.git 

ENTRYPOINT ["/bin/bash"]