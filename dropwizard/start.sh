#!/bin/bash
nginx # start Nginx dispatcher
java -jar dropwizard-1.13.jar server dropwizard.yml  # start dropwizard backend