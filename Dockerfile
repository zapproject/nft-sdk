# Define the Docker image with the latest version of Node
FROM node:16

COPY ./package.json / 

COPY yarn.lock / 

COPY . .

RUN yarn install 

RUN yarn build

RUN yarn global add ganache-cli

RUN yarn ganache &

CMD sh test.sh


