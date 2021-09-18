FROM node:15

WORKDIR /usr/src/app
COPY . .
RUN if [ "$NODE_ENV" = 'DEV' ]; then npm install; else npm install --production; fi;
EXPOSE 8080
CMD ["./entry.sh"]