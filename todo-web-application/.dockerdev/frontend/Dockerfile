FROM node:16.14.2

ENV APP_ROOT /app
WORKDIR $APP_ROOT

ENV PATH $APP_ROOT/node_modules/.bin:$PATH

COPY frontend/package.json frontend/package-lock.json $APP_ROOT/
RUN npm install --silent

COPY . $APP_ROOT
