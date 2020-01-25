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
echo "Done with eslint!"

echo "Start girdsome development server."
npx gridsome develop > /dev/null 2>&1 &
echo "Sleep 30 seconds to give gridsome time to warm up..."
sleep 30

echo "Run cypress checks..."
npx cypress run --record --key $CYPRESS_RECORD_KEY
if [ $? != 0 ]
then
  echo "CYPRESS FAIL. DONT RUN OTHER TESTS.";
  exit 1;
fi
echo "Done with cypress!"
