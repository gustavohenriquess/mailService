
FROM node:latest

LABEL author = "gustavo._henrique@hotmail.com"
LABEL version = 1

# Create app directory
WORKDIR /app/mail


# Copy app source code
COPY . .

# Install app dependencies
RUN yarn install

# Build app
RUN yarn build

# Environment variables
ENV SRV_PORT=3000

#Expose port and start application
EXPOSE $SRV_PORT

ENTRYPOINT [ "yarn", "start" ]