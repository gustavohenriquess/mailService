
FROM node:latest

LABEL author = "gustavo._henrique@hotmail.com"
LABEL version = 1

# Create app directory
WORKDIR /app/mail

# Install app dependencies
COPY package*.json ./
RUN yarn install

# Copy app source code
COPY . .

ENV SRV_PORT=3000

#Expose port and start application
EXPOSE $SRV_PORT
CMD ["yarn", "build"]
CMD [ "yarn", "start" ]