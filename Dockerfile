FROM node:18-alpine
RUN apk update && apk upgrade

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

CMD ["node", "index.js"]
