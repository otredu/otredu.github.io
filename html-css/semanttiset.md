## HTML - semanttiset elementit

Tähän asti, olemme asetelleet sivun elementtejä CSS:n avulla perustuen niiden *id*- tai *luokka*-attribuutteihin (id="header" tai class="navbar"). Toinen tapa on käyttää semanttisia elementtejä kertomaan sivun sisällön merkityksestä. Nämä tagit kertovat myös sivun sisällöstä paremmin hakukoneille sekä *screenreader*:eille.

Semanttiset elementit toimivat kuin *div*:it. Ne eivät vaikuta sivun ulkonäköön tai osien sijoitteluun sivulla. Eli, vaikka elementin nimi olisi *header*, se ei automaattisesti siirty sivun yläreunaan vaan joudut kirjoittamaan sivulle CSS-määrittelyt kuten tavallisten *div*:ien kanssa.

### Sivun semanttiset osat

Sivun sisältö sijoitetaan sen merkitystä kuvaavan tagin sisään. Sivun otsikkopalkki sijoitetaan \<header>:in sisään ja sivun alapalkki \<footer>:in sisään. 

Sivun sisältö voidaan jakaa osiin \<section>:in avulla. Sivun pääsisältö, joka olisi yksinkin merkityksellinen kokonaisuus sijoitetaan \<article>:in sisälle. Pääsisältöä voi merkitä myös \<main>-tagin avulla.

Jos sivulla on jotain lisätietoa, joka on irrallaan sivun rakenteesta se erotetaan \<aside>:in sisälle.

Navigointitoiminnot sijoitetaan \<nav>:in sisälle.

![Semanttiset elementit](./img/semantic.PNG)

Muita semanttisia elementtejä ovat: \<details>,
\<figcaption>, \<figure>,  \<mark>,\<summary> ja \<time>.

### Lue lisää

- [Free Code Camp](https://guide.freecodecamp.org/html/html5-semantic-elements/)