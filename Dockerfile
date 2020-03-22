FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install -g gulp

RUN gulp

EXPOSE 3000

CMD ["node", "dist/index.js"]