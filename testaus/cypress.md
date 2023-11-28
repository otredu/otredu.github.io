## Cypress - testaustyökalu

*Cypress* on JavaScript-pohjainen testaustyökalu, jonka avulla voidaan testata web-applikaatioita (e-to-e) sekä backend-toiminnallisuuksia (REST API). 

### Cypress:in asennus

Tee uusi kansio *testing*, siirry sen sisään ja asenna Cypress:

```cmd
    cd testing
    npm init
    npm i cypress --save-dev
```    

Käynnistä Cypress:

```cmd
    npx cypress open
```

Cypress aukeaa, valitse *E2E* testaus (*end-to-end*).

![Cypress start](img/cypress.png)

Valitse selaimeksi *Chrome* ja paina *Start testing*:

![Cypress selain](img/cypress_selain.png)

### Testien lisääminen

Avaan kansio *Specs* ja lisää sinne uusi testitiedosto: *home.cy.js*.

Ensimmäinen testi avaa nettisivun:

```js
describe('Notesdemo-test-demo', () => {
  it('Visits notesdemo-test-page', () => {
    cy.visit('https://tiipar19notesdemo2v4.node.treok.io')
  })
})
```

Koska tätä osoitetta joudutaan kirjoittamaan moneen kertaan. Lisätään se *cypress.config.js* - tiedostoon: 

```js
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tiipar19notesdemo2v4.node.treok.io/',
  },
});
```

Nyt voidaan testi kirjoittaa yksinkertaisemmin:

```js
describe('Notesdemo-test-demo', () => {
  it('Visits notesdemo-test-page', () => {
    cy.visit('/')
  })
})
```

Testit ajetaan valitsemalla tiedosto ruudun vasemmasta *Specs* listasta. Tiedosto suoritetaan ja mahdolliset virheet näkyvät ruudun keskiosassa. Selainnäkymä on ruudun oikeassa ruudussa.

![cypress run test](img/cypress_run_test.png)

Koska sisäänkirjautuminen tehdään testauksen lähdes jokaisessa vaiheessa, tehdään siitä oma erillinen apumetodi, jota voidaan kutsua muista testeistä.

Lisää tiedostoon *support/commands.js* 

```js
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
  
    cy.get('input[id=username]').type(username)
  
    // {enter} causes the form to submit
    cy.get('input[id=password]').type(`${password}{enter}`, { log: false })
  
    // we are logged in!
    cy.contains('tester1')

  })

  ```

  Seuraavaksi lisätään *login*-kutsu testitiedostoon:

  ```js
  const username="tester1";
  const password="salasana";
  const test_message = "Cypress testing";

  describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // defaults to baseURL in config-file
    
    cy.login(username, password)

  })
})
  
```
Testataan uuden muistiinpanon lisääminen, lisää testiin seuraavat rivit:

```js
   cy.get('input[id=importance]').click()

   cy.get('input[id=newnote]').type(`${test_message}{enter}`)
```

Viimeisenä kirjaudutaan ulos:

```js
    cy.get('button[id=logout]').click()
```

Huomaa, että tätä sivustoa oli helppo testata, koska kaikilla UI-elementeillä oli *id*:t, joten niihin oli helppo viitata.