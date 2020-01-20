## node-express

Node-express on yksinkertainen ja simppeli framework websovelluksille. Se sisältää HTTP-pyyntöjen reitityksen eli *router*:in sekä ketjuttuvia pyyntöjen käsittelijöitä eli *middleware*:ja.

Tässä tehdaan perus *backend*, seuraten väljästi näitä [ohjeita](https://expressjs.com/en/starter/installing.html).

### Asennus

Tee uusi projektikansio ja aja siellä *express-generator*. Tämä luo valmiin rungon webpalvelulle. Koska teemme frontin React:illa emme tarvitse *view*:tä (--no-view).

```cmd
npx express-generator --no-view
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

Lisää juureen .gitignore, jossa on vähintään:

```cmd
/node_modules
node_modules/
*.env
knexfile.js
```

### .env:in konffaus

Tee *.env*-tiedosto, jossa on kaikki ympäristömuuttujat:

```cmd
PORT=3000
DB_USER=root
DB_PASS=mypass123
DB_HOST=localhost
DB_PORT=3306
DB_TYPE=mysql
DB_DATABASE=notes_db
SECRET=tosisalainensalasanainen
```

Otetaan käyttöön ympäristömuuttujat lisäämällä *app.js* tiedoston alkuun:

```js
require('dotenv').config()
```

### Serverin käynnistys (nodemon)

Testataan, että backend käynnistyy. *express-generaattori*:n tekemään koodiin pitää lisätä webserverin käynnistys. Lisää tiedosto *index.js*:

```js
let app = require('./app');

require('dotenv').config()
port=process.env.PORT;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

Lisää myös *package.json* -tiedostoon backendin käynnistyskomennot:

```js
    "start": "node index.js",
    "watch": "nodemon index.js"
```

Nyt kokeile käynnistää backend konsolilta:

```cmd
npm run watch
```

Avaa selaimeen http://localhost:3000, ruudulla pitäisi selaimessa näkyä: *Express* ja osoitteesta Http://localhost:3000/users pitäisi ilmestyä viesti: *respond with a resource*.

### Router:eiden käyttö

Reititys (*router*) toimii niin, että *index.js* tiedostosta ohjataan pyynnöt tarkemmalle käsittelijälle, joka sijaitsee toisessa tiedostossa. Näin saadaan modulaarinen rakenne viestien käsittelyyn. Oikeastaan *router*:it ovat eräänlaisia *middleware*:ja, jotka ketjutetaan yhteen *next*:in avulla.

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

### Notesdemo:n rework

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

// tähän app vaihdetaan router:iksi, lisätään next
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
var express = require('express'); //uusi
var router = express.Router();  //uusi

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
