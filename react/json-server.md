## json-server

Json-server:in avulla voidaan simuloida oikean backend:in toimintaa (toteuttaa REST API).

### Asennus

Tee uusi kansio *json-server*, siirry sen sisään, alusta *package.json*-tiedosto ja asenna *json-server*.

```cmd
cd json-server
npm init
npm i json-server --save-dev
```

Tee uusi tiedosto *db.json* ja lisää siihen seuraava notesdemon muistiinpanot (tai haluamasi json-sisältö).

```json
{
  "notes": [
    {
      "id": 1,
      "content": "HTML is easy",
      "important": true
    },
    {
      "id": 2,
      "content": "Browser can execute only JavaScript",
      "important": false
    },
    {
      "id": 3,
      "content": "GET and POST are the most important methods of HTTP protocol",
      "important": true
    }
  ]
}
```

### json-serverin käynnistys

Lisää seuraava käynnistys scritpti package.json tiedostoon:

```json
  "scripts": {
    "startdev": "npx json-server --port=3001 --watch db.json"
  }
```

Käynnistä serveri:

```cmd
npm run startdev
```