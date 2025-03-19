## node-express

Node-express on yksinkertainen ja simppeli framework websovelluksille. Se sisältää HTTP-pyyntöjen reitityksen eli *router*:in sekä ketjuttuvia pyyntöjen käsittelijöitä eli *middleware*:ja.

Tässä tehdaan perus *backend*, seuraten väljästi näitä [ohjeita](https://expressjs.com/en/starter/installing.html).

### Asennus

Tee uusi projektikansio ja aja siellä *express-generator*. Tämä luo valmiin rungon webpalvelulle. Koska teemme frontin React:illa emme tarvitse *view*:tä (--no-view). Generoidaan myös .gitignore (--git).

```cmd
npx express-generator --no-view --git
```

Asenna nyt tarvittavat kirjastot:

```cmd
npm install
```

Asenna lisäksi *nodemon*, *dotenv*, *knex*, *mysql2*, *bcryptjs*, *jsonwebtoken* ja *ajv*.

```cmd
npm install nodemon --save-dev
npm install dotenv --save
npm install mysql2 --save
npm install knex --save
npm install bcryptjs --save
npm install jsonwebtoken --save
npm install ajv --save
```

Tarkista, että *.gitignore*:ssa, jossa on vähintään (lisää, jos ei ole):

```cmd
node_modules/
/node_modules
*.env
/build
build/
knexfile.*
```

### .env:in konffaus

Tee *.env*-tiedosto, jossa on kaikki ympäristömuuttujat. DEBUG-muuttuja aktivoi *debug*-tulostukset.

```cmd
PORT=3001
DB_USER=root
DB_PASS=mypass123
DB_HOST=localhost
DB_PORT=3306
DB_TYPE=mysql2
DB_DATABASE=notes_db
SECRET=tosisalainensalasanainen

DEBUG=notesmiddleware:*
```

Ympäristömuuttujat voidaan ottaa käyttöön lisäämällä tiedoston alkuun:

```js
require('dotenv').config()
```

Tehdään vielä apukirjasto *./utils/config.js*, johon tallennetaan tietokantaparametrit *knex*:in vaatimassa muodossa (*DATABASE_OPTIONS*):

```js
require('dotenv').config()

let PORT = process.env.PORT
let SECRET = process.env.SECRET

let DATABASE_OPTIONS = {
    client: process.env.DB_TYPE,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    }
}

module.exports = {
  DATABASE_OPTIONS,
  PORT,
  SECRET
}
```

### Serverin käynnistys (nodemon)

Testataan, että backend käynnistyy. *express-generaattori* on luonut tiedoston */bin/www*, jonka voi käynnistää *nodemon*:illa. Lisää siihen *.env*.

```js
require('dotenv').config()  
```

Lisää myös *package.json* -tiedostoon backendin käynnistyskomennot:

```js
    "start": "node ./bin/www",
    "startdev": "nodemon ./bin/www"
```

Nyt kokeile käynnistää backend konsolilta:

```cmd
npm run startdev
```

Avaa selaimeen http://localhost:3001, ruudulla pitäisi selaimessa näkyä: *Express* ja osoitteesta Http://localhost:3001/users pitäisi ilmestyä viesti: *respond with a resource*.

### Router:eiden käyttö

Reititys (*router*) toimii niin, että *app.js* tiedostosta ohjataan pyynnöt tarkemmalle käsittelijälle, joka sijaitsee toisessa tiedostossa. Näin saadaan modulaarinen rakenne viestien käsittelyyn. Oikeastaan *router*:it ovat eräänlaisia *middleware*:ja, jotka ketjutetaan yhteen *next*:in avulla.

Esimerkissä on valmiina kaksi *endpoint*:ia, jotka on tuotu *app.js* -tiedostoon.

```js
app.use('/', indexRouter);
app.use('/users', usersRouter);
```

Tämän rakenteen avulla *usersRouter*:ssa *endpoint*:n nimet lyhenevät (huomaa *next*-parametri, jonka avulla näitä voidaan liittää ketjuksi):

```js
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
```

### Tietokantayhteyden muodostus

Tietokantayhteys muodostetaan vain kerran, joten nyt kun koodia jaetaan useampaan router-tiedostoon, tämä asia pitää ottaa huomioon. Tehdään siis uusi tiedosto *utils/dbConnection.js*, joka sisältää tietokantayhdeyden muodostamisen: 

```js
const config = require('./config.js')
const options = config.DATABASE_OPTIONS;
const db = require('knex')(options)
module.exports = db;
```

Tätä käytetään jatkossa, jokaisessa router:issa.

```js
const knex = require('../utils/dbConnection');
```

### Notesdemo:n

Siirretään nyt *notesdemon* koodi erillisiin *router*-tiedostoihin. Rekisteröityminen *registerRouter.js*, kirjautuminen *loginRouter.js* ja muut tiedostoon *notesRouter.js*:

Uudet endpointit ovat nyt:

```cmd
POST /register
POST /login

GET /notes
POST /notes
DELETE /notes/:id
PUT /notes/:id
```

loginRouter.js ja registerRouter.js sisältävät nyt:

```js
var express = require('express');
var router = express.Router();
const knex = require('../utils/dbConnection');

router.post('/', (request, response, next) => {
    // koodia...
})

module.exports = router;
```

notesRouter.js sisältää nyt:

```js
var express = require('express'); 
var router = express.Router();  
const knex = require('../utils/dbConnection');

router.get('/', (request, response, next) => {
    // koodia
})

router.delete('/:id', (request, response, next) => {
    // koodia
})

router.post('/', (request, response, next) => {
    // koodia
})

router.put('/:id', (request, response, next) => {
    // koodia
})

module.exports = router;
```

---

### loginRouter

```js
var express = require('express');
var router = express.Router();
const knex = require('../utils/dbConnection');

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/', (req, res, next) => {
    const user = req.body;
    console.log(user);

    knex('users').select('*').where('username', '=', user.username)
        .then((dbuser) => {
            if (dbuser.length == 0) {
                return res.status(401).json(
                    { error: "invalid username or password" }
                )
            }
            const tempUser = dbuser[0];
            bcrypt.compare(user.password, tempUser.password)
                .then((passwordCorrect) => {
                    if (!passwordCorrect) {
                        return res.status(401).json(
                            { error: "invalid username or password" }
                        )
                    } 

                    const userForToken = {
                        username: tempUser.username,
                        id: tempUser.id
                    } 

                    const token = jwt.sign(userForToken, config.SECRET)

                    res.status(200).send({
                        token,
                        username: tempUser.username,
                        role: "regularuser"
                    })
                })
        })
        .catch((err) => {
            res.status(500).json(
                { error: err }
            )
        })
})

module.exports = router;
```

### registerRouter

```js
var express = require('express');
var router = express.Router();
const knex = require('../utils/dbConnection');

const bcrypt = require('bcryptjs')

router.post('/', (req, res, next) => {
    const user = req.body;
    const saltRounds = 10;
    console.log(user);

    bcrypt.hash(user.password, saltRounds)
        .then((passwordHash) => {
            const newUser = {
                username: user.username,
                password: passwordHash,
                email: user.email
            }
    
            knex('users').insert(newUser)
                .then(() => {
                    res.status(204).end()
                })
                .catch((err) => {
                    console.log(err);
                    res.status(500).json(
                        { error: err }
                    )
                })
        })
})

module.exports = router;
```

### notesRouter

```js
var express = require('express');
var router = express.Router();
const knex = require('../utils/dbConnection');

router.get('/', (req, res, next) => {
    const decodedTokenId = res.locals.auth.userId; 

    knex('notes').select('*').where('user_id', '=', decodedTokenId)
        .then((rows) => {
            res.json(rows);
        })
        .catch((err) => {
            console.log('SELECT * NOTES failed')
            res.status(500).json(
                { error: err }
            )
        })
})

router.post('/', (req, res, next) => {
    const note = req.body;
    console.log(note);

    note.user_id = res.locals.auth.userId; 

    const newNote = {
        content: note.content,
        important: note.important,
        date: new Date(note.date),
        user_id: note.user_id 
    }

    knex('notes').insert(newNote)
        .then(id_arr => {
            console.log(id_arr);
            note.id = id_arr[0];
            res.json(note);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(
                { error: err }
            )
        })
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(id);

    const decodedTokenId = res.locals.auth.userId; 

    knex('notes').where('user_id', "=", decodedTokenId).andWhere('id', '=', id).del()
        .then(status => {
            console.log("deleted ok")
            res.status(204).end();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(
                { error: err }
            )
        })
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const note = req.body;

    const decodedTokenId = res.locals.auth.userId; 

    const updatedNote = {
        content: note.content,
        important: note.important,
        date: new Date(note.date)
        }

    knex('notes').update(updatedNote).where('user_id', "=", decodedTokenId)
    .andWhere('id', '=', id)
        .then((response) => {
            console.log(response)
            res.status(204).end();
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(
                { error: err }
            )
        })

})

module.exports = router;

```

### auth - middleware

Tee middleware-kansio ja sen sisään *auth.js*-tietosto:

```js
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const getTokenFrom = req => {
    const authorization = req.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    } else {
        return null
    }
}

const isAuthenticated = (req, res, next) => {
    const token = getTokenFrom(req);
    console.log(token);

    if (!token) {
        return res.status(401).json(
            { error: "auth token missing" }
        )
    }

    let decodedToken = null;

    try {
        decodedToken = jwt.verify(token, config.SECRET);
    }
    catch (error) {
        console.log("jwt error")
    }

    if (!decodedToken || !decodedToken.id) {
        return res.status(401).json(
            { error: "invalid token" }
        )
    }
    res.locals.auth = { userId: decodedToken.id }; 
    next(); 
}

module.exports = isAuthenticated;
```

Otetaan *auth*-middleware käyttöön notesRouter:ille:

```js
app.use('/notes', isAuthenticated, notesRouter);
```

Otetaan *auth*-middleware käyttöön *notesRouter*:issa (poimitaan dekoodattu userId *response.locals.auth* - kentästä):

```js
     const userId = response.locals.auth.userId;
```

### JSON-body:n validointi

Koska backendin pitää testata sille tuleva data (tietotyypit, kenttien pituudet yms.) kätevintä on käyttää siihen tarkoitettua middleware-kirjastoa. Sellaisen voi tehdä myös itse. JSON-body:n sisällön vaatimukset voi esittää monella tavalla, mutta yksi standarditapa on käyttää [*JSON Schema*](https://json-schema.org/understanding-json-schema/reference/) - muotoa ja *regexp*-notaatiota. Sille on oma validaattorikirjastonsa *ajv*. 

Koska tämä middleware tarvitsee eri scheman jokaiselle body:lle, se annetaan parametrina kutsuttaessa. 

Tee ensin jokaiselle json-formaatille oma json-schema (omat tiedostot jokaiselle), laita nämä omaan kansioonsa *schemas*:

userschema.json:
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "user",
    "type": "object",
    "properties": {
    "email": {
    "type": "string",
    "pattern": "^\\S+@\\S+\\.\\S+$",
    "minLength": 5,
    "maxLength": 50
    },
    "username": {
    "type": "string",
    "minLength": 6,
    "maxLength": 32
    },
    "password": {
    "type": "string",
    "minLength": 8,
    "maxLength": 32
    },
    "phonenumber": {
        "type": "string",
        "pattern": "\\+(9[976]\\d|8[987530]\\d|6[987]\\d|5[90]\\d|42\\d|3[875]\\d|2[98654321]\\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\\d{1,14}$",
        "minLength": 8,
        "maxLength": 32
    }
    },
    "required": [
    "username",
    "password"
    ]
    }
```

notesschema.json:
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "note",
    "type": "object",
    "properties": {
    "content": {
    "type": "string",
    "minLength": 1,
    "maxLength": 500
    },
    "date": {
    "type": "string",
    "pattern": "\\b[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}.[0-9]{3}Z\\b"
    },
    "important": {
        "type": "boolean"
    },
    "user_id": {
        "type": "integer"
    }
    },
    "required": [
    "content",
    "date",
    "important"
    ]
    }
```

Lisää *app.js*:ään seuraavat *require*-lauseet:

```js
var userschema = require('./schemas/userschema.json');
var noteschema = require('./schemas/noteschema.json');
var validateSchema = require('./middleware/validate');
```

Lisää *validateSchema*-middleware-reitteihin:
```js
app.use('/register', validateSchema(userschema), registerRouter);
app.use('/login', loginRouter);
app.use('/notes', isAuthenticated, validateSchema(noteschema), notesRouter);
```

Varsinainen validateSchema-middleware käyttää *Ajv*-kirjastoa validointiin. Se saa scheman parametrina ja palauttaa varsinaisen middleware - funtion (return palauttaa nimettömän funktion määrittelyn):

validate.js
```js
const Ajv = require('ajv');
var ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const validateSchema = (schema) => {
    return function(req, res, next){
        console.log("starting middleware2")
        const reqmethod = req.method;
        if(reqmethod === "POST" || reqmethod === "PUT"){
            const body = req.body;
            var validate = ajv.compile(schema);
            var valid = validate(body);
            if (!valid){
                console.log(validate.errors);
                return res.status(401).json(
                    { error: "check json-data" })
            } else {
                next();
            }
        }   
        else {
            next();
        }  
    }
}

module.exports = validateSchema;
```

### React-front (build)

Notes-demo:ssa on tehty valmiiksi frontend, jonka avulla voi lisätä uusia muistiinpanoja, poistaa muistiinpanoja sekä muokata muistiinpanon tärkeyttä.

Jotta React-front saataisiin toimimaan tehdyn backendin kanssa, siitä pitää tehdä *build*. Prosessissa *React*-koodi (JSX) muutetaan tavalliseksi HTML:ksi sekä javascriptiksi. Valmis build syntyy *build*-kansioon.

Aja *notes*-frontend:in juuressa:

```cmd
npm run build
```

Kopioi nyt koko *build*-kansio *notesmiddleware*:n juureen. Jos *express*-reititys ei löydä annettua reittiä, se voidaan ohjata palauttamaan staattisia webbisivuja. Tämä saadaan aikaan ottamalla käytöön *express.static*-middleware (on valmiina express-generaattorin tekemässä koodissa), riittää, että muutat sen käyttämäksi kansioksi *build*:

```js
app.use(express.static(path.join(__dirname, 'build')));
```

### React-router/node.js-router - ongelma ja F5

Jos käytät frontissa React-routeria, kun selaimessa painaa F5, yrittää se ladata frontend:in sisäistä reittiä (route) backend:iltä. Tämä aiheuttaa virheen, koska sellaista reittiä ei löydy backendissä tai jos löytyykin niin se ei palauta mitään järkevää HTML-koodia selaimelle. Jotta frontin omat reitit eivät menisi sekaisin backend:in reittien kanssa, käytä backend:in reittien edessä liitettä /api eli tässä vaihessa olisi hyvä muutta backendin reitit, sama muutos vaaditaan frontin serviceen (*baseURL*):

    ```js
    app.use('/api/register', validateSchema(userschema), registerRouter);
    app.use('/api/login', loginRouter);
    app.use('/api/notes', isAuthenticated, validateSchema(noteschema), notesRouter);
    ```

Kaikki muut reitit (/* wildcard) pitäisi ohjata lataamaan react-build static-kansiosta, lisää tämä viimeiseksi default-reitiksi:

    ```js
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build/index.html'), function(err) {
        if (err) {
            res.status(500).send(err)
        }
    })
    ```

    Muista lisätä myös tämä (jos ei ole jo):

    ```js
    var path = require('path');
    ```

### REST-client

Backend:in testaaminen voidaan tehdä Visual Studio code:n REST clientilla.

Sen voi asentaa [täältä](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).

#### Register (rekisteröi käyttäjä)

```js
POST http://localhost:3001/register HTTP/1.1
content-type: application/json

{
	"username": "tester123",
	"password": "salasana",
	"email": "tester@test.net"
}
```

#### Login (kirjaudu sisään)

```js
POST http://localhost:3001/login HTTP/1.1
content-type: application/json

{
	"username": "tester123",
	"password": "salasana"
}
```

#### GET (hae muistiinpanot)

```js
GET http://localhost:3001/notes HTTP/1.1
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlcjEiLCJpZCI6NCwiaWF0IjoxNjA2NzI1MDA4fQ.diCumc1pPJZGSiFp7ysqaWc5lnoZvfpZ-mBsoXfiJ0c 
```

#### POST (luo uusi muistiinpano)

```js
POST http://localhost:3001/notes HTTP/1.1
Content-Type: application/json
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlcjEiLCJpZCI6NCwiaWF0IjoxNjA2NzI1MDA4fQ.diCumc1pPJZGSiFp7ysqaWc5lnoZvfpZ-mBsoXfiJ0c

{
    "content": "Uusi viesti käyttäjältä tester123",
    "date": "2020-09-11T08:49:31.098Z",
    "important": true
}
```

#### DELETE (muistiinpanon poisto)

```js
DELETE http://localhost:3001/notes/8 HTTP/1.1
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlcjEiLCJpZCI6NCwiaWF0IjoxNjA2NzI1MDA4fQ.diCumc1pPJZGSiFp7ysqaWc5lnoZvfpZ-mBsoXfiJ0c
```

#### PUT (muistiinpanon muuttaminen)

```js
PUT http://localhost:3001/notes/9 HTTP/1.1
Content-Type: application/json
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlcjEiLCJpZCI6NCwiaWF0IjoxNjA2NzI1MDA4fQ.diCumc1pPJZGSiFp7ysqaWc5lnoZvfpZ-mBsoXfiJ0c

{
    "content": "Muutettu viesti käyttäjältä tester123",
    "date": "2020-09-11T08:49:31.098Z",
    "important": true
}
```
