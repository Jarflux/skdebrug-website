#!/bin/bash
nginx -s stop
certbot renew --standalone
nginx