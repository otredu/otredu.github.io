## Notes-demo osa 5

### Rekisteröityminen (backend)

Jotta voimme pitää kunkin käyttäjän muistiinpanot erillään, lisätään notesdemoon rekisteröityminen sekä kirjautuminen. Näiden avulla tiedämme jokaisen pyynnön yhteydessä kenestä on kyse.

Rekisteröidyttäessä pitää annettu salasana hash:ätä. Siihen käytetään *bcryptjs*-kirjastoa:

```cmd
npm install bcryptjs --save
```

Lisää *index.js*:n alkuun:

```js
const bcrypt = require('bcryptjs')
```

Hash-algoritmin suorittaminen kestää jonkin aikaa, siksi kutsu on asynkroninen. Algoritmille annetaan myös ns. *salt rounds*-parametri, mitä suurempi se on, sitä vaikeampi salaus on murtaa mutta salaaminen kestää vastaavasti pidempään. Huomaa, että tässä on yhden *then*:in sisällä toinen asynkroninen kutsu (knex):

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

*Huom!* Jos tietokantasi *users*-taulussa ei vielä ole *email*-kenttää, lisää se sinne (ks. [migrations](https://otredu.github.io/tietokannat/migrations.html) )

### Kirjautuminen (backend)

Kirjautumisen yhteydessä ensin etsitään löytyykö käyttäjä tietokannasta ja täsmääkö annettu salasana tietokannassa olevan *hash*:ätyn salasanan kanssa. Tähän käytetään samaa bcryptjs-kirjastoa kuin *hash*:in tekemiseenkin. Myös vertaaminen on hidasta, joten kutsu on asynkroninen.

Jos salasanat täsmäsivät, luodaan JSON web token, jwt-kirjaston avulla. Token palautetaan kirjautumisen yhteydessä ja se allekirjoitetaan käyttämällä serverin salaisuutta (config.SECRET). Frontend tallentaa tokenin selaimen muistiin ja lähettää sen backendille jokaisen REST-pyynnön yhteydessä. Token sisältää käyttäjän id:n ja se on allekirjoitettu niin, että backend pystyy itse tarkistamaan, että sitä ei ole käpälöity. Käyttäjän id luetaan siis aina token:in sisältä, ei json:ista!

Asenna jwt-kirjasto:

```cmd
npm install jsonwebtoken --save
```

Ja ota se käytöön index.js:ssä:

```js
const jwt = require('jsonwebtoken')
```

Lisää *.env*:iin uusi ympäristömuuttuja:

```cmd
SECRET=tosisalainensalasanainen
```

Lisää se myös *config.js*-tiedostoon (muista lisätä myös *module.exports*:iin):

```js
let SECRET = process.env.SECRET
```

```js
app.post('/login', (req, res) => {
    const user = req.body;
    console.log(user);

    knex('users').select('*').where('username', '=', user.username)
        .then((dbuser) => {
            if (dbuser.length == 0) {
                return res.status(401).json(
                    { error: "invalid username or password" }
                )
            }
            const tempUser = dbuser[0];
            bcrypt.compare(user.password, tempUser.password)
                .then((passwordCorrect) => {
                    if (!passwordCorrect) {
                        return res.status(401).json(
                            { error: "invalid username or password" }
                        )
                    } 

                    //token
                    const userForToken = {
                        username: tempUser.username,
                        id: tempUser.id
                    } 

                    const token = jwt.sign(userForToken, config.SECRET)

                    console.log(token);

                    res.status(200).send({
                        token,
                        username: tempUser.username,
                        role: "regularuser"
                    })
                })
        })
})
```

Lisää *catch*-haara tietokantaoperaatioon. Testaa lähettämällä oikeat sekä puutteelliset kirjautumistiedot.

```http
POST http://localhost:3001/login HTTP/1.1
content-type: application/json

{
    "username": "tester1",
    "password": "salasana"
}
```

---

---> [Notesdemo, osa 6](./notesdemo_osa6.html)
