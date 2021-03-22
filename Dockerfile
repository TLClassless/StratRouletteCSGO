FROM node:12
WORKDIR /home/node/
ADD . /
RUN ls
RUN npm install
CMD npm run start