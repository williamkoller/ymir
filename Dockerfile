FROM node:16.17.0-alpine3.16

WORKDIR /app

RUN mkdir -p /app

COPY package.*json /app/

RUN npm i -g pnpm

RUN pnpm config set auto-install-peers true

RUN rm -rf node_modules \
  pnpm install

COPY . .

EXPOSE 3000

CMD pnpm start:dev