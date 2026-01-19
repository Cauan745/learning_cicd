FROM node:20

WORKDIR docker_images

COPY . .

RUN npm install

RUN npm run start