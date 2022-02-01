## Migrations

Jotta relaatiotietokannan taulujen rakenne saadaan pysymään koodin kanssa synkronissa, niiden rakenne kannattaa luoda *migrations*-työkalulla. Samalla työkalulla voidaan lisätä tietokantaan myös testitiedot *seeds*.

*node.js* ympäristölle on monta *migrations*-työkalua, tässä käytämme *knex*:iä.

### Knex:in asennus

Tee itsellesi uusi kansio nimeltä *database* projektisi juureen, siirry sen sisään ja asenna *knex*. Muista listätä myös *.gitignore* (ja lisää siihen knexfile.js sekä node_modules).

```cmd
cd database
npm init
npm install knex --save
```

Aja *knex*-init, joka luo konffaustiedoston *knexfile.js*. Anna projektille nimeksi esim. "notesdemo_db" ja paina *enter*-muihin kohtiin.

```cmd
npx knex init
```

*knexfile.js*:ssä pitäisi olla vähintään kirjautumistiedot localhost-tietokannan käyttöön.

Jos käytät MySQL-tietokantaa (MySQL 8 tai uudempi), päivitä *development* -tiedot seuraaviksi:

```js
module.exports = {
    client: 'mysql2',
    connection: {
      user: 'root',
      password: 'mypass123',
      database: 'notesdemo_db'
    }
}
```

Jos taas käytät Postgress-tietokantaa:

```js
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      user:'postgres',
      password: 'mypass123',
      database: 'notesdemo_db'
    }
}
```

Asenna vielä *mysql2*:

```cmd
npm install mysql2 --save
```

Tai *postgres*:

```cmd
npm install pg --save
```

### Docker

Docker:in avulla voidaan ajaa erilaisia tietokantaversioita ja kehitysympäristöjä ilman erillista asennusta. Tässä harjoituksessa opetellaan käyttämään Docker:ia lokaalin kehitysympäristön käynnistämiseen:

Käynnistä [MySQL ja PHPMyAdmin docker-compose:n avulla](https://otredu.github.io/docker/mysql-phpmyadmin.html) ja luo *notesdemo_db*-tietokanta.

### Taulujen luominen

Luo uusi *migrations*-tiedosto:

```cmd
npx knex migrate:make create_notes
```

Tämä tekee tyhjän migrations-tiedoston *migrations*-kansioon.

Määrittele siinä *users*-taulun kentät:

```js
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', t => {
        t.increments('id').primary()
        t.string('username').notNullable().unique()
        t.string('password').notNullable()
        t.timestamps(false, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
  };
```

Aja nyt ensimmäinen *migrations*:

```cmd
npx knex migrate:latest
```

Jos haluaa tehdä muutoksia, tämän *migrations*-version voi poistaa ajamalla:

```cmd
npx knex migrate:rollback
```

Tässä esimerkissä on luotu toinen taulu, ja taulujen välille relaatio:

```js
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('users', t=> {
    t.increments('id').primary()
    t.string('username').notNullable().unique()
    t.string('password').notNullable()
    t.timestamps(false, true)
  })
  .createTable('notes', t => {
      t.increments('id').primary()
      t.string('content').notNullable()
      t.datetime('date').notNullable()
      t.boolean('important').notNullable()
      t.integer('user_id').unsigned().references('id').inTable('users').notNull()
      .onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('notes')
  .dropTableIfExists('users')
};

```

Huomaa, että taulut on luotava tässä järjestyksessä ja poistettava päinvastaisessa järjestyksessä.

### Seeds

Luoduille tauluille voidaan ajaa testidataa *seeds.js*-tiedostoista. Luo ensin tyhjä *seeds*-tiedosto:

```cmd
npx knex seed:make 01_users
```

Tämä luo tyhjän 01_users.js *seeds*-kansioon. Tallenna siihen testidata:

```js

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'tester1', password: "salasana"},
        {id: 2, username: 'tester2', password: "salasana"},
      ]);
    });
};
```

Koska salasanoja ei tietenkään saa tallentaa ilman niiden salaamista, käytetään *bcryptjs*:ää salasanan *hash*:aamiseen. Asenna bcryptjs:

```cmd
npm install bcryptjs --save
```

Lisää tämä *01_users.js* tiedoston alkuun:

```js
const testPassword = "salasana"

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hashedpassword = bcrypt.hashSync(testPassword, salt);
```

Ja korvaa merkkijonomuotoinen salasana *hasedpassword*:illä:

```js
    password: hashedpassword,
```

Saat testidatan tietokantaan ajamalla:

```cmd
npx knex seed:run
```

Toiseen tauluun voidaan lisätä niinikään tietoja (02_notes.js):

```js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          id: 1,
          content: "HTML is easy",
          date: new Date("2020-11-10T17:30:31.098Z"),
          important: true,
          user_id: 1
        },
        {
          id: 2,
          content: "Browser can execute only Javascript",
          date: new Date("2020-11-10T18:39:34.091Z"),
          important: false,
          user_id: 1
        },
        {
          id: 3,
          content: "GET and POST are the most important methods of HTTP protocol",
          date: new Date("2020-11-10T19:20:14.298Z"),
          important: true,
          user_id: 2
        }
      ]);
    });
};
```

*knex* ajaa *seeds*-tiedostot aakkosjärjestyksessä, joten ne kannattaa numeroida, niin että ajojärjestys on haluttu.

### Develoment vs. production

Jos haluat ajaa tietokannan tuotantoympäristöön, muista lisätä *host*-tieto knex.js-tiedostoon (tässä on disabloitu SSL, ei sovellu tuotantokäyttöön):

```js
  production: {
    client: 'postgresql',
    connection: {
      host: 'myremoteserver',
      database: 'myremotedb',
      user:     'myremoteuser',
      password: 'myuremotepassword',
      ssl:  { rejectUnauthorized: false }
    }
```

Lisää käynnistykseen *--env* flag:

```cmd
npx knex migrate:latest --env production
npx knex seed:run --env production
```

### Lisätietoa:

- [Knex migrations and seeding](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261)
- [Database migrations with Knex](http://perkframework.com/v1/guides/database-migrations-knex.html)
- [Knex cheatsheet](https://devhints.io/knex#schema)
- [Knex migrations installation](http://knexjs.org/#Installation-migrations)
