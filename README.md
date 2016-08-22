# How to deploy from console

## Pull lastest version of docker image
docker pull jarflux/docker-skdebrug

## Stop the running container
docker stop skdebrug

## Run Image
docker run --name skdebrug -d -p 80:80 -p 9000:9000 -v /tmp/volume:/opt/website jarflux/docker-skdebrug