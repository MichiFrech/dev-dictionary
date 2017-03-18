#!/bin/bash

if [[ $TRAVIS_BRANCH == 'master' ]]
then
    scp -r -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o PubkeyAuthentication=yes -o PasswordAuthentication=no index.html dist img ubuntu@34.193.114.124:/home/ubuntu/public/dev-dictionary
else
    scp -r -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -o PubkeyAuthentication=yes -o PasswordAuthentication=no index.html dist img ubuntu@34.193.114.124:/home/ubuntu/public/develop/dev-dictionary
fi