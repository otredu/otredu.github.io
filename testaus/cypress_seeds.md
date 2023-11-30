## Testitietokannan seedaus

Kun testataan tietokannan kanssa, olisi aina ennen testejä oltava varma siitä, mitä tietokannassa on. Tätä varten on hyvä ajaa *seed*:it ennen testejä.

Kopioidaan *seeds*-kansio test-kansion sisään. Kopioidaan myös *.env*-tiedosto test-kansioon. Asennetaan test-kansiossa tarvittavat kirjastot:

```cmd
npm i mysql2 dotenv bcryptjs --save-dev
```

Tehdään test-kansion juureen tiedosto *notesdemoseeds.js*, joka sisältää koodin jolla seed:it voidaan ajaa tietokantaan:

```js
require('dotenv').config()
const options = {
    client: process.env.DB_TYPE,
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
        ssl:  { rejectUnauthorized: false }
    }
}
const knex = require('knex')(options);

const seedNotesDB = async () => {
    console.log(options)
    return await knex.seed.run();
}

module.exports = seedNotesDB;
```

Lisätään *cypress.config.js* tiedostoon uusi NodeEvent *task*:

```js
const seedNotesDB = require('./notesdemoseeds.js')

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                'defaults:db': () => {
                return seedNotesDB();
                },
            })
        },
        baseUrl: 'https://tiipar19notesdemotest.node.treok.io/',
    }
})
```
Lopuksi lisätään *beforeEach*-osioon:

```js
cy.task('defaults:db') //seeds the database
```

Nyt jokainen testi lähtee tilanteesta, jossa tietokannan sisältö on tunnettu.