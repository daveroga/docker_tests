FROM node:15

# Create app directory
WORKDIR /usr/src/app

# Copy the app source
COPY . .

# Install app dependencies
RUN npm install

EXPOSE 12345
# We use npm run dev:
CMD [ "npm", "run", "dev" ]