#!/bin/bash
certbot renew --standalone --pre-hook "nginx -s stop" --post-hook "nginx"