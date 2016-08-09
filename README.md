## How to deploy from console

# Pull lastest version of docker image
docker pull jarflux/docker-skdebrug

# Get id of running container
docker ps

# Stop the running container
docker stop <ID>

# Run Image
docker run -d -p 80:80 -p 9000:9000 jarflux/docker-skdebrug

# Fill site with data agian
curl /data/dev/fill