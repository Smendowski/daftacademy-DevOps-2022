# Todos

### Requirements
* make
* docker
* docker-compose

### Build and run all components

``` sh
make install
docker-compose up
```

or

``` sh
docker-compose build
docker-compose run --rm backend bundle install
docker-compose run --rm backend rails db:create db:migrate
docker-compose up/down
```

### Rails api console

``` sh
make run_test
```

or

``` sh
docker-compose run --rm backend rails console
```

### Run api tests

``` sh
make run_console
```

or

``` sh
docker-compose run --rm backend rails test
```


## Production

``` sh
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml run --rm backend rails db:create db:migrate
docker-compose -f docker-compose.prod.yml up
```
