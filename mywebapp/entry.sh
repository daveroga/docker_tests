#!/bin/bash
if [ "$NODE_ENV" = 'DEV' ];
    then exec npm run dev;
    else exec npm start;
fi;