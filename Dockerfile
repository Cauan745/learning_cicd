FROM node:20

WORKDIR docker_images

COPY . .

CMD npm run start