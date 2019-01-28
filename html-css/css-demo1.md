## CSS-demo 1

CSS-määrittelyt tehdään yleensä omaan tiedostoonsa. Tässä harjoituksessa emme muokkaa HTML:ää ollenkaan vaan muotoilemma valmista HTML-dokumenttipohjaa CSS:n avulla.

Kopioi oheinen HTML-dokumentti ja tallenna se omaan kansioonsa *demo1*. Anna sille nimeksi esim. css_demo.html. Tee myös uusi CSS-tiedosto, anna sille nimeksi css_demo.css. Dokumentille on luotu korkeantason rakenne käyttämällä HTML:in *div* tagejä. Jotta niihin on helpompi viitata CSS-määrittelyissä niille on annettu *id* ja *class* attribuutteja. Dokumentti koostuu kahdesta pääosiosta (*div*:stä), joille on annettu id:t *header* ja *main*. *main*:in sisällä on kolme *div*:iä joille on myös annettu *id*:t. *main* toimii tässä ns. *flexbox container*:ina ja sen sisällä olevat *div*:t ovat *flex item*:eja ([lue lisää flex-box:ista](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)). Flex-boxin avulla saamme aseteltua sisältöä sivulle vierekkäin, allekkain jne. *header*:in sisällä on toinen *flexbox container*: *navbar*. Sen sisällä on *navbutton*:eja. Nämä on määritelty *id*:n sijaan *class*:in avulla, eivätkä ne ole *div*:ejä vaan *ul*- ja *li*-tagejä. *flexbox container*:in tai *flex item*:in ei siis tarvitse aina olla *div* (kuvassa siniset elementit ovat *div*:ejä, vrt. kuvaa alla olevaan koodiin).

![sivuston rakenne](./img/demo1_rakenne_nuolet.PNG)

```html
<!DOCTYPE html>
<html lang="fi">
    <head>
        <meta charset="UTF-8">
        <title>CSS demo</title>
        <link rel="stylesheet" href="css_demo.css">
    </head>
    <body>
        <div id="header">
        <h1 class="header">Tervetuloa näille sivuille!</h1>
            <ul class="navbar">
                <li ><a class="navbutton" href="etusivu.html">Etusivu</a></li>
                <li ><a class="navbutton" href="toinensivu.html">Toinen sivu</a></li>
                <li ><a class="navbutton" href="kolmassivu.html">Kolmas sivu</a></li>
            </ul>
        </div>
        <div id="main">
        <div id="basicinfo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Open_Content_A_Practical_Guide_to_Using_Creative_Commons_Licences_web-29.png" alt="cc-lisenssit">
            <ul>
                <li><a href="https://courses.p2pu.org/en/courses/2486/content/5078/">Lue lisää CC-lisenssoinnista</a></li>
                <li><a href="https://wiki.uef.fi/pages/viewpage.action?pageId=15008150">Lisää tietoa tekijänoikeuksista</a></li>
            </ul>
        </div>
        <div id="topten">
        <h1>Numeroitu lista</h1>
        <ol>
            <li>eka</li>
            <li>toka</li>
            <li>kolmas</li>
        </ol>
        </div>
        <div id="data">
        <h1>Tietoa</h1>
        <table>
            <tr>
                <td>Tieto 1</td>
                <td>*******</td>
            </tr>
            <tr>
                <td>Tieto 2</td>
                <td>*******</td>
            </tr>
            <tr>
                <td>Tieto 3</td>
                <td>*******</td>
                </tr>
            <tr>
                <td>Tieto 4</td>
                <td>*******</td>
            </tr>
        </table>
        </div>
        </div>
    </body>
</html>
```

### Tekstien muotoilu

Annetaan h1-tason otsikolle väri ja fonttityyppi. Jos h1-tason otsikko kuuluu lisäksi luokkaan *.header*, sille annetaan oma tyylimäärittelynsä (h1.header).
Jos samat määrittelyt toimivat useammalle tagille (td, th, p) ne voidaan antaa samalla kertaa (erotellaan pilkuilla):

```css
h1 {
    color: red;
    font-family: 'Times New Roman', Times, serif;
}
h1.header {
    color: blueviolet;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}
td, th, p {
    color: aqua;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
}
```

### Taulukon muotoilu

Lisätään taulukolle taustaväri sekä reunaviivat, *collapse* liittää erilliset "laatikot" yhteen.

```js
table, td, th {
    border: 1px solid black;
    border-collapse: collapse;
    background: purple;
}
```

### Flexbox:in avulla sivulle asettelu

Flexbox-asettelu otetaan käytöön määrittelemällä *container*:ille:

```js
#main {
    display: flex;
}
```

Nyt *container*:in sisällä olevat osiot siirtyvät vierekkäin (oletusasetus).

### div:ien muotoilu

Asetellaan *flex item*:it vierekkäin 1/3 leveydelle kukin, lisätään taustaväri, reunaviiva, ja reunan pyöristys sekä padding (ettei teksti ole reunassa kiinni). Tehdään vastaavia muokkauksia *#header div*:ille:

```js
#basicinfo, #topten, #data {
    width: 33%;
    height: auto;
    background-color: aquamarine;
    border-width: 1px;
    border-style: solid;
    border-radius: 25px;
    padding: 15px;
}

#header {
    background-color: paleturquoise;
    border-style: solid;
    border-radius: 25px;
    padding: 5px 15px;
}

```

### Dynaaminen kuvan leveys

Jotta kuva seuraa *div*:iä, jonka sisällä se on lisätään:

```js
img {

    max-width: 100%;
    ma
    x-height: 100%;
}
```

### Navbar:in muotoilu

Lopuksi muotoillaan tavallisesta *ul*-listasta navigointinappeja. Otetaan käytöön *flexbox*, nyt *navbar*-luokka on *flexbox-container*. Lisätään listan alkioille padding:iä, taustaväri, reunaviiva sekä poistetaan listamerkit (*list-style-type: none*) sekä linkin alleviivaus (*text-decoration: none*):

```js
.navbar {
    display: flex;
    list-style-type: none;

}

.navbutton {
    display:inline-block;
    padding: 10px;
    background-color: pink;
    border-width: 1px;
    border-style: solid;
    border-radius: 25px;
    text-decoration: none;
}
```