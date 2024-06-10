FROM node:22-alpine as build
RUN apk add --update --no-cache python3 make g++
RUN ln -sf python3 /usr/bin/python
RUN mkdir /home/app && chown node:node /home/app
WORKDIR /home/app
RUN npm install -g @angular/cli

USER node
COPY --chown=node:node package.json package-lock.json* ./
RUN npm install && npm cache clean --force
ENV PATH /app/node_modules/.bin:$PATH

COPY --chown=node:node . .
CMD ng serve --host 0.0.0.0