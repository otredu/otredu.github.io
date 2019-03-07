## JQuery

### Taustaa

jQuery-kirjaston avulla on hieman helpompaa käyttää DOM-rajapintaa. jQuery-kirjasto pitää ladata koodiin mukaan ennen sen käyttämistä. Voit ladata sen CDN:n kautta, lisää tää HTML-tiedostoon:

```js
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

jQuery-koodi on tavallista JavaScriptiä joten se kannattaa sijoittaa omaan *.js - tiedostoonsa.

### Syntaksi

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

### 