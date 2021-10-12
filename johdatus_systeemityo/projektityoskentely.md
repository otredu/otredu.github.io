## Projektityöskentely

### Projektirepo

Kaikki projektin koodi, projektin seuranta sekä siihen liittyvät dokumentit tallennetaan projektin repo:on (projektiryhmän ja projektirepon kutsulinkin saat opettajalta).

Koodin main/master - haara suojataan niin, että siihen ei voi push:ata ilman, että joku toinen ryhmästä katselmoin koodin ensin. Jokainen työskentelee siis omassa haarassaan (branch) ja tuo koodia päähaaraan Pull Requestin (PR) avulla.

[Lukekaa ohjeet projektirepon käyttöön](https://otredu.github.io/github/projektityo.html) ja harjoittelkaa PR:ien ja merge conflictien tekemistä readme.md - tiedoston avulla.

### Esitutkimusten katselmointi ja toteutettavan suunnitelman valinta

Ladatkaa aikaisemmin tekemänne esitutkimukset projektirepoon, katselmoikaa ne ja valitkaa toteutettava versio. Valitkaa myös tietokantasuunnitelma, jota lähdette toteuttamaan.

### Projektin backlog

Ketterässä ohjelmistokehityksessä vaatimukset kirjoitetaan user storyjen muotoon. Siinä kerrotaan tiivistetysti mitä hyötyä ohjelman toiminnosta on loppukäyttäjälle (yritykselle).

    * As <ROLE> I want <ACTION> so that <BUSINESS VALUE> *
    * As A STUDENT I want to SEARCH FOR APARTMENT so that I CAN RENT AN APARTMENT * 

Projektiryhmä voi päättää kirjoitatteko user story:t suomeksi vai englanniksi. Projektin *backlog*:iin kirjoitetaan kuitenkin projektin alussa KAIKKI mahdolliset user story:t jotka alustavien vaatimusten pohjalta on identifioitu. User storyt kirjoitetaan projektiseinälle github:iin.

![projektiseinä](./img/projektiseina.PNG)

### Sprintin backlog

Ensimmäisen sprintin backlog:iin valitaan sellaiset user story:t, joiden toteuttaminen on tärkeintä. Tässä vaiheessa siis priorisoidaan user storyjä. Niitä pitäisi valita sopiva määrä, että kaikilla projektitiimissä olisi riittävästi tekemistä. User storyt muutetaan *issue*:ksi, jolloin sille voi valita toteuttajan (*assign*). Kun sprintin sisältö on valittu, siitä ei poisteta mitään, eikä siihen lisätä mitään. Jos joku saa omat hommansa valmiiksi ennen muita, hän auttaa muita kunnes koko sprintin sisältö on valmiina ja testattuna.

### Systeemitestaus

Sprintin toiminallisuus testataan jokaisen sprintin lopussa. Jokainen kirjoittaa testitapaukset omalle/omille user storylleen yhteiseen testipohjaan.

[Ohjeet](../docs/testitapaukset_ohje.pdf) testitapausten ja testausraportin laatimiseen Exceliin.

Voitte käyttää tätä [pohjaa](../docs/esim_testitapaukset.pdf) mallina.

HUOM! jos useampi ihminen tekee samaan tiedostoon testitapauksia ja suorittaa testausta, lisätkäa pohjaan sarakkeet *testaaja* ja *testaus pvm*!

### Tuntiseuranta

Projektitunnit kirjataan projektin tuntiseurantalistaan joka päivä.

Voit käyttää tätä [pohjaa](../docs/tyoajanseuranta.xlsx) tuntien seurantaan. Jokaiselle projektitiimin jäsenelle oma tiedosto tai yhteisessä Excelissä oma välilehti.

### Sprintin lopuksi

Sprintin lopuksi jokaisen toteuttama koodi integroidaan (PR:t ja merge) main/master-haaraan ja testataan (ks. yllä). Ennen testausta muita tehdä pull, että koneellasi on koneellesi uusin versio koodista.

Sprintin jälkeen pidetään sprintin loppupalaveri ja käydä läpi se miten tiimi selviytyi tehtävistä ja syntyikö laadukasta koodia.

Loppupalaverin muistiossa (Word) pitäisi olla vähintään:

- milloin sprint alkoi, milloin loppui
- mitkä user storyt saatiin valmiiksi
- mikä onnistui, mikä ei onnistunut
- oliko työnjako toimiva, oliko liikaa tai liian vähän tekemistä
- onko syntynyt koodi laadukasta (ei bugeja, selkeä rakenne että siitä on hyvä jatkaa)
- mitä teette paremmin seuraavalla kerralla

Loppupalaverimuistio ja testitapaukset on hyvä tallentaa repon dokumenttikansioon.

Sitten valitsette seuraavan sprintin user story:t, jaatte työt jne...