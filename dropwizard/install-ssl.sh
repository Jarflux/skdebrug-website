#!/bin/bash
cd /opt/skdebrug
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
./certbot-auto --nginx --noninteractive --email ben.oeyen@gmail.com --agree-tos -d www.skdebrug.be -d skdebrug.be --staging
(crontab -l ; echo "00 * * * * ./opt/skdebrug/certbot-auto renew -staging") | crontab -