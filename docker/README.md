# Docker Homework

### Zadanie 1

Przygotuj obraz na bazie `nginx:1.21.6`. Zmodyfikuj odpowiednio plik `Dockerfile`.

1. Zmodyfikuj plik `Dockerfile` tak, aby tag z wersją nginx można było podać przy budowaniu obrazu w zmiennej `NGINX_VERSION`. Domyślną wersją powinna pozostać 1.21.6. (1 pkt)

2. Przenieś pliki `default.conf` do katalogu `/etc/nginx/conf.d/` oraz `index.html` do katalogu `/usr/share/nginx/html`. Uzupełnij plik `Dockerfile` oraz konfigurację nginxa w pliku `default.conf`, tak aby po wykonaniu zapytania na port 8000 (port w kontenerze) serwer zwrócił zawartość pliku `index.html`. (1 pkt)

3. Rozszerz wyżej wymieniony plik konfiguracyjny `default.conf` tak, aby serwer http odpowiadał także na port 8001. Po wykonaniu zapytania na ten na port należy zwrócić string `DevOps 4 Beginners 2022` zakodowany algorytmem base64. (1 pkt)

4. Zainstaluj w kontenerze paczkę(aplikację) `htop`. (1 pkt) 


### Zadanie 2

Przygotuj obraz na bazie `python:3.9` z 2 zmiennymi przekazanymi w trakcie budowania: `USER_ID` oraz `PROJECT_DIR`. Zmodyfikuj odpowiednio plik `Dockerfile`.

1. Przypisz zmiennej środowiskowej `HOME` wartość ze zmiennej `PROJECT_DIR`. (1 pkt)

2. Stwórz grupę użytkowników o nazwie `app_users` i id 1000. (1 pkt)

3. Stwórz użytkownika `mobydick` należącego do grupy `app_users` o id podanym w zmiennej `USER_ID` i katalogu domowym podanym w zmiennej `PROJECT_DIR`. (1 pkt)

4. Uruchom kontener jako użytkownik `mobydick`. (1 pkt)

5. Skopiuj pliki `main.py`, `requirements.txt` oraz `run.sh` do katalogu `PROJECT_DIR` w kontenerze. Zainstaluj w kontenerze potrzebne paczki aplikacji z pliku `requiremnts.txt` za pomocą komendy `pip install -r requirements.txt`. Zmodyfikuj obraz tak aby po uruchomieniu kontenera wystartował serwer aplikacji. Plik startujacy aplikacje to run.sh (2 pkt)
