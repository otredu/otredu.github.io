## Notesdemon deployment docker:in avulla

### Notesdemon full build

Tee notes-demon juureen uusi tiedosto nimeltä *Dockerfile* ja tallenna siihen projektisi buildaus- ja käynnistysohjeet ks. alla (tässä oletetaan, että frontin koodi on hakemistossa "notesfront" ja backend:in tiedostot hakemistossa "notesback" (ja node/express -pohja on generoitu automaattisesti):

```docker
FROM ubuntu:20.04 

WORKDIR /mydir  
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt install -y nodejs
COPY notesfront front
RUN cd front && npm install --silent && npm run build --silent && cd .. 
RUN cp -r front/dist build && rm -r front
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

    Käynnistä docker desktop, ellei jo ole käynnissä. Kirjaudu docker-hub:iin:

    ```js
    docker login
    ```

2. Buildaa kontti (container)

    Tämä ajetaan projektin juuressa, jossa *Dockerfile* sijaitsee:

    ```cmd
    docker build . -t notesdemo-full
    ```

3. Tarkista kontin sisältö (optional)

    Käynnistä kontti dockeriin. Bash:in avulla voit tarkistaa, ettei ylimäärisiä tiedostoja mennyt buildiin, erityisesti .env ei saa olla mukana! Pääset siitä ulos kirjoittamalla 'exit':

    ```cmd
    docker run -it -p 3000:3000 notesdemo-full bash
    ```

4. Käynnistä kontti ja testaa sen toiminta lokaalisti

    Tee *docker-compose.yml* - tiedosto ja lisää siihen .env - tiedostossa olevat salasanat yms.

    ```yml
    version: '3.1'

    services:
        notesdemo:
            image: notesdemo-full
            environment:
                DB_HOST: localhost
                DB_USER: my_db_user
                DB_PASS: my_pass
                DB_DATABASE: my_db
                DB_TYPE: mysql2
                DB_PORT: 3306
                PORT: 3001
                SECRET: tosisalainensalasanainen
            ports:
                - my_port:3001
    ```

    Aja nyt samassa kansiossa *docker-compose.yml*-tiedoston kanssa:

    ```cmd
    docker-compose up -d
    ```

    Nyt kontti pyörii portissa *my_port* eli esim. http://localhost:my_port.

5. Jos tämä toimii lokaalisti, voit julkaista apps:in joko Herokussa, AWS:ssa tai Azure:ssa.