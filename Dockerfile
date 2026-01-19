FROM node:20

WORKDIR docker_images

COPY . .

RUN ["npm install", "npm run start"]