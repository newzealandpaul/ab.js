#!/bin/bash

# You need a browserling account to run tests automatically in the cloud against different browsers
# you can create a free account at http://browserling.com/#create
BROWSERLING_USERNAME=browserling_username
BROWSERLING_PASSWORD=browserling_password

# You need to host the example test somewhere to run the testling tests
# the below line should be adjusted to copy the ab.js dir to your own host
rsync -e 'ssh -p 58644' -a ../ab.js aptonic.com:public_html/aptonic.com/public

curl -u $BROWSERLING_USERNAME:$BROWSERLING_PASSWORD -sSNT tests.js \
 testling.com/?browsers=iexplore/6.0,iexplore/7.0,iexplore/8.0,iexplore/9.0,chrome/13.0,chrome/14.0,chrome/15.0,firefox/3.0,firefox/5.0,firefox/7.0,firefox/8.0,safari/5.0.5,safari/5.1