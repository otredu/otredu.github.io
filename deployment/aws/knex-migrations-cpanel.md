## Tietokannan siirtäminen CPANEL:in MySQL-tietokantaan

### Tietokannan luominen CPANEL:iin

  Luo uusi tietokanta ja käyttäjä CPANEL:iin, liitä ne toisiinsa. Lisää AWS-serverin IP-osoite *RemoteSQL-white list*:alle CPANEL:iin.

### Migrations ja seeds Herokuun

Muokkaa knex.js tietostoon em. tietokannan kirjautumistiedot kohtaan "production":

```js
  production: {
    client: 'mysql2',
    connection: {
      host: 'your_host_in_cpanel',
      database: 'your_db_in_cpanel',
      user:     'your_db_user_in_cpanel',
      password: 'your_db_password_in_cpanel',
      ssl:  { rejectUnauthorized: false }
    },
```

Aja migrations ja seeds CPANEL:iin

```cmd
npx knex migrate:latest --env production
npx knex seed:run --env production
```