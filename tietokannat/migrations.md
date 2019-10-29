## Migrations

Jotta relaatiotietokannan taulujen rakenne saadaan pysymään koodin kanssa synkronissa, niiden rakenne kannattaa luoda *migrations*-työkalulla. Samalla työkalulla voidaan lisätä tietokantaan myös testitiedot *seeds*.

*node.js* ympäristölle on monta *migrations*-työkalua, tässä käytämme *knex*:iä.

### Knex:in asennus

Tee itsellesi uusi kansio ja asenna siihen *knex*. Muista listätä myös *.gitignore*.

```cmd
npm init
npm install knex --save-dev
```

Aja *knex*-init, joka luo konffaustiedoston *knexfile.js*:

```cmd
knex init
```

*knexfile.js:ssä pitäisi olla vähintään kirjautumistiedot localhost-mysql-tietokannan käyttöön:

```js
module.exports = {
    client: 'mysql',
    connection: {
      user: 'root',
      password: 'mypass123',
      database: 'my_rentals'
    }
}
```

Käynnistä MySQL ja PHPMyAdmin dockerilla ja luo *my_rentals*-tietokanta.

### Taulujen luominen

Luo uusi *migrations*-tiedosto:

```cmd
knex migrate:make create_rental
```

Tämä tekee tyhjän migrations-tiedoston *migrations*-kansioon.

Määrittele siinä *users*-taulun kentät:

```js
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', t => {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('email')
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
knex migrate:latest
```

Jos haluaa tehdä muutoksia, tämän *migrations*-version voi poistaa ajamalla:

```cmd
knex migrate:rollback
```

Tässä esimerkissä on luotu toinen taulu, ja taulujen välille relaatio:

```js
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('users', t => {
        t.increments('id').primary()
        t.string('username').notNullable()
        t.string('password').notNullable()
        t.string('email')
        t.timestamps(false, true)
    })
    .createTable('appartments', t => {
        t.increments('id').primary()
        t.string('address').notNullable()
        t.integer('user_id').unsigned().references('id').inTable('users').notNull().onDelete('cascade');
        t.timestamps(false, true)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('appartments')
    .dropTableIfExists('users')
  };
```

Huomaa, että taulut on luotava tässä järjestyksessä ja poistettava päinvastaisessa järjestyksessä.

### Seeds

Luoduille tauluille voidaan ajaa testidataa *seeds.js*-tiedostoista. Luo ensin tyhjä *seeds*-tiedosto:

```cmd
knex seed:make 01_users
```

Tämä luo tyhjän 01_users.js *seeds*-kansioon. Tallenna siihen testidata:

```js

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'fodark', password: "12", email: 'mock@email.com'},
        {id: 2, username: 'john', password: "34", email: 'mock2@email.com'},
        {id: 3, username: 'david', password: "56", email: 'mock3@email.com'}
      ]);
    });
};
```

Saat testidatan tietokantaan ajamalla:

```cmd
knex seed:run
```

Toiseen tauluun voidaan lisätä niinikään tietoja (02_appartments.js):

```js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appartments').del()
    .then(function () {
      // Inserts seed entries
      return knex('appartments').insert([
        {id: 1, address: 'Koulutie 1', user_id: 3},
        {id: 2, address: 'Koulutie 2', user_id: 2},
        {id: 3, address: 'Koulutie 3', user_id: 1}
      ]);
    });
};
```

*knex* ajaa *seeds*-tiedostot aakkosjärjestyksessä, joten ne kannattaa numeroida, niin että ajojärjestys on haluttu.

### Lisätietoa:

- [Knex migrations and seeding](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261)
- [Database migrations with Knex](http://perkframework.com/v1/guides/database-migrations-knex.html)
- [Knex cheatsheet](https://devhints.io/knex#schema)
- [Knex migrations installation](http://knexjs.org/#Installation-migrations)
