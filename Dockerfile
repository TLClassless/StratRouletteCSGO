FROM node:12
ADD . /home/node
RUN ls
RUN cd home/node/ && npm install
CMD cd home/node/ && npm run start