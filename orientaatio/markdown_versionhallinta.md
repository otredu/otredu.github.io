## Versionhallinta

Koodi on vain bittejä ohjelman muistissa tai tiedostoina kovalevyllä. Ne katoavat ns. *bittiavaruuteen* erittäin helposti ellei niistä oteta varmuuskopiota. Jotta koodari voi rauhassa nukkua yönsä, koodia tallennetaan versionhallintajärjestelmään, joka pitää huolta varmuuskopioinnista, vanhojen versioiden palauttamisesta, useamman koodarin yhteiden koodin yhdistämisestä jne. 

Jotta versionhallinta tulee tutuksi, käytämme lähes kaikkien harjoitusten palauttamiseen (koodin lisäksi sen avulla voi palauttaa muitakin tiedostoja.)

Käytämme versionhallinnassa github:ia. Sen käyttämiseen tarvitset [Git for Windows](https://gitforwindows.org/) - ohjelman, sekä käyttäjätilin.

1. Tee käyttäjätili osoitteessa: [https://github.com/](https://github.com/)

2. Luo itsellesi uusi *privaatti* repo nimeltä *orientaatio*.

3. Kutsu opettaja repoon *settings->manage access->invite teams or people*.

4. Tee itsellesi kansio K:/orientaatio ja avaa siihen *git bash* - komentoriviohjelma (saat sen auki hiiren oikealla näppäimellä valitsemalla *Git bash here*)

5. Tee orientaatio-kansion sisään uusi kansio nimeltä *markdown* kirjoittamalla `mkdir markdown`. Siirry kansion sisään `cd markdown`.

6. Tee kansion sisään tiedosto nimeltä index.md jossa lukee "esittely" `echo "# esittely" >> index.md`.

7. Palaa takaisin kansioon *orientaatio* `cd ..`.

8. Seuraavat ohjeet alustavat lokaalin repon ja liittävät sen remote repoon:

```cmd
git init
git add *
git commit -m "start"
git remote add origin <liitä tähän kopioimasi github-repon osoite>
git push -u origin master
 ```

9. Tarkista saitko tiedoston siirtymään remote repoon (katso remote repoa github:in websivulla).

10. Jatka esittelyn kirjoittamista. Kerro itsestäsi, lisää profiilikuva, käytä markdown:ia. 

## Markdown ohjeita:

1. [cheat-sheet](https://www.markdownguide.org/)
2. [markdown syntax](https://www.markdownguide.org/basic-syntax/)

## Github-ohjeita

- [otredun github-ohjeet](https://otredu.github.io/github/)