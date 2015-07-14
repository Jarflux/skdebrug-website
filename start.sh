#!/bin/bash
nginx # start Nginx dispatcher
java -jar dropwizard.jar server dropwizard.yml  # start dropwizard backend