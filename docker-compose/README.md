# Docker Compose Homework

### Zadanie 1

1. Uzupełnij definicję serwisu `redis` w pliku `docker-compose.yml`. Użyj obrazu `redis:alpine` z docker huba. Ustaw nazwę kontenera, który będzie stworzony na `users-redis`. Stwórz lokalny volumen `redis-storage`, a następnie podmontuj do niego katalog `/data` w kontenerze redisa. (1 pkt)
2. Upewnij się, że serwis `redis` działa i odpowiada na komendę ping: `docker compose run --rm redis redis-cli -h redis ping`. (1 pkt)

### Zadanie 2

Stwórz konto w registry `https://hub.docker.com`, a w nim publiczne repozytorium `users_api`. Używając dołączonego pliku `Dockerfile` zbuduj lokalnie obraz aplikacji w katalogu `api` z tagiem `twoja_nazwa_uzytkownika/users_api:1.0.0` oraz wrzuć go do stworzonego repozytorium. Pamiętaj, aby wcześniej zalogować się do docker registry. Następnie uzupełnij definicję serwisu `api` w pliku `docker-compose.yml`.

1. Użyj gotowego obrazu, który wcześniej wrzuciłeś do docker huba. Nazwij kontener `users-api`. (1 pkt)
2. Stwórz sieć `back-tier-network` typu `bridge`. Podłącz do niej serwisy `api` oraz `redis`. (1 pkt)
3. W definicji serwisu wskaż plik `.env` ze zmiennymi środowiskowymi. (1 pkt)
4. Dodaj w definicji serwisu `api` komendę uruchamiającą serwer aplikacji: `sh run.sh`. Udostępnij port `3000`, który przekieruje ruch do serwera aplikacji(kontenera) uruchomionego na porcie `8080`. Uzależnij uruchomienie serwisu `api` od serwisu `redis`, tak aby uruchamiając serwis `api`, serwisy wystartowały w kolejności: `redis` -> `api`. (1 pkt)
5. Dodaj do definicji serwisu `api` healthcheck, odpalający komendę 
`curl --fail 'http://localhost:8080/ping' || exit 1` w interwale 10s. (1 pkt)

### Zadanie 3

Uzupełnij `Dockerfile` w katalogu `web`, tak aby budowanie obrazu odbywało się w dwóch etapach. Etap pierwszy `builder` jest już uzupełniony. Dodaj do Dockerfile etap drugi `server`, który bazuje na `nginx:alpine`. Skopiuj skompilowane pliki aplikacji z katalogu `/home/app/build` z etapu `builder` do `/usr/share/nginx/html` w kontenerze, wystaw port 80 i uruchom nginxa komendą `nginx -g daemon off;`. Następnie stwórz publiczne repozytorium `users_web` w swoim koncie w docker hub. Zbuduj lokalnie obraz w katalogu `web` z tagiem `twoja_nazwa_uzytkownika/users_web:2.0.0` oraz wrzuć go do stworzonego repozytorium.

1. Uzupełnij docker compose, dodając do niego serwis `web`. Użyj wcześnij zbudowanego obrazu, który wrzuciłeś do docker huba. Nazwij kontener `users-web`. (1 pkt)
2. Stwórz sieć `front-tier-network` typu `bridge` i podłącz do niej serwisy `web` i `api`. (1 pkt)
3. Udostępnij port 80 tak aby wskazywał na serwis web. Uruchom `docker compose up` i sprawdź w przeglądarce (`http//:localhost`) czy aplikacja uruchomiła się bez błędów oraz, czy wszystkie serwisy komunikują się ze sobą: `web` -> `api` -> `redis`. (1 pkt)
