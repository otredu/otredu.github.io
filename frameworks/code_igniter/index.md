## Codeigniter 4

Teemme tässä demossa news-sivuston, käytällä Codeigniter4 PHP-frameworkiä. Sovellamme [näitä ohjeita](https://codeigniter.com/user_guide/tutorial/index.html).

### Miksi framework?

Usean henkilön projektissa on hyödyllistä käyttää yhtenäistä arkkitehtuuria, jonka framework tarjoaa. LKun tietyt toiminnallisuudet sijoitetaan aina tietyntyyppisiin komponentteihin ja koodi tallennetaan sovitulla tavalla yhtenäiseen hakemistorakenteeseen sitä on helpompi hallita ja ymmärtää.

Framework:eissä on sisäänrakennettuna tuki monelle [*security* - asialle](https://codeigniter.com/userguide3/general/security.html).

### Asennus

Asenna CI-projekti repon juureen:

```cmd
composer create-project codeigniter4/appstarter newsdemo --no-dev
```

Ota käyttöön intl-lisäosa (c:\xampp\php\php.ini)

```cmd
extension=intl
```

```cmd
composer install
```

Käynnistä jossain muussa kuin default portissa (8080 on jo käytössä phpMyAdminilla):

```cmd
php spark serve --port 8888
```

### Tutustu koodiin ja luokkiin (class)

Kaikki koodi kirjoitetaan *app* - kansion sisälle. CI käyttää MVC - mallia, eli koodi jaetaan *Model*, *Views* ja *Controllers* - komponentteihin. Koska CI on oliopohjainen, nämä komponentit ovat olioita, jotka perivät (*extends*) *parent class*:ilta kaikki *public* ja *protected* metodit.

Esim. tässä otetaan käyttöön CodeIgniter:in oma Controller - luokka ja tehdään siitä oma luokka *News*, jolle tehdään uusi metodi *index()*. Metodi on funktio, joka liittyy tiettyyn olioon.

```php
use CodeIgniter\Controller;
class News extends Controller
{
    public function index()
    {
        ...
    }
}
```

### Muokkaa koodia

Tehdään *templates* - kansioon *footer.php* ja *header.php* - tiedostot.

### Tietokannan yhdistäminen

Toivottavasti olet jo tehnyt newdemo_db - tietokannan XAMPP:iin esim. käyttämällä [migrations/seeds - työkalua](../tietokannat/migrations_php.html). Käynnistä XAMPP.

Ota CI-projektissa tietokantayhteyskäyttöön muokkaamalla *.env* - tiedostoa: poista # - merkit, vaihda tietokannan nimi:

```cmd
#--------------------------------------------------------------------
# DATABASE
#--------------------------------------------------------------------

database.default.hostname = localhost
database.default.database = newsdemo_db
database.default.username = root
database.default.password = 
database.default.DBDriver = MySQLi
```
