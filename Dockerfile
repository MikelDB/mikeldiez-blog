FROM node:13-alpine

RUN apk update && \
    apk upgrade && \
    apk add git && \
    apk add openssh-client

RUN npm install -g gatsby-cli