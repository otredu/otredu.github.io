## Harjoituksia 4

Tee seuraavat harjoitukset käyttäen jQuery-kirjastoa. Tee vain pyydetyt osiot HTML:llä ja loput pelkällä JavaScriptillä, pidä HTML ja JavaScript omissa tiedostoissaan.

### Tehtävä 1

Tee sivulle JavaScriptin avulla viisi H1-tyylin otsikkoa, joissa lukee jotakin. Liitä niihin jQueryn avulla tapahtumakuuntelija, joka muuttaa otsikon väriä kun otsikko klikkaa. Muuta callback-funktiota niin, että toisella kerralla klikattaessa teksti katoaa kokonaan.

Lisää nappi joka palauttaa alkutilanteen (.show()), lisää siis sillekin tapahtumakuuntelija.

Vinkki1: tee *callback*-funktioon ehtolause, joka tutkii tekstin väriä: jos se on musta, muutetaan väriä, muuten piilotetaan teksti

Vinkki 2: jquery palauttaa värit rgb-muodossa eli musta on "rgb(0, 0, 0)" jne

### Tehtävä 2

Tee JavaScriptin avulla sivu, jolla on kolme div:iä, joissa kussakin on teksti ja siihen liityvä kuva. Tee jQueryn avulla ohjelma, joka piilottaa sivulla näkyvät kuvat, ja näyttää ne vasta kun käyttäjä vie hiiren kuvaan liittyvän tekstin päälle.

### Tehtävä 3

Tee JavaScriptin avulla input-tekstikenttä sekä nappi. Nappia painettaessa luodaan napin alapuolelle uusi tekstikappale (p), johon sijoitetaan tekstikentässä ollut teksti (esim. yksinkertainen muistilista).

### Tehtävä 4

Tee JavaScriptin avulla lomake, jossa kysytään: nimi, sähköpostiosoite ja puhelin. Lisää siihen myös lähetä-nappi. Kun nappia painetaan tarkista, että kaikissa kentissä on tekstiä, jos ei ole ilmoita siitä käyttäjälle (esim. alertin avulla), jos kaikki on kunnossa piilota lomake, ja kiitä käyttäjää.