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

Asenna lisäksi *nodemon*, *dotenv*, *knex*, *mysql*, *bcryptjs* ja *jsonwebtoken*.

```cmd
npm install nodemon
npm install dotenv
npm install mysql
npm install knex
npm install bcryptjs
npm install jsonwebtoken
```

Tarkista, että *.gitignore*:ssa, jossa on vähintään (lisää, jos ei ole):

```cmd
node_modules/
*.env
knexfile.js
```

### .env:in konffaus

Tee *.env*-tiedosto, jossa on kaikki ympäristömuuttujat. DEBUG-muuttuja aktivoi *debug*-tulostukset.

```cmd
PORT=3000
DB_USER=root
DB_PASS=mypass123
DB_HOST=localhost
DB_PORT=3306
DB_TYPE=mysql
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
    "start": "node /bin/www",
    "watch": "nodemon /bin/www"
```

Nyt kokeile käynnistää backend konsolilta:

```cmd
npm run watch
```

Avaa selaimeen http://localhost:3000, ruudulla pitäisi selaimessa näkyä: *Express* ja osoitteesta Http://localhost:3000/users pitäisi ilmestyä viesti: *respond with a resource*.

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

const config = require('../utils/config')
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);

router.post('/', (request, response, next) => {
    // koodia...
})

module.exports = router;
```

notesRouter.js sisältää nyt:

```js
var express = require('express'); //uusi
var router = express.Router();  //uusi

const config = require('../utils/config')
const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);

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
var express = require('express'); //uusi
var router = express.Router();  //uusi

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);

// app => router:iksi, lisätään next
router.post('/', (request, response, next) => {
    const body = request.body
    knex.from('users').select("*").where('username', '=', body.username)
        .then((user) => {
            if(user.length === 0){
                return response.status(401).json(
                    { error: 'invalid username or password, if' }
                )
            }
            const tempUser = user[0];
            bcrypt.compare(body.password, tempUser.password)
                .then((passwordCorrect) => {
                    if(!passwordCorrect){
                        return response.status(401).json(
                            { error: 'invalid username or password' }
                        )
                    }
                    const userForToken = {
                        username: tempUser.username,
                        id: tempUser.id
                    }
                    const token = jwt.sign(userForToken, config.SECRET)
                    response
                        .status(200)
                        .send({token, username: tempUser.username, name: tempUser.name})
            })
    })
    .catch((err) => {
        console.log(err);
        return response.status(401).json(
            { error: 'invalid username or password or database error' }
        )
    })
})

module.exports = router;
```

### registerRouter

```js
var express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs')
const config = require('../utils/config')

const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);

router.post('/', (request, response, next) => {
    const body = request.body
    const saltRounds = 10

    bcrypt.hash(body.password, saltRounds)
        .then((passwordHash) => {
            const user = {
                username: body.username,
                name: body.name,
                password: passwordHash
            }
            knex('users').insert(user)
                .then((id) => {
                    response.status(204).end()
                })
                .catch((err) => {
                    console.log(err);
                    response.status(500).json(
                        { error: 'database error in login' }
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

const config = require('../utils/config')
const jwt = require('jsonwebtoken')

const options = config.DATABASE_OPTIONS;
const knex = require('knex')(options);

// poistettu getToken

router.get('/', (request, response, next) => {

     // poistettu autentikaatiokoodit
     const userId = response.locals.auth.userId;

    knex.from('notes').select("*").where('user_id', '=', userId/*decodedToken.id */)
        .then((rows) => {
            console.log("notes");
            console.log(rows);
            response.json(rows);
        })
        .catch((err) => {
            console.log(err);
            response.status(500).json(
                { error: 'database error in get' }
            )
        });
})

router.delete('/:id', (request, response, next) => {

    // poistettu autentikaatiokoodit
    const userId = response.locals.auth.userId;

    const id = request.params.id
    console.log("delete alkaa!!!!", id)
    knex.from('notes').select('*')
        .where('user_id', '=' , userId/*decodedToken.id*/)
        .andWhere('id', '=', id)
        .del()
        .then((rows) => {
            console.log("delete")
            response.status(204).end()
        }).catch((err) => {
            console.log(err);
            response.status(500).json(
                { error: 'database error in delete' }
            )
        })
})

router.post('/', (request, response, next) => {
    const note = request.body
    console.log(note)

    if (!(note.content && (Number.isInteger(note.important)))) {
        return response.status(400).json({
            error: 'data missing'
        })
    }

    // poistettu autentikaatiokoodit
    const userId = response.locals.auth.userId;

    note.user_id = userId; /*decodedToken.id*/
    note.date = new Date();

    knex('notes').insert(note)
        .then((id) => {
            console.log("more data inserted")
            note.id = id[0];
            response.json(note);
        })
        .catch((err) => {
            console.log(err);
            response.status(500).json(
                { error: 'database error in insert' }
            )
        })
})

router.put('/:id', (request, response, next) => {

    // poistettu autentikaatiokoodit
    const userId = response.locals.auth.userId;

    const id = request.params.id
    const note = request.body
    console.log("put:", note, id);

    if (!(note.content && note.date && (Number.isInteger(note.important)))) {
        console.log("put failed")
        return response.status(400).json({
            error: 'data missing'
        })
    }

    note.date = new Date(note.date);

    console.log(note.date);

    knex.from('notes')
        .where('user_id', '=', userId /*decodedToken.id*/)
        .andWhere('id', '=' , id)
        .update(note, ['content', 'important', 'date'])
        .then(() => {
            console.log("update")
            response.status(204).end()
        })
        .catch((err) => {
            console.log(err);
            response.status(500).json(
                { error: 'database error in update' }
            )
        })
})

module.exports = router;

```

### auth - middleware

```js
const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    console.log(authorization);
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
  }

const isAuthenticated = (request, response, next) => {
        const token = getTokenFrom(request);

        if(!token){
            return response.status(401).json( {error: 'token missing'});
        }

        const decodedToken = jwt.verify(token, config.SECRET);

        if(!decodedToken || !decodedToken.id){
            return response.status(401).json( {error: 'token invalid'});
        }

        response.locals.auth = { userId: decodedToken.id }; //uusi
        next()      //uusi
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