# How to deploy from console

## Pull lastest version of docker image
docker pull jarflux/skdebrug-website

## Stop all running container
docker stop $(docker ps -a -q)

## Remove all containers
docker rm $(docker ps -a -q)

## Stop and remove all containers
docker rm -f $(docker ps -a -q)

## Run Image
docker run --name skdebrug -d -p 80:80 -p 443:443 -p 9000:9000 -v /data/db:/opt/website jarflux/skdebrug-website

## Remove all images
docker rmi -f $(docker images -a -q)

## Single line deploy
docker pull jarflux/skdebrug-website && docker rm -f $(docker ps -a -q) && docker run --name skdebrug -d -p 80:80 -p 443:443 -p 9000:9000 -v /data/db:/opt/website jarflux/skdebrug-website && docker rmi $(docker images | grep "^<none>" | awk '{print $3}')