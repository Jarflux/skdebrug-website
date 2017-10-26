#!/bin/bash
nginx -s stop
certbot certonly --standalone --noninteractive --email ben.oeyen@gmail.com --agree-tos -d www.skdebrug.be
certbot certonly --standalone --noninteractive --email ben.oeyen@gmail.com --agree-tos -d skdebrug.be
nginx
(crontab -l ; echo "00 03 1 * * sh /opt/skdebrug/renew-ssl.sh") | crontab -