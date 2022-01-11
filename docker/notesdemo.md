## Notesdemon deployment docker:in avulla Herokuun

### Notesdemon jsonversiom build

Tee notes-demon juureen uusi tiedosto nimeltä *Dockerfile* ja tallenna siihen projektisi buildaus- ja käynnistysohjeet ks. alla (tässä oletetaan, että frontin koodi on hakemistossa "front" ja json-server:in tiedostot hakemistossa "jsonserver", mukaanlukien package.json, jossa json-server on mainittu dependencynä):

```cmd
FROM ubuntu:18.04 

WORKDIR /mydir  
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash
RUN apt install -y nodejs
COPY front front
RUN cd front && npm install --silent && npm run build --silent && cd .. 
RUN cp -r front/build build && rm -r front
COPY jsonserver . 
RUN npm install
CMD npx json-server -H 0.0.0.0 --static build --port=3001 --watch db.json 
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
    docker build . -t notesdemo-jsonserv
    ```

3. Aja ja testaa lokaalisti

    Käynnistä kontti dockeriin:

    ```cmd
    docker run -it -p 3001:3001 notesdemo-jsonserv
    ```

    Avaa selaimessa http://localhost:3001

4. Heroku-tilin luominen, uuuden app:in luominen

    Tee tili heroku.com:iin, luo uusi app (valitse Eurooppa).

    ![new app](img/new_app1.png)

    ![new app, europe](img/new_app3.PNG)

5. Asenna heroku cli

    ```cmd
    npm install -g heroku
    ```

6. Kirjaudu Herokuun (hyväksy selaimessa) sekä Heroku container registry:yn

    ```cmd
    heroku auth:login
    heroku container:login
    ```

7. Tee Herokun vaatimat muutokset konttiin

    Heroku valitsee itse portin app:ille. Sen saa käyttöönsä $PORT - nimisen ympäristömuuttujan kautta, joten kontti pitää buildata vielä kerran (muuta seuraava rivi Dockerfile:ssä) ja tee uusi build:

    ```cmd
    CMD npx json-server -H 0.0.0.0 --static build --port=$PORT --watch db.json
    ```

8. Nimeä (tag) kontti Herokun vaatimalla tavalla

    ```cmd
    docker image tag notesdemo-jsonserv registry.heroku.com/notesdemo-json/web
    ```

9. Lataa kontti Heroku container registryyn

    ```cmd
     docker image push registry.heroku.com/notesdemo-json/web
     ```

10. Julkaise Herokussa

    ```cmd
    heroku container:release web -a notesdemo-json
    ```