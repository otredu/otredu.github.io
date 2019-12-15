## SQL-harjoituksia (news)

### Alkutoimet

Käynnistä MySQL ja PHPMyAdmin Dockerin avulla [ohje](../docker/index.html).

Luo tietokanta *newsdb*.

### CREATE

Luo taulu *news*, jossa ovat kentät *title*, *content*, *date*, *expirydate*, *writer*.

Muista laittaa kaikille tauluille avainkentät, muuten kyselyitä ei pysty tekemään.

Viisasta on myös määritellä merkistö (UTF-8, esim. swedish).

### INSERT INTO

Lisää uutisiin tietoja: neljä vanhaa (*expirydate* on mennyt jo), kolme uutta (ajankohtaista) uutista, laita kaksi eri kirjoittajaa.

### SELECT FROM

- Hae kaikki uutiset
- Hae uutisista kaikki vanhat uutiset.
- Hae uutisista toisen kirjoittajan kaikki ajankohtaiset uutiset
- Hae kaikki uutiset kirjoitusjärjestyksessä
- Hae kaikki uutiset kirjoittajan ja poistamispäivän mukaan järjestettynä

### DELETE

Poista toisen kirjoittajan vanhat uutiset

### UPDATE

Muuta jäljelläolevat vanhat uutiset vanhenemaan vasta helmikuun vaihteessa

### Palautus

Vie kaikki tiedot SQL-muodossa Github:iin

---

## Lisätehtävä

Voit tehdä saman harjoituksen myös PostgresSQL:n ja PHPPGAdmin:in avulla [katso käynnistysohje](../docker/index.html).