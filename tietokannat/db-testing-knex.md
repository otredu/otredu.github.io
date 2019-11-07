## Tietokannan testaaminen

Testaa tietokantasi toiminta. Testaa erityisesti tietokantasi rakenne tekemällä riittävä määrä kyselyjä, joissa yhdistelet tietokannan tauluja. Muista testata myös tietueen poistaminen ja muuttaminen.

Käytä testaamiseen *Knex*:n querybuilder-rajapintaa. Tässä muutamia esimerkkejä (toimivat Knex-migrations demon tietokannan kanssa).

Tee tietokannan testaamisesta lyhyt raportti, josta käy ilmi tietokannan rakenne (myös tietotyypit), mitä toimintoja olet testannut ja mikä oli testauksen tulos.

Tee testikyselyt omaan *db_tests.js*-tiedostoon. Aja tiedosto node:lla:

```cmd
node db_tests.js
```

Voit tulostaa kyselyn tulokset konsolille (*console.log*). Voit halutessasi automatisoida tietokantatestit myös käyttäen JEST:iä.

Voit tulostaa konsolille myös syntyneen SQL-lauseen (tämä lisätään ennen *query*:ä).

```js
knex.on('query', console.log);
```

### Yhteyden muodotaminen tietokantaan

Käynnistä MySQL ja PHPMyAdmin dockeriin. PHPMyAdmin:in avulla voit tarkistaa, että tietokannan sisältö muuttuu vastaavasti.

```js
const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'mypass123',
        database: 'my_rentals'
    }
}

const knex = require('knex')(options);

knex.on('query', console.log);  // SQL-muoto
```

### Select *

Tietokantataulun saa ulos kokonaisuudessaa *select("*")*-metodikutsun avulla. Konsolille voi logittaa suoraan *Knex*:in palauttaman *rows*-taulukon, tai tulostaa tietueiden kentät *forEach*:in avulla.

```js
knex.from('apartments').select("*")
    .then((rows) => {
        console.log("starting apartments");
        console.log(rows);
        rows.forEach(row => console.log(`Id: ${row['id']} Address: ${row['address']} User_id: ${row['user_id']}`));
    })
    .catch((err) => {
        console.log( err); throw err })
    .finally(() => {
        console.log("destroyed 1")
        knex.destroy();
    });
```

### Select where

Yksittäisen tietueen tiedot saa *select().where()*-metodien avulla.

```js
knex.from('apartments').select("address", "user_id").where('user_id', '>=', '2')
    .then((rows) => {
        console.log(rows)
    })
    .catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
```

### Select orderBy

Tietueet saadaan haluttuun järjestykseen *select().orderBy()*-metodien avulla:

```js
knex.from('apartments').select('address', 'user_id').orderBy('address', 'asc')
    .then((rows) => {
        console.log("ordered")
        console.log(rows);
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
```

### Insert

Tietokantaan voi lisätä yhden tai useamman tietueen *insert*-metodin avulla:

```js
const more_apartments = [
    {address: 'Kissatie 2901', user_id: 3},
    {address: 'Koiratie 3', user_id: 3},
    {address: 'Karhutei 44', user_id: 3},
    ]

knex('apartments').insert(more_apartments)
    .then(() => console.log("more data inserted"))
    .catch((err) => { console.log(err); throw err })
    .finally(() => {
        knex.destroy();
    });
```

### Delete/del

Tietueita voi poistaa *select().where().del().*-metodien avulla:

```js
knex.from('apartments').select('*')
    .where('user_id', 3)
    .del()
    .then((rows) => {
        console.log("delete")
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
```

### Update

Tietueen tiedot voidaan päivittää *from().where().update()*-metodien avulla:

```js
knex.from('apartments')
    .where({ id: 2 })
    .update({ address: "Uusi huima osoite" }, ['id', 'address']) //how to addess these?
    .then((returnvalue) => {
        console.log("update")
        console.log("paluuarvo", returnvalue);
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
```

### Inner join

Kahden taulun tiedot voidaan yhdistää *from().join().select()*-metodeilla:

```js
knex.from('users')
    .join('apartments', 'users.id', '=', 'apartments.user_id')
    .select('users.id', 'users.username', 'apartments.address', 'users.email')
    .then((rows) => {
        console.log("inner join")
        console.log(rows);
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
```

Jos tietokannassasi on tauluja, joiden nimet ovat samat (esim. *id*), JavaScript:in kanssa tulee *name collision*-ongelma, eli palautuvassa oliossa on vain yksi sen niminen kenttä. Tämän voi välttää käyttämällä *options*-asetuksia:

```js
    .options({ nestTables: "_"})
    .options({ nestTables: true})
```

Ensimmäinen lisää syntyvän olion kentille *prefix*:inä taulun nimen, toinen luo sisäkkäisiä olioita.

```js
knex.from('shows')
    .join('users', 'users.id', '=', 'shows.user_id')
    .join('apartments', 'apartments.id', '=', 'shows.apartment_id')
    .select('shows.id', 'apartments.id', 'shows.showdate', 'users.username', 'users.email', 'apartments.address')
    .options({ nestTables: "_"})
    .then((rows) => {
        console.log("inner joins")
        console.log(rows);
        rows.forEach((row) => console.log(new Date(row['shows_showdate']).toLocaleDateString()))
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
```

Tämä kysely palauttaa siis:

```js
{
    shows_id: 3,
    apartments_id: 3,
    shows_showdate: 2019-10-06T21:00:00.000Z,
    users_username: 'fodark',
    users_email: 'mock@email.com',
    apartments_address: 'Koulutie 3'
}
```

Huomaa, että mysql-kanta tallentaa päivämäärät ja ajat UTC-muodossa (*shows_showdate*), joten ne näyttävät hieman oudoilta *raw*-muodossa. Ajan saa muunnettua lokaaliksi luomalla *Date()*-olion ja tulostamalla sen *toLocaleDateString()*-metodin avulla:

```js
rows.forEach((row) => console.log(new Date(row['shows_showdate']).toLocaleDateString()))
```