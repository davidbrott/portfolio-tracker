FROM node:24-alpine AS build-stage

WORKDIR /app

RUN corepack enable

COPY package.json yarn.lock /app

COPY .yarnrc.yml /app

RUN yarn install --frozen-lockfile

COPY . /app

RUN yarn build

FROM nginx:alpine

COPY --from=build-stage /app/dist/frontend/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

