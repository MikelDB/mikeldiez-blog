FROM node:13-alpine

RUN apk update && \
    apk upgrade && \
    apk add git && \
    apk add openssh-client && \
    apk add autoconf && \
    apk add automake

RUN npm install -g gatsby-cli