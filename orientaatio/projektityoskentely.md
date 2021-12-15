## Projektityöskentely

Ohjelmistokehitys on lähes aina ryhmätyötä, jota tehdään projekteissa. Projekteilla on asiakas, jonka kanssa sovitaan siitä miltä toteutettava järjestelmä näyttää, miten se toimii ja mitä toimintoja sen avulla voi suorittaa.

IT-projektissa on erilaisia rooleja:

- UI/UX suunnittelija, joka suunnittelee käyttöliittymän ulkoasun (_User Interface_) ja sen miten se toimii (_User Experience_)

- Koodari/developer/devaaja, joka toteuttaa suunnitellut toiminnot (*frontend developer*, toteuttaa käyttöliittymän, *backend developer* toteuttaa tietokantatoimintoja)

- Testaaja/SW tester, määrittelee testitapauksia ja testaa järjestelmän toimintoja

- Projektipäällikkö/scrum master, joka huolehtii siitä, että kaikki tietävät mitä pitää tehdä, valmistaa että vaatimukset on saatu asiakkaalta ja että tiimi on ymmärtänyt ne oikein, varmistuu siitä että työ etenee oikeaan suuntaan riittävällä ripeydellä, hoitaa asiakkaan kanssa kommunikoinnin

- Arkkitehti/lead developer, valitsee käytettävät työkalut, kirjastot tai frameworkit, varmistaa sen että toiminnallisuus on jaettu järkevästi moduuleihin ja että ne on ja koodattu ja dokumentoitu yhdenmukaisesti

- Järjestelmäadministraattori/devops, asentaa järjestelmän käyttökuntoon palvelimelle, valvoo että se toimii luotettavasti, hoitaa päivitykset, jakaa käyttäjille käyttöoikeuksia/tunnuksia

- IT-tuki/helpdesk, neuvoo ohjelmiston käyttöönotossa ja käytössä, auttaa ongelmatilanteissa, raportoi bugeja devaajille

jne.

### Tehtävä: Drupal-sivustoprojekti

Tässä harjoituksessa opetellaan projektissa työskentelyä asentamalla Drupal sisällönhallintajärjestelmä ja toteuttamalla sen avulla nettisivut, joilla ryhmä esittelee IT-alan työtehtäviä, tekstin, kuvien, videoiden ja linkkien avulla.

Tehkää ryhmälle github:iin projektiseinä, jossa on taulut: *toDo*, *inProgress*, *done* sekä *meetingMinutes*. Luokaa *toDo* seinälle tehtävät eli *task*:it mitä projekstissa pitää tehdä. 

Mahdollisia tehtäviä olisi:

- Roolien jakaminen (projektipäällikkö, UI-designer, drupal-admin)
- Drupal:in asennus samariumille
- Drupal-tunnusten jakaminen tiimin jäsenille (kaikille admin tunnukset)
- Sivuston visuaalisen ilmeen suunnittelu, koordinointi ja toteutus (värit, logot, asettelut, valmiin templaten valinta jne.) 
- Sivun toiminnallisuuden suunnittelu ja toteutus (esim. palautelomake, kalenteri tms, laajennusosien etsintä, asennus ja testaus)

Esimerkkiseinä:

![projektiseinä](img/drupal_projektiseina.png)

Kun tehtävä otetaan työnalle, se siirretään *inProgress*-taululle ja sen vaihdetaan *issue*:ksi. Tehtävälle valitaan tekijä (valitse sininen linkki ja *assign*). Kun tehtävä on valmis, se merkitään *done*-tilaan ja siirretään *done*-taululle. 

Jokaisen projektitunnin alussa, pidetään *daily meeting*, josta kirjataan muistiinpanot *meetingMinutes*-taululle. Päiväpalaverissa käydään läpi projektin tehtävien tilanne, päivitetään projektiseinää, tarkistetaan onko kaikilla tehtää, ratkaistaan mahdolliset ongelmat jne. 

### Drupal - sivuston asennus

- [Ohjeet](drupal_asennus.html) Drupal-sivuston asentamiseen samariumille
