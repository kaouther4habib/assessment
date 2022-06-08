FROM node:alpine

WORKDIR /app
VOLUME /src

RUN npm install -g nodemon
COPY ["package*.json","./"]
# ADD package.json package-lock.json ./
RUN npm init -y
# COPY ["package*.json","./"]

CMD ["nodemon", "src"]