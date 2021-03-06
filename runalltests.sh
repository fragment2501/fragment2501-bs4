#!/bin/bash

MYPATH=$(dirname $(readlink -f $0))

echo "Start ESLint Checks..."
npx eslint .
if [ $? != 0 ]
then
  echo "ESLINT FAIL. DONT RUN OTHER TESTS.";
  exit 1;
fi
echo "Done!"

echo "Run cypress checks..."
npx cypress run
echo "Done!"
