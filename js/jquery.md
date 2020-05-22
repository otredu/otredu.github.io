## JQuery

### Taustaa

jQuery-kirjaston avulla on hieman helpompaa käyttää DOM-rajapintaa. jQuery-kirjasto pitää ladata koodiin mukaan ennen sen käyttämistä. Voit ladata sen CDN:n kautta (Content Delivery Network), lisää tämä rivi HTML-tiedostoon:

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

jQuery-koodi on tavallista JavaScriptiä joten se kannattaa sijoittaa omaan *.js - tiedostoonsa.

Yleisesti jQuery:stä:

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/4a536875-e4c0-423f-b222-2ba2e45a4819?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

jQuery:n käyttö - demo:

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/18f7340d-6dff-4b8f-9b07-d48b64c2f4bd?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

### JQuery-syntaksi

jQuery-funktiolle annetaan parametrina CSS-selektori ("p", ".test" tai "#test") tai *this*, ja se palauttaa jQuery-olion, joka voi sisältää yhden tai useamman DOM-elementin (jQuery-olio on siis taulukkomainen). *this* viittaa siihen olioon, jota ollaan käsittelemässä.

jQuery-funktiota kutsutaan usein lyhyemmällä nimellä "$". $ on siis sama asia kuin jQuery-funktio.

```js
$(this).hide() // piilottaa käsiteltävän olion
$("p").hide()  // etsii kaikki p-elementit ja piilottaa ne
$(".test").hide() //etsii kaikki test-luokan elementit ja piilottaa ne
$("#test").hide() // etsii kaikki elementit, jonka id on test, ja piilottaa ne
```

jQuery-metodit voidaan ketjuttaa, koska jokainen niistä palauttaa uuden jQuery-olion. Tässä p1-elementti ensin muuttuu punaiseksi, sitten sen alareuna liukuu ylös ja takaisin alas.

```js
$("#p1").css("color", "red").slideUp(2000).slideDown(2000);
```

Jotta JavaScript-koodi ei yritä käyttää elementtejä, joita ei vielä löydy DOM:ista (= sivu ei ole vielä latautunut kokonaan), kaikki jQuery-koodi kannattaa kirjoittaa seuraavan funktion sisään (suoritetaan vasta HTML-dokumentin latauduttua):

```js
$(document).ready(function(){

  // jQuery koodi tulee tähän...

});
```

### append

JQuery-rajapinnan *append*-metodi toimii monenlaisella syötteellä. Se luo uuden automaattisesti tarvittavat *element*:it sekä *textNode*:t. *append*:lle voi antaa parametrina: merkkijonon, HTML-muotoisen merkkijonon, taulukon joka sisältää merkkijonoja tai taulukon joka sisältää HTML-muotoisia merkkijonoja. Sille voi antaa myös jQuery-olion sekä taulukon joka sisältää jQuery-olioita. Seuraavassa esimerkissä etsitään HTML-dokumentista "harj4"-luokan *div* ja lisätään siihen tekstiä eri tavoilla.

```js
$(".harj4").append("Helppoa kuin heinänteko");
$(".harj4").append("<h2> Yhden h2-otsikon lisääminen HTML-muodossa</h2>");

let tekstit = ["Otsikko 1", "Otsikko 2", "Otsikko 3", "Otsikko 4"];
$(".harj4").append(tekstit);  
```

#### map:in käyttö appendin kanssa

Edellisen esimerkin taulukon "tekstit"-sisältö tulee sivulle yhteen pötköön, joten siihen kannattaa lisätä hieman muotoiluja esim. *map*:in avulla. Listan alkoita muotoilevan funktion voi antaa erillisenä nimettynä funktiona tai nimettömänä nuolifunktiona/tavallisena funktiona (map ei liity sinäänsä jQueryyn, se on perus-JavaScript:iä).

Nimetön nuolifunktio *map*:lle:

```js
let headers = tekstit.map(text => "<h2>" + text + "</h2>");
$(".harj4").append(headers);  
```

Nimetön funktio *map*:lle:

```js
let headers = tekstit.map(function(){ return "<h2>" + text + "</h2>" });
$(".harj4").append(headers);  
```

Nimetty funktio *map*:lle:

```js
function makeHeader(text) {
  return "<h2>" + text + "</h2>";
}

let headers = tekstit.map(makeHeader);
$(".harj4").append(headers);  
```

### appendTo

Toinen tapa tehdä uusia elementtejä jQuery:n avulla on luoda uusi olio *jQuery*-metodin avulla (syötteenä HTML:ää) ja lisätä se sivulle lopuksi *appendTo*-metodin avulla:

```js
$("<div class='newDiv'></div>").appendTo(".harj4");
```

### css

Elementin tyyliin pääsee käsiksi jQuery-olion *css*-metodin kautta. Jos parametreja antaa vain yhden on kyseessä kysely, joka palauttaa kysytyn *CSS*-määrittelyn arvon, esim. värin saa selville näin:

```js
let color = $(this).css("color");
```

Jos samalle *css*-metodille annetaan kaksi parametria, se muuttaa ko. arvon annetuksi arvoksi, esim. värin vaihtaminen:

```js
$(this).css("color", "red");
```

### hide, show, remove

jQuery:n avulla voi muuttaa elementin/elementtien näkyvyyttä ja poistaa sen kokonaan:

```js
$(".harj4").hide();
$(".harj4").show();
$(".harj4").remove()
```

### val

*input*-elementtien *value*-kenttään pääsee käsiksi näin *val*-metodin kautta. Saman metodin avulla arvon voi myös asettaa:

```js
if($("input").val() === ""){
  $("input").val("uusi arvo");
}
```

### closest, next, parent

Usein on tarve löytää jonkun elementin lähellä oleva elementti. *closest* palauttaa lähimmän elementin, joka täsmää hakuehtoihin selattaessa puuta ylöspäin. *next* palauttaa ensimmäisen hakuehtoihin täsmäävän elementin selattaesa puuta eteenpäin (sama kuin seuraava *sibling*).*parent*:in avulla saadaa suoraan ko. elementin *parent*.

### addClass, removeClass

Näiden funktioiden avulla voidaan ohjata CSS-animaatioita päälle ja pois. Animaatio määritellään jollekin CSS-luokalle, joka käynnistetään JavaScript:in avulla lisäämällä ko. luokka elementille. Animaatio saadaan loppumaan poistamalla ko. luokka animaatiolta.

```css
.animate {
    position: absolute;
    animation-name: drive;
    animation-duration: 5s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
  }

@keyframes drive {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(1200px);
    }
  }
```

```js
$("img").hover(function(){ $(this).addClass("animate") });
```

### tapahtumakuuntelijat

jQuery:n avulla voi lisätä elementeille tapahtumakuuntelijoita, kuten suoraan DOM-rajapinnan kautta. Tarjolla on kaksi tapaa, *on*-metodi, jolle annetaan parametrina *event*:in nimi (esim. "click") tai metodi, joka viittaa suoraan tapahtumaan esim. *click*. Molemmille annetaan parametrina *callback*-funktio, jota kutsutaan eventin tapahtuessa:

```js
$("li").on("click", function(){ $(this).hide()})
$("li").click(function(){ $(this).hide()})
```

Tässä joitakin eventtejä: "click", "keypress", "submit", "load", "dblclick", "keydown", "change", "resize"
"mouseenter", "mouseleave", "keyup", "focus", "scroll",  "blur", "hover" ja "unload".

### Linkkejä:

- JQuery-api [api.jquery.com](https://api.jquery.com/jQuery/)