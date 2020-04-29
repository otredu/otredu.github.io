## Web-hotellin käyttäminen (cpanel)

### MySQL

Tee itsellesi uusi MySQL-tietokanta (MySQL Database Wizard). Luo kaksi käyttäjää: user (lukuoikeudet) ja admin (kaikki oikeudet).

Valitse juuri tekemäsi tietokanta ja tuo tiedot lokaalista PHPMyAdmin:ista SQL-tiedostona (*vienti -> tuonti*).

### Domain:in luominen

Tee itsellesi uusi sub-domain cpanel:issa. Tämä luo uuden kansion palvelimelle (public_html:n sisälle). Valitse sub-domainille PHP-versioksi PHP 7.2 (MultiPHP Manager).

### Tiedostojen siirtäminen palvelimelle (FTP)

Lataa koneellsesi portable versio FTP-ohjelmasta kuten [WinSCP](https://winscp.net/eng/downloads.php) tai [FileZilla](https://filezilla-project.org/download.php?show_all=1).

Saat FTP-yhteyden kirjautusmistiedot CPANEL:ista kohdasta *FTP-accounts* (FileZillalle voi ladata asetukset .xml-tiedostona).

Ota yhteys palvelimeen ja siirrä kaikki PHP-tiedostot sub-domain-kansioosi.

### Document root:in muuttaminen

Muuta domain:isi *document root* vastaamaan sitä kansiota, jossa *index.php* on (esim. my_domain/public). Tämä tehdään *Domain*-kohdassa.

### .htaccess

Jotta kaikki HTTP-pyynnöt ohjautuisivat reitittimellemme eli ohjelmamme *index.php*-tiedostolle, lisäämme *public*-kansioon vielä *.htaccess*-tiedoston, joka konffaa Apache-palvelimen toiminnan halutuksi.  

```cmd
# This file configures the Apache web server such that:
#  - index.php is served
#  - any other request is rerouted to index.php.

RewriteEngine On
RewriteRule ^/index\.php$ - [L,NC]

RewriteRule . index.php [L]
```

HUOM! Jos käytät XAMPP:ia, pitää htaccess-aktivoida. Avaa *http.conf*-tiedosto ja poista # merkki tämän rivin edestä, tallenna ja käynnistä Apache uudelleen:

```cmd
#LoadModule rewrite_module modules/mod_rewrite.so
```
