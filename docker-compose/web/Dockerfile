FROM node:16.14.2 as builder

ENV APP_ROOT /home/app
WORKDIR $APP_ROOT

ENV PATH $APP_ROOT/node_modules/.bin:$PATH

COPY package.json package-lock.json $APP_ROOT/
RUN npm install --silent

COPY . $APP_ROOT
RUN npm run build

FROM nginx:alpine as server
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /home/app/build .

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]