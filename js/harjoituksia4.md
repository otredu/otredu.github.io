## Harjoituksia 4

Tee seuraavat harjoitukset käyttäen jQuery-kirjastoa. Yritä tehdä harjoitukset pelkällä JavaScriptillä, pidä HTML ja JavaScript omissa tiedostoissaan.

### Tehtävä 1

Tee sivulle JavaScriptin avulla viisi H1-tyylin otsikkoa, joissa lukee jotakin. Liitä niihin jQueryn avulla tapahtumakuuntelija, joka muuttaa otsikon väriä kun otsikko klikkaa. Muuta callback-funktiota niin, että toisella kerralla klikattaessa teksti katoaa kokonaan.

Lisää nappi joka palauttaa alkutilanteen (.show()), lisää siis sillekin tapahtumakuuntelija.

### Tehtävä 2

Tee HTML:n avulla sivu, jolla on kolme div:iä, joissa kussakin on teksti ja siihen liityvä kuva. Tee jQueryn avulla ohjelma, joka piilottaa sivulla näkyvät kuvat, ja näyttää ne vasta kun käyttäjä vie hiiren kuvaan liittyvän tekstin päälle.

### Tehtävä 3

Tee html-sivu, jossa on input-tekstikenttä sekä nappi. Nappia painettaessa luodaan uusi tekstikappale (p) johon sijoitetaan tekstikentässä ollut teksti.

- Luo uusi p-elementti
- Lisää tekstiä elementille
- Lisää uusi elementti painikkeen jälkeen ($(this).after(uusi))

Katso mallia [täältä](http://www.w3schools.com/jquery/jquery_dom_add.asp).

### Tehtävä 4

Tee HTML-sivu, jolla on lomake, jossa kysytään: nimi, sähköpostiosoite ja puhelin. Lisää siihen myös lähetä-nappi. Kun nappia painetaan tarkista, että kaikissa kentissä on tekstiä, jos ei ole ilmoita siitä käyttäjälle, jos kaikki on kunnossa piilota lomake, ja kiitä käyttäjää.