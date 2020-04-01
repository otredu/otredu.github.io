### Github-palautusrepon alustaminen

Kun olet saanut opettajalta kutsulinkin Github-classroomin palautusrepoon seuraa näitä ohjeita:

<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/30512e6a-29b0-48c0-81f4-af466c202513?autoplay=false&amp;showinfo=true" allowfullscreen style="border:none;"></iframe>

Tarvitset:

- Git For Windows ohjelman [asenna tästä](https://gitforwindows.org/).

- VSCode [asenna tästä](https://code.visualstudio.com/)

### Muutosten päivittäminen VSCodesta Github:iin

Githubiin voi päivittää muutokset suoraan VSCodesta. Git:iin tallentamattomat muutokset näkyvät sinisenä numerona. Lisäksi tiedoston vieressä lukee muutoksen tyyppi:
    - M (muutettu, modified)
    - U (uusi tiedosto, untracked) - D (poistettu, deleted)

1. Valitse vasemmalta versionhallinta (git-logo)

![muutosten päivitys](./img/vscode_muutokset1.PNG)

2. Tallentamattomat muutokset näkyvät kohdan "changes" alla.

![muutosten päivitys](./img/vscode_muutokset2b.PNG)

3. Kirjoita *commit*-viesti (kuvassa Harjoitukset 2 valmis) ja valitse commit (v-merkki):

![muutosten päivitys](./img/vscode_muutokset3.PNG)

HUOM! Joskus VSCode "autostageing" ei toimi ja joudut lisäämään ne mukaan *commit*:iin (paina + merkkiä).

![muutosten päivitys](./img/vscode_muutokset6.PNG)

4. Tiedostot eivät vielä siirtyneet remote-palvelimelle, avaa valikko ... merkin alta ja valitse *push*:

![muutosten päivitys](./img/vscode_muutokset4.PNG)

![muutosten päivitys](./img/vscode_muutokset5.PNG)

HUOM! Jos teet tätä ensimmäisen kerran uudella koneella, saatat saada virheen, jossa sanotaan että "username" puuttuu.

Aja sen jälkeen gitbash:issä seuraavat komennot:

```cmd
git config --global user.name "oma nimi"
git config --global user.email "oma.nimi@jokuposti.fi"
```