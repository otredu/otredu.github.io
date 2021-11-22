## Lokaalin ohjelmistoympäristön asentaminen

Jos koneessasi ei ole oikeaa versiota php:sta, tai composerista voit asentaa ne itse:

### Composer:in asentaminen

- Voit asentaa omaan profiiliisi [uusimman Composerin](https://getcomposer.org/download/)), tämä ei vaadi asennusoikeuksia.

### PHP 8:n asentaminen

1. Lataa php.zip ja pura se projektikansioosi (kansioon php8)
2. Uudelleen nimeä tiedosto *php.ini-development -> php.ini*
3. Aktivoi seuraava rivi (poista ;)

    ;extension_dir = "ext"

4. Aktivoi lisäksi seuraavat extensiot php.ini-tiedostossa:

![php8 ext](./img/php8.png)

### .env

Tarkista että sinulla on *.env* olemassa. Tässä CodeIgniter 4:n .env:

[.env](env.text)

### Ajele menemään

> php8/php composer install

### Ongelma nro 1: $sensitiveDataInTrace

Jos koodisi ei toimi enää composer updaten jälkeen (valittaa että *$sensitiveDataInTrace* ei ole määritelty)

Lisää tiedostoon *app/Config/Exceptions.php* seuraava rivi:

```php
public $sensitiveDataInTrace = [];
```
