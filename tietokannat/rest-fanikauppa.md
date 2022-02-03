## REST API

Frontendin ja backendin välillä on ohjelmointirajapinta eli API (*Application Programming Interface*). Web-palvelut rakennetaan yleensä REST-rajapintaa käyttäen (*Representational State Transfer*). REST käyttää HTTP-protokollaa, data lähetetään JSON-muodossa ja resursseihin viitataan URI:en avulla (*Uniform Resource Identifier*).

### HTTP-metodit

*REST*:in toiminta perustuu siihen, että tietyillä HTTP-metodeilla saadaan aikaan tiettyjä toiminnallisuuksia:

- GET—metodin avulla haetaan tietty resurssi sen *id*:n avulla tai kokonainen kokoelma resursseja
- POST—metodin avulla luodaan uusi resurssi
- PUT—metodin avulla päivitetään resurssi sen *id*:n avulla
- DELETE—poistaa tietyn *id*:n

### Polut

*REST*-pyynnöt osoitetaan tiettyyn osoitteeseen. *REST*:in osoitteet on tarkoitettu helposti ymmärrettäviksi esim. http://myshopping.example.com/customer/23/orders/2, palauttaa asiakkaan nro 23 tilauksen nro 2.

### Paluuarvot

*REST*-pyyntöjen tulee palauttaa järkevä *HTTP*-paluuarvo. Niitä ei tule keksiä itse, vaan jokaiselle tilanteelle oma standardin mukainen koodinsa.

| Koodi  |     Kuvaus      |  Käyttö |
|----------|:-------------:|------:|
| 200 | OK | Pyyntö onnistui |
| 201 | Created   | Uusi resurssi luotiin onnistuneesti |
| 202 | Accepted | Pyyntö hyväksyttiin mutta sen suorittaminen kestää |
| 204 | No content | Pyyntö onnistui, mutta paluuarvoa ei lähetetä |
| 301 | Moved permanently | API on muuttunut ja pyyntö ohjataan uuteen osoiteeseen |
| 400 | Bad request | HTTP pyyntö on ollut puutteellinen |
| 401 | Unauthorized | Resurssin käyttö vaatii kirjautumisen |
| 403 | Forbidden | Suojattua resurssia on yritetty käyttää |
| 404 | Not found | Resurssia ei löydy |
| 500 | Internal server error | Palvelin virhe, josta ei voi toipua |

### Fanikaupan DB

Mallinnamme yksinkertaisen verkkokaupan tietokannan:

![ER-fanikauppa](./img/fanikauppa_er.png)

![UML-fanikauppa](./img/fanikauppa_uml.png)

### Fanikaupan API vol 1 (user)

Ilman kirjautumista mahdolliset toiminnallisuudet:

| Metodi  |     URI      |  JSON server esimerkki | Kuvaus |
|----------|:-------------:|------:|------:|
| GET | products | http://localhost:3001/products | Palauttaa kaikki tuotteet |
| GET | products/:id | http://localhost:3001/products/1 | palauttaa tietyn tuotteen tiedot |
| POST | orders | http://localhost:3001/orders | lisää uuden tilauksen (ja käyttäjän) tiedot, annetaan JSON-muodossa |

### Fanikauppa API vol 2 (user)

Kun rekisteröityminen ja kirjautuminen lisätään:

| POST | register | http://localhost:3001/register | lisää uuden asiakkaan tiedot, annetaan JSON-muodossa |
| POST | login | http://localhost:3001/login | suorittaa kirjautumisen annettujen JSON-tietojen perusteella (palauttaa JSON web token:in) |

| GET | cartitems | http://localhost:3001/cartitems | palauttaa tietyn asiakkaan ostoskorin tilanteen |
| POST | cartitems | http://localhost:3001/cartitems | lisää tuotteita tietyn asiakkaan ostoskoriin, annetaan JSON-muodossa |
| PUT | cartitems/:id | http://localhost:3001/cartitems/3 | muuttaa ostoskorin sisältöä, esim. amount määrää, annetaan JSON-muodossa |
| POST | order | http://localhost:3001/order | siirtää tuotteet ostorkorista tilaukseksi, tyhjentää asiakkaan ostoskorin |
| POST | clearcartitems | http://localhost:3001/clearcartitems | tyhjentää asiakkaan ostoskorin |
| GET | orders | http://localhost:3001/orders | palauttaa tietyn asiakkaan kaikki tilaukset |
| DELETE | cartitems/:id | http://localhost:3001/cartitems/3 | poistaa tuotteen ostoskorista |

### Tietokanta migrations, seeds ja testaus - harjoitus

Tee MySQL-tietokannalle *knex migrations*:eiden avulla ylläkuvattu tietokanta. Tee myös *seeds* - tiedostot. Luo testikyselyt *knex*:in avulla seuraaville tilanteille:

- kaikkien tuotteiden pyytäminen tietokannasta
- yhden tuotteen pyytäminen tietokannasta tuotteen id:n avulla
- uuden käyttäjän lisääminen tietokantaan
- käyttäjän tietojen hakeminen tietokannasta käyttäjän id:n avulla
- tuotteen lisääminen käyttäjän ostoskoriin
- tietyn käyttäjän ostoskorin sisällön hakeminen tietokannasta
- uuden tilauksen lisääminen tietokantaan
- tietyn käyttäjän kaikkien tilausten ja niiden sisältämien tuotteiden (ja tilausmäärien) hakeminen tietokannasta
