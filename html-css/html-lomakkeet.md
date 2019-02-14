## HTML-lomakkeet

*HTML*-lomakkeiden avulla käyttäjä voi syöttää tietoa käsiteltäväksi. Syötetty tieto käsitellään lähetetään käsiteltäväksi webbipalvelimelle ellei oletustoiminnallisuutta ohiteta ja tietoa käsitellä JavaScript-koodilla suoraan selaimessa.

Lomakkeen sisältämät syötekentät sijoitetaan \<form>-tagin sisälle. Jos lomake käsitellään php:n avulla webbipalvelimella, *form*-tagin *action*-attribuutiksi laitetaan tietoa käsittelevän *php*-tiedoston nimi. Oletuksena käytetään *get*-metodia, jossa syötetyt tiedot näkyvät osoitekentässä (jonka pituus on rajallinen). Jos tietoa lähetetään paljon tai jos se pitää pitää piilossa, täytyy *method*-attribuutiksi asettaa *post*.

```html
<form action="somePHPpage.php" method="post">
    ...
</form>
```

Jos lomakkeen tiedot käsitellään JavaScript:in avulla, voidaan sen onSubmit-attribuuttiin lisätä tiedon kästittelevän JS funtion nimi (tämä voidaan tehdä myös JS-koodin avulla).

```html
<form onSubmit="someJSfunc()">
    ...
</form>
```

Lomakkeen voi lähettää painamalla *enter*:iä, mutta usein sivulla on myös *submit*-tyyppinen nappi tai *input*-kenttä.

### input - kentät

Tietoa voi kirjoittaa \<input>-kenttään. Kentän toimintaa voi säätää määrittämällä sille *type*-attribuutti (text/number/radio/checkbox/submit/...). Jos kenttä on pakollinen sille voi antaa attribuutin *required*.  

*input*-kentällä on aina oltava *name*-attribuutti, jos sen sisältämät tiedot halutaan lähettää palvelimelle. Kenttään voi myös lisäksi esitäyttää arvon *value*-attribuutin avulla tai antaa maksimipituuden (*maxlength*).

Lähetysnapin saa tehtyä kun *type*-attribuutin asettaa arvoon "submit".

#### text-input

Tavallisen tekstikentän saa, kun *type*-attribuutiksi asettaa "text":

```html
Etunimi: <input type="text" name="firstname" value="John" maxlength=30>
Ikä: <input type="number" name="age">
<input type="submit" value="Lähetä">
```

#### radio-input

Radionappi-tyyppisen valinnan saa aikaan asettamalla *type*:ksi "radio". Eri valinnat ryhmittyvät yhteen, kun niille antaa saman nimen, yhden kentän voi lisäksi määritellä valmiiksi valituksi (*checked*).

```html
  <input type="radio" name="gender" value="man">Mies<br>
  <input type="radio" name="gender" value="female">Nainen<br>
  <input type="radio" name="gender" value="other" checked>Muu<br>
```

#### checkbox-input

Valintaruutu-tyyppisen valinnan saa aikaan asettamalla *type*:ksi "checkbox". *checkbox*-tyyppiset *input*-kentät ryhmitellään myös *name*-attribuutin avulla. Myös tässä valittu arvo on "checked":

```html
<input type="checkbox" name="transport1" value="bike"> Tulen kouluun pyörällä<br>
<input type="checkbox" name="transport2" value="car"> Tulen kouluun autolla<br>
<input type="checkbox" name="transport3" value="buss"> Tulen kouluun bussilla<br>
<input type="checkbox" name="transport4" value="onfoot" checked> Tulen kouluun kävellen<br>
```

#### Muut input-tyypit

*input*-tyyppejä on muitakin. kokeile näitä:

- color
- date
- datetime-local
- email
- month
- range
- search
- tel
- time
- url
- week

### button

Napin voi tehdä *button*-elementin avulla. Siihen voi liittää JavaScript-funktiokutsun *onClick*-attribuuttiin:

```html
<button type="button" onClick="someJSFunc()">Paina tästä</button>
```

### textarea

Suurempi tekstialue määritellään *textarea*:n avulla.

```html
<textarea name="message" rows="5" cols="30">
Tähän voi kirjoittaa paljon tekstiä...
</textarea>
```

### select ja datalist

Pudotusvalikon voi tehdä *select*-elementin ja *option*-tagien avulla:

```html
<select name="mobile">
    <option value="android">Android</option>
    <option value="iphone">iPhone</option>
    <option value="ipad">iPad</option>
    <option value="other">Muu</option>
</select>
```

Toinen tapa on tehdä se *datalist*:in avulla. Ensin määritellään *input*-elementti, jonka tyyppi on "list". Sille määritellään vaihtoehdot *datalist*:in avulla.

```html
<input list="mobiledevices">
<datalist id="mobiledevices">
<option value="Android">
<option value="iPhone">
<option value="iPad">
<option value="Other">
```

### fieldset ja legend

Taulukon elementit voidaan ryhmitellä *fieldset*:in avulla ja niille voidaan antaa myös otsikko *legend*:

```html
  <fieldset>
    <legend>Henkilötiedot</legend>
    Nimi: <input type="text"><br>
    Puhelinnumero: <input type="text"><br>
  </fieldset>
```