FROM node:latest as nodebuild
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "build/index.js" ]