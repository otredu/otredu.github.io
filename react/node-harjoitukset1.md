## Node - harjoitukset 1

### Tehtävä 1

Tässä vaiheessa täytyy viimeistään siirtyä pois JSON-serverin käytöstä ja koodata varsinainen backend käyttäen node.js:ää. Notes-demon toiminnallisuus MySQL-tietokannan ja node.js:n avulla. [Ohjeita täällä](https://otredu.github.io/frameworks/node.html)

### Tehtävä 2

Toteuta käyttäjän rekisteröityminen ja kirjautuminen. Vain kirjautunut käyttäjä voi lisätä, muokata tai poistaa muistiinpanoja. Muistiinpanoja voi lukea ilman kirjautumista.

*Huom* Tämä vaatii lisää koodia niin fronttiin kuin backendiinkin sekä muutoksen tietokantaan (users-taulu).

### Tehtävä 3

Lisää userid-kenttä muistiinpanoon, niin että kirjatunut käyttäjä voi muokata ja poistaa vain omia muistiinpanojaan.

*Huom* Tämä vaatii lisää koodia myös backendiin ja muutoksen tietokantaan (relaatio users- ja notes-taulujen väliin).

### Tehtävä 4

Refaktoroi backend koodi niin, että se käyttää autentikointiin middlewareja.

### Tehtävä 5

Luo frontista build, siirrä se backendin static-kansioon. Testaa käynnistämällä vain backend.

### Lisätehtävä 1

JSON-datan validointi.

### Lisätehtävä 2

Deployaa notesdemo pyörimään webbihotelliin tai herokuun.