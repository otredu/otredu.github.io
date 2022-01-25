## Notesdemon deployment docker:in avulla Herokuun

### Notesdemon full build

Tee notes-demon juureen uusi tiedosto nimeltä *Dockerfile* ja tallenna siihen projektisi buildaus- ja käynnistysohjeet ks. alla (tässä oletetaan, että frontin koodi on hakemistossa "notesfront" ja backend:in tiedostot hakemistossa "notesback":

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
### Build container

Tee projektistasi Docker-kontti:

```cmd
    docker build . -t notesdemo-full
```

### Testaa lokaalisti

Käynnistä kontti Docker:iin:

```cmd
    docker run -it -p 3000:3000 notesdemo-full bash
```

Tarkista bash:issä, että mitään turha ei tullut mukaan. Erityisesti .env ei saa olla mukana!
