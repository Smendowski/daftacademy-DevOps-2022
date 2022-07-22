## Task 1

1. docker-compose up allows to spawn a new service
2. docker-compose run allows to execute commands against a running service.

```powershell
docker compose up -d redis
docker ps # Redis is running.
docker compose run --rm redis redis-cli -h redis ping
```

## Task 2
```powershell
# Preparation
docker login
docker build --tag smendowski/users_api:1.0.0 -f api/Dockerfile api/
docker push smendowski/users_api:1.0.0
```


## Task 3
```powershell
# Preparation
docker login
docker build -t smendowski/users_web:2.0.0 -f .\web\Dockerfile .\web\
smendowski/users_web:2.0.0

# Run

```