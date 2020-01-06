#!/bin/bash

MYPATH=$(dirname $(readlink -f $0))
BASEURL="http://localhost:8080"

echo "Start ESLint Checks..."
npx eslint .
if [ $? != 0 ]
then
  echo "ESLINT FAIL. DONT RUN OTHER TESTS.";
  exit 1;
fi
echo "Done!"

echo "Start gridsome develop so we can run cypress checks..."
echo "--- $BASEURL ---"
npx gridsome develop & npx wait-on $BASEURL
echo "Done!"

echo "Run cypress checks..."
npx cypress run --record --key $CYPRESS_RECORD_KEY
echo "Done!"
