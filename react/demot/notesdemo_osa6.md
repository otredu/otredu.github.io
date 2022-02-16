## Notes-demo osa 6

### Login (frontend)

Tee uusi lomakekomponentti, joka pyytää käyttääjältä käyttäjänimen sekä salasanan. Muista tehdä input-kentille tilamuuttujat ja two-way-binding. Sijoita *loginHandler* - callback App.js:ään ja välitä se *props:ina lomakekomponentille:

```js
  const loginHandler = (e, userdata) => {
    e.preventDefault();
    axios.post(loginURL, userdata)
    .then(response => {
      console.log(response.data)
    })
  }
```

Aseta *loginURL*:

```js
const loginURL = "/login"
```

Nyt konsolille pitäisi tulla näkyviin backend:in tuottama *authtoken*. Jotta huomaamme milloin käyttäjän autentikaatiotiedot vaihtuvat, tallennetaan authtoken tilamuuttujaan:

Lisää App.js:ään uusi tilamuuttuja:

```js
const [token, setToken] = useState(null);
```

Ja tallenna token siihen *loginHandler*:in *.then* - haarassa:

```js
setToken(response.data)
```

Jotta käyttäjä myös pysyy sisäänkirjautumeena tallennetaan *authtoken* myös selaimen muistiin. Ennen sitä se pitää muuttaa mekkijonoksi *JSON.stringify*:llä (selaimen *localstorage*:een voi tallentaa vain merkkijonoja):

```js
window.localStorage.setItem('notesdemouser', JSON.stringify(response.data))
```

Lisätään vielä toiminnallisuus, jossa selaimen muistista tarkistetaan onko käyttäjällä tallennettuna *authtoken* vai vaaditaanko kirjautumista, tehdään uusi funktio *userHook*, joka lukee *authtoken*:in selaimenmuistista, parsii sen JavaScript-olioksi ja tallentaa tilamuuttujaan:

```js
  const userHook = () => {
    const loggedUserJSON = window.localStorage.getItem('notesdemouser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setToken(user.token)
    }
  }
```

Ajetaan tämä kerran käynnistymisen yhteydessä ja muutetaan initHook käynnistymään vasta kun token on asetettu:

```js
useEffect(userHook, []);
useEffect(startHook, [token]);
```

Lisätään vielä *startHook*:iin tarkistus sille, että token ei ole null ennen muistiinpanojen hakemista:

```js
    if (authToken === null) {
      return
    }
```

### Authtoken ja authorization - header (backend)

Nyt kun *authtoken* on frontendissä, se pitää liittää jokaisen REST-pyynnön *authorization*-headeriin, jotta backend voi tunnistaa kenestä käyttäjästä on kyse. Backend on ns. *stateless*, eli se ei "muista" kuka on kirjautunut ja kuka ei (vrt. session - tyylinen autentikaatio). Käyttäjän id saadaan jokaisen pyynnön yhteydessä lähetettävän *authtoken*:in sisältä. *authtoken* on suojattu väärentämistä vastaan, eli backend voi luottaa sen sisältämään käyttäjä id:hen.  

Jotta saamme käyttäjä id:n käyttöömme, meidän pitää tehdä muutoksia backend:iin, lisää *index.js*:ään apufunktio *getTokenFrom*, jonka avulla saadaan pyydettyä *authorization*-header:in sisältämä *authtoken*:

```js
const getTokenFrom = req => {
    const authorization = req.get('authorization');
    //console.log(authorization);
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        return authorization.substring(7)
    } else {
        return null
    }
}
```

*Huom!* *Authorization*-headerin eteen lisätään yleensä *bearer* historiallisista syistä. HTTP:ssä on mahdollista käyttää muitakin autentikointimenetelmiä, ja tämän avulla ne voitiin erottaa toisistaan (*bearer* viittaa siihe, että *authtoken* on käyttäjän "hallussa" ja se kertoo hänen identiteettinsä).

Aina kun halutaan rajata jokin toiminto vain kirjautuneelle käyttäjälle, tarkistetaan onko *authtoken* - olemassa, ja jos se on tarkistetaan kenestä käyttäjästä on kyse.

```js
 const token = getTokenFrom(req);
    console.log(token);

    if(!token){
        return res.status(401).json(
            { error: "auth token missing" }
        )
    }

    let decodedToken = null;

    try{
        decodedToken = jwt.verify(token, config.SECRET);
    }
    catch(error){
        console.log("jwt error")
    }
    
    if(!decodedToken || !decodedToken.id){
        return res.status(401).json(
            { error: "invalid token" }
        )
    }
```

Tämän koodin avulla voidaan esim. estää kirjautumatonta käyttäjää saamasta muistiinpanoja. Lisää ylläoleva koodi backendiin ja testaa, että se toimii (lähetä REST-clientillä pyyntö, jossa ei ole *authtoken*:ia ja jossa on validi *authtoken*).

Testipyynnön rakenne *authorization*-headerin kanssa on (*huom* tämä token ei toimi, vaihda siihen omasi):

```http
GET http://localhost:3001/notes HTTP/1.1
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWQiOjEsImlhdCI6MTYwMjE0NTY5OX0.lNsfJVKobqhpf8ZYU0-WopwWxwF1aPsQYjCD_U9c9Xo
```

### Käyttäjän id

Nyt käyttäjän id on tallessa muuttujassa *decodedToken.id* joten sitä voidaan hyödyntää tietokantakyselyissä. Kirjautuneen käyttäjän muistiinpanot saadaan kun lisätään *knex*-kyselyyn *where* - ehto:

```js
where('user_id', '=', decodedToken.id)
```

*Huom!* Jos tarvitaan kaksi *where*-ehtoa käytä jälkimmäisessä *andWhere*.

Sama varmistus pitää lisätä muistiinpanon poistoon ja muokkaukseen, että vain muistiinpanon luonut henkilö voi sitä muokata/poistaa.

Vastaavasti uusi muistiinpano voidaan nyt liittää kirjautuneen käyttäjän id:hen (poista nyt siis aikaisemmin kovakoodattu id):

```js
note.user_id = decodedToken.id;
```

Testaa nyt nämä backend toiminnallisuudet REST - testeillä (kirjautuneena sekä ei kirjautuneena): muistiinpanojen hakeminen, luominen, poisto ja muuttaminen.

### Services (frontend)

Jotta saadaan koodiin hieman selkeämpi rakenne, keskitetään kaikki *axios*:een, *serviceURL*:eihin ja *authtoken*:iin liittyvä yhteen moduliin *notesServices*. Tee *services* - kansio *components* - kansion rinnalle, ja tee sinne uusi tiedosto: *notesService.js*. Tehdään sinne apufunktiot, jotka lisäävät *authtoken*:in jokaiseen *axios*-kutsuun. Katso ohjetta [täältä](axios-service-token.html).

Tee myös *userService.js* ja luodaan sinne vastaavat login ja register funktiot.

Tallennetaan *authtoken* myös *notesService*:een, tehdään tämä *startHook*:issa, ennen kuin *notesService*:ä kutsutaan ensimmäisen kerran:

```js
notesService.setToken(token.token)
```

### Logout

Toteuta uloskirjautumistoiminto (esim. logout-nappi). Siihen riittää selaimen muistissa olevan *authtoken*:in poistaminen ja ohjelman uudelleen lataaminen (tyhjentää kaikki tilamuuttujat).

```js
  const logout = () => {
    window.localStorage.removeItem('notesdemouser')
    window.location.reload()
  }
```

### Tehtävä 1

Toteuta rekisteröityminen käyttäen *userService*:ä. Tee rekisteröitymislomake, ota mallia kirjautumislomakkeesta.

### Tehtävä 2

Parantele käyttöliittymää niin, että jos käyttäjä on kirjautuneena hän voi käyttää toimintoja ja valita uloskirjautumisen, ei-kirjautuneena valittavissa on vain rekisteröitymisen tai kirjautumisen. Käytä tässä *token* - tilamuuttujaa.

--- 

---> [Notesdemo, osa 7](./notesdemo_osa7.html)