FROM node:10-alpine
RUN npm install -g --production json-server &&\ 
rm -rf /root/.npm /usr/lib/node_modules/npm
EXPOSE 3000
RUN mkdir /data
WORKDIR /data
VOLUME [ "/data" ]
ENTRYPOINT ["json-server", "-H", "0.0.0.0"]
CMD ["--help"]