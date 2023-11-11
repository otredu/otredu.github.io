### Deployment 

Web-ohjelma julkaistaan (*deploy*) koulun pilviympäristössä (AWS tai Azure). Teemme ensin docker:in avulla imagen, joka sisältää sekä buildatun React-frontend:in että node/express-backend:in. Image käynnistetään lopuksi koulun pilvipalveluun.  

- [Sovelluksen siirtäminen koulun pilviympäristöön](../deployment/aws/notesfull.html)

Web-ohjelman julkaiseminen voidaan tehdä myös käyttämällä PaaS-ratkaisuja (esim. Heroku, Fly.io tai Render). Osa näistä on maksullisia. 

- [Sovelluksen siirtäminen internettiin](https://fullstackopen.com/osa3/sovellus_internetiin#sovellus-internetiin)

---

Harjoitukset:

1. Siirretään notesdemo 2 koulun pilviympäristöön

2. Siirretään fanikauppa 2 koulun pilviympäristöön

3. Siirretään keikkainfo 2 koulun pilviympäristöön