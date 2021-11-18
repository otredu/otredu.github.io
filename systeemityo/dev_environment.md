## Lokaalin ohjelmistoympäristön asentaminen

Jos koneessasi ei ole oikeaa versiota php:sta, php on mutta se ei käynnity tai composer puuttuu voit asentaa/konffata ne itse:

### PHP:in asentaminen polkuun

Avaa Windows:in käynnistysvalikosta *ympäristömuuttujat* (kirjoita hakukentään "ymp"), valitse *tilin ympäristömuuttujat*:

![ympäristömuuttujat](./img/environment.png)

Valitse *path*, ja *muokkaa*. 

![ympäristömuuttujat](./img/environment1.png)

Valitse *uusi* ja kirjoita siihen puuttuvat polku:

```cmd
c:\xampp\php
```

### Composer:in asentaminen

1. 
Asenna uusin [uusin Composer](https://getcomposer.org/download/). Valitse "asenna vain minulle".

TAI

Aja terminaalissa seuraavat komennot (ks. [uusin Composer](https://getcomposer.org/download/)):

```cmd
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

Tämä lataa tiedoston composer.phar. Voit uudelleen nimetä sen *composer.phar -> composer*

### PHP 8:n asentaminen lokaalisti

1. Lataa [php.zip](https://windows.php.net/download/) ja pura se projektikansioosi kansioon *php8*
2. Uudelleen nimeä tiedosto *php.ini-development -> php.ini*
3. Aktivoi seuraava rivi (poista ;)

    ;extension_dir = "ext"

4. Aktivoi lisäksi seuraavat extensiot php.ini-tiedostossa:

![php8 ext](./img/php8.png)

### .env

Tarkista että sinulla on *.env* olemassa. Tässä CI-versio.

[.env](env.text)

### Ajele menemään

> php8/php composer install
