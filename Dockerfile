FROM node:7
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
RUN node index.js
EXPOSE 3005