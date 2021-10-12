## Ohjelmiston dokumentointi

Projektin lopuksi dokumentoi toteuttamasi user story markdown:in avulla.

### Markdown

Markdown:in avulla voi nopeasti luoda web-sivuja, joten niitä on kätevä käyttää ohjelmiston toteutuksen dokumentoimiseen. Markdown-tiedostot toimivat hyvin github:in kanssa, koska se osaa renderoidä .md-tiedostot suoraan HTML:ksi.

Tutustu markdown-syntaksiin:

1. [cheat-sheet](https://www.markdownguide.org/)
2. [markdown syntax](https://www.markdownguide.org/basic-syntax/)

### Dokumentointi

Dokumentoinnin tarkoitus on antaa nopeasti yleissilmäys ohjelmiston toteutuksesta, jotta joku muu pystyisi jatkamaan ohjelmiston kehittämistä hallitusti, eikä rikkoisi aikaisemmin tehtyjä raktaisuja.

Dokumentissa olisi hyvä kuvata:

- toteutetut user storyt (kuvia käyttöliittymästä)

- tietokannan rakenne (kuva, josta käy ilmi taulut ja niiden relaatiot)

- ohjelmiston arkkitehtuurista (kuva, josta käy ilmi koodimoduulit sekä niiden suhteet)

- moduulien toiminnallisuus sekä rajapinnat (sekvenssidiagrammi)

### Ohjelmistoarkkitehtuuri (SW Architecture)

Ohjelmiston arkkitehtuurin tarkoitus on kuvata miten koodi on jaettu moduuleihin. Esim. jos ohjelmisto on kehitetty MVC-mallin mukaisesti, jatkokehittämisen pitäisi toteuttaa samaa mallia.

Arkkitehtuuri kuvasta selviää ohjelmiston sisäinen rakenne ja riippuvuudet (*dependencies*) sekä ohjelmiston käyttämät ulkoiset palvelut (kuten tietokanta). Riippuvuudet esitetään yleensä nuolten avulla (e.g. moduuli vaatii toisen moduuliin toimiakseen oikein).

Tässä arkkitehtuuriesimerkki rekisteröitymiseen tarvittavista moduuleista:

![SW Architecture](./img/arkkitehtuuri.png)

### Sekvenssidiagrammi

Sekvenssidiagrammin avulla voidaan kuvata arkkitehtuurikuvassa kuvattujen moduulien yhteistoimintaa. Tässä oikealle kulkeva nuoli kuvaa viestiä (esim. HTTP GET), funktiokutsua (esim. postController()) tai muunlaista interaktiota moduulien välillä. Vasemmalle kulkevat viestit ovat paluuarvoja tai response-viestejä (200OK). Aika kulkee ylhäältä alas.

Tässä sekvenssidiagrammiesimerkki rekisteröitymisestä:

![sekvenssidiagrammi](./img/register_sekvenssi_mvc.PNG)