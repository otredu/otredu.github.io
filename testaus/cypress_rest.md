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