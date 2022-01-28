## Notesdemon deployment docker:in avulla Herokuun

### Notesdemon full build

Tee notes-demon juureen uusi tiedosto nimeltä *Dockerfile* ja tallenna siihen projektisi buildaus- ja käynnistysohjeet ks. alla (tässä oletetaan, että frontin koodi on hakemistossa "notesfront" ja backend:in tiedostot hakemistossa "notesback" (ja node/express -pohja on generoitu automaattisesti):

```docker
FROM ubuntu:18.04 

WORKDIR /mydir  
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt install -y nodejs
COPY notesfront front
RUN cd front && npm install --silent && npm run build --silent && cd .. 
RUN cp -r front/build build && rm -r front
COPY notesback . 
RUN npm install
CMD node ./bin/www 
```

Tee myös .dockerignore-tiedosto (näitä tiedostoja ei haluta kopioida kontin sisään):

```cmd
*/node_modules
*/.env
*/.env_local
*/.env_remote
.dockerignore
*/.gitignore
.git
.aws
*/database
*/docker-compose.yml
Docker
*/readme.md
```

1. Aloita

    Käynnistä docker desktop, ellei jo ole käynnissä. Kirjaudu docker-hub:iin ja lataa ubuntu:

    ```js
    docker login
    docker pull ubuntu:18.04
    ```

2. Buildaa kontti (container)

    Tämä ajetaan projektin juuressa, jossa *Dockerfile* sijaitsee:

    ```cmd
    docker build . -t notesdemo-full
    ```

3. Aja ja testaa lokaalisti

    Käynnistä kontti dockeriin. Bash:in avulla voit tarkistaa, ettei ylimäärisiä tiedostoja mennyt buildiin, erityisesti .env ei saa olla mukana! Pääset siitä ulos kirjoittamalla 'exit':

    ```cmd
    docker run -it -p 3000:3000 notesdemo-full bash
    ```

    Avaa selaimessa http://localhost:3000

4. Nyt kontin voi julkaista joko Herokussa, AWS:ssa tai CPANEL:issa.

- [Heroku-ohjeet](../deployment/heroku/container-deployment.html)