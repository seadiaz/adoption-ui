FROM node:12-alpine

WORKDIR /app

ADD /src /src
ADD /node_modules /node_modules
ADD /package.json /
ADD /public /public


CMD [ "yarn", "start", "--prod" ]
