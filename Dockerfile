FROM node:12-alpine

ADD /src /node_modules /package.json /app/

WORKDIR /app

CMD [ "yarn", "start", "--prod" ]
