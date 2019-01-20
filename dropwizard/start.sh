#!/bin/bash
certbot certonly --standalone --noninteractive --email ben.oeyen@gmail.com --agree-tos -d www.skdebrug.be
certbot certonly --standalone --noninteractive --email ben.oeyen@gmail.com --agree-tos -d skdebrug.be
(crontab -l ; echo "00 03 1 * * sh /opt/skdebrug/renew-ssl.sh") | crontab -
nginx # start Nginx dispatcher
java -jar dropwizard-1.29.jar server dropwizard.yml  # start dropwizard backend