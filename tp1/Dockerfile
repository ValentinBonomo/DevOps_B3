FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY . .
EXPOSE 3000
CMD [ "node", "build/index.js" ]
