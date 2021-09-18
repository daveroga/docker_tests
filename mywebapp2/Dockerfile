FROM node:15 as builder
COPY package.json /app/
COPY ./src/index.js /app/src/
COPY ./build/index.html /app/build/
WORKDIR '/app'
RUN npm install && npm run build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html