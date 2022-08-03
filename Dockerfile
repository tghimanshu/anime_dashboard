FROM node:latest

# Working directory
WORKDIR /app

# installing angular 
RUN npm i -g @angular/cli

# install dependencies
COPY package*.json .
RUN npm install

# copy all files
COPY . .

EXPOSE 4200

ENTRYPOINT [ "ng", "serve", "--host", "0.0.0.0" ]