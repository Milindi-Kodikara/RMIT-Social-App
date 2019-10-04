#base image
FROM node:10 as react-build
ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
# set working directory
WORKDIR /app
ADD . /app

# install and cache app dependencies
COPY . ./
RUN yarn
RUN yarn build

# start app
# CMD ["npm", "start"]
