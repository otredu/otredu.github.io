## Mongodb ja mongo-express (localhost)

Asenna konellesi mongodb-tietokanta ja mongo-express käyttäen docker-compose:a:

1. Tallenna seuraava teksti tiedostoon nimeltä docker-compose.yml:

```yml
# Use root/example as user/password credentials
version: '3.1'

services:

  mongo:
    image: mongo
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: mypass123
    ports:
      - 27017:27017

  mongo-express:
    image: mongo-express
    restart: always
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: root
      ME_CONFIG_MONGODB_ADMINPASSWORD: mypass123
      ME_CONFIG_MONGODB_URL: mongodb://root:mypass123@mongo:27017/
    ports:
      - 8083:8081
```

2. Käynnistä CMD ja kirjoita:

    ```cmd
    docker-compose up -d 
    ```

3. Avaa mongo-express selaimessa ja kirjaudu sisään

    http://localhost:8083

    - käyttäjätunnus: root
    - salasana: mypass123

4. Luo käyttöliittymästä uusi tietokanta (Database)

5. Testaa yhteys esim. node:n avulla:

    1) Asenna mongodb ja mongoose:

    ```cmd
    npm install mongodb
    npm install mongoose
    ```

    2) Tee config.js - tiedosto:

    ```js
    module.exports = {
    url: 'mongodb://localhost:27017/mydatabase',
    user: 'root',
    pwd: 'mypass123'
    }
    ```

    3) Tee connectiontest.js - tiedosto:

    ```js
    const mongoose = require('mongoose');
    const dbConfig = require('./config');

    mongoose.Promise = global.Promise;

    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true,
        user: dbConfig.user,
        pass: dbConfig.pwd,
        authSource: "admin"
    }).then(() => {
        console.log('successfully connected to the database');
    }).catch(err => {
        console.log('error connecting to the database', err);
        process.exit();
    });
    ```

    4) Aja connectiontest.js

    ```cmd
    node connectiontest.js
    ```
