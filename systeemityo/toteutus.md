## Projektityöskentely 

### Demot
- tietokannan luominen vaihe vaiheelta:
 [migrations & seeds](../tietokannat/migrations_php.html)
- versionhallinta [github](../github/projektityo.html)
- Codeigniter PHP-frameworkin käyttäminen[News - demo](../frameworks/code_igniter/index.html)

### Projektityöharjoitus

Tarkoituksena on harjoitella ketterää ohjelmistokehitystä 1-2 sprintin avulla. Tässä työvaiheet:

1. Kirjoitetaan projektin backlog (kaikki user storyt) projektiseinälle

2. Valitaan ensimmäisen sprintin user storyt 3-4 kpl

3. Yksi ryhmästä tekee CI-projektille pohjan:
    - Kloonaa itsellesi vuokraus-koodi - repo
    - Tee uusi branch
    > git checkout –b tiina/ci
    - Luo appstarterilla CI - pohja:
    > composer create-project codeigniter4/appstarter vuokraus --no-dev
    - konffaa .gitignore ja .env
    - Tee push (muista up-stream) ja PR
    - Joku ryhmästä tekee mergen websivulla

4. Nyt tietokantavastaava kloonaa vuoraus-koodi-repon
    - jos on jo kloonannut, riittää mennä master - haaraan ja tehdä siinä pull
    > git checkout master
    > git pull
    - tee oma branch
    > git checkout –b tiina/db
    - kopioi vuokrausdb-tiedostot (migrations ja seeds db-kansioon), tee push ja PR. Joku muu ryhmästä tekee mergen

5. Nyt loput ryhmästä kloonaavat repon tai tekevät pull:in master - haarassa, tekevät oman branching ja aloittavat koodaamisen.

HUOM! Tallentakaa .env ja phinx.php projektiryhmän repoon, koska nämä puuttuvat github:ista.