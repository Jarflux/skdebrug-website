FROM debian:jessie
MAINTAINER jarflux

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get -yqq update && \
	apt-get -y install python-software-properties && \
	add-apt-repository -y ppa:webupd8team/java && \
	apt-get -y update && \
	apt-get -y install git && \
	apt-get -y install maven && \
	apt-get -y install oracle-java7-installer && \
	apt-get -y upgrade

# clone the git repository
# RUN git clone https://bitbucket.org/elktalk/commerce-customer-api.git 

ENTRYPOINT ["/bin/bash"]