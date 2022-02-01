## Notes-demo osa 5

### Rekisteröityminen

Jotta voimme pitää kunkin käyttäjän muistiinpanot erillään, lisätään notesdemoon rekisteröityminen sekä kirjautuminen. Näiden avulla tiedämme jokaisen pyynnön yhteydessä kenestä on kyse.

Rekisteröidyttäessä pitää annettu salasana hash:ätä. Siihen käytetään *bcryptjs*-kirjastoa:

```cmd
npm install bcryptjs --save
```

Lisää *index.js*:n alkuun:

```js
const bcrypt = require('bcryptjs')
```

Hash-algoritmin suorittaminen kestää jonkin aikaa, siksi kutsu on asynkroninen, algoritmile annetaan myös ns. *salt rounds*-parametri (mitä suurempi, sitä vaikeampi salaus on murtaa mutta salaaminen kestää pidempään). Huomaa, että tässä on yhden *then*:in sisällä toinen asynkronin kutsu (knex):

```js
app.post('/register', (req, res) => {
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
                    console.log("register onnistui")
                    res.status(204).end()
                })
        })
})
```

Lisää body:n kenttien tarkistus ja virheilmoituksen lähettäminen sekä *catch*-haara tietokantaoperaatioon. Testaa REST-testin avulla (testaa myös viallinen json):

```js
POST http://localhost:3001/register HTTP/1.1
content-type: application/json

{
	"username": "tester5",
	"password": "salasana",
    "email": "test@test.com"
}
```

### Kirjautuminen


