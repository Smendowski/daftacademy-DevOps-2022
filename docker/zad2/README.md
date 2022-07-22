```bash
docker build \
    -t zad2
    --build-arg USER_ID=543 \
    --build-arg PROJECT_DIR=/home/mobydick \
    -f .\zad2\Dockerfile .\zad2\

docker run -d --rm -p 9080:8080 zad2 
curl localhost:9080/items/3
```