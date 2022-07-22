```bash
docker build -t zad1 -f .\zad1\Dockerfile .\zad1\
docker run -d --rm -p 8080:8000 -p 8100:8001 zad1
# Alternatively
docker run -f --rm zad 1
curl localhost:8080
curl localhost:8100
```
-d -> Run container in background and print container ID
--rm -> Automatically remove container when it exits