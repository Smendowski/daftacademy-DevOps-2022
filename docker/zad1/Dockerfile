ARG NGINX_VERSION=1.21.6
FROM nginx:$NGINX_VERSION

COPY ./default.conf /etc/nginx/conf.d/
COPY ./index.html /usr/share/nginx/html/

RUN apt-get update && apt-get install -y htop

EXPOSE 8000-8001

LABEL Version="1.0" Author="Smendowski" \
      Email="your@email.address"
