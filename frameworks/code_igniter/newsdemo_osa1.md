## CodeIgniter: Newsdemo osa 1
### 1. Asennus

Asenna CI-projekti repon juureen:

```cmd
composer create-project codeigniter4/appstarter newsdemo --no-dev
```

Ota käyttöön intl-lisäosa (c:\xampp\php\php.ini)

```cmd
extension=intl
```

Siirry uuden projektin kansioon ja asenna vielä tarvittavat kirjastot:

```cmd
cd newsdemo
composer install
```

Ota käyttöön kehitysympäristö (development), muokkaa *.env*-tiedostoon:

```cmd
CI_ENVIRONMENT = development
```

Käynnistä jossain muussa kuin default portissa (8080 on jo käytössä phpMyAdminilla):

```cmd
php spark serve --port 8888
```

Avaa selain osoitteessa http://localhost:8888 niin näet CI:n tervetulosivun.

### 2. Tutustuminen genroituun koodiin, oma etusivu

Kaikki koodi kirjoitetaan *app* - kansion sisälle. CI käyttää MVC - mallia, eli koodi jaetaan *Model*, *Views* ja *Controllers* - komponentteihin. Koska CI on oliopohjainen, nämä komponentit ovat olioita, jotka perivät (*extends*) *parent class*:ilta kaikki *public* ja *protected* metodit.

Avaa *Controller* - kansio. Siellä on kaksi tiedostoa: *Home.php* ja *BaseController.php*. *Home.php*:n sisällä on määritelty luokka (class) *Home* ja sille yksi metodi: *index()*. Metodi on siis vain funktio, joka on määritelty tietyn luokan olioille (object).

```php
<?php namespace App\Controllers;

class Home extends BaseController
{
    public function index()
    {
        return view('welcome_message');
    }
}
```

*Index()* - metodi palauttaa *view*:n jonka nimi on "welcome_message". Löydät sen *Views* - kansiosta.

Tehdään oma tervetulosivu *views*-kansioon. Tee uusi tiedosto, jonka nimi on *my_welcome.php* ja liitä sinne tämä koodi:

```php
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <title>CodeIgniter Tutoriaali</title>
</head>
<body>

    <h1> Lue uutisia, tulet viisaammaksi! </h1>

    <em>&copy; 2021</em>
</body>
</html>
```

Vaihda myös *Home-controller*, käyttämään sitä:

```php
view('my_welcome')
```

Jaa koodi vielä *footer*- ja *header*-osiin. Tee *templates* - kansio, ja sinne *header.php* ja *footer.php* - tiedostot.

Tallenna *header.php* tiedostoon sivuston kaikille sivuille yhteinen osuus:

```html
<!DOCTYPE html>
<html lang="fi">
<head>
    <meta charset="UTF-8">
    <title>CodeIgniter Tutoriaali</title>
</head>
<body>
```

Tallenna *footer.php* - tiedostoon:

```html
    <em>&copy; 2021</em>
</body>
</html>
```

Muutetaan *Home-Controller*:in index()-metodi rakentamaan sivu näistä kolmesta osasta:

```php
$data = [        
    'name' => 'Tiina'
];
echo view('templates/header', $data);
echo view('my_welcome', $data);
echo view('templates/footer', $data);
```

Tässä on samalla otettu käyttöön *$data*-muuttuja, joka on taulukko, jonka avulla voidaan siirtää tietoa *view*:lle. 

Ota käyttöön *name*-parametri *header*:issa (huom. *$data*-taulukkoon ei tarvitse enää viitata, muuttujaa voi käyttää suoraan):

```php
    <h1>Tervetuloa <?= $name; ?>:n uutisiin</h1>
```

Jotta sivulle ei joutuisi koskaan mitään vaarallista, on hyvä käyttää CI:n globaalia *esc()* funktiota (estää [XSS-hyökkäykset](https://fi.wikipedia.org/wiki/Cross-site_scripting))

```php
    <h1>Tervetuloa <?= esc($name); ?>:n uutisiin</h1>
```

### 3. Tietokannan yhdistäminen

Seuraavaksi haetaan tietokannasta uutiset uuden *News-Controller*:in ja *News-Model*:in avulla, mutta ennen sitä konffataan tietokantayhteys kuntoon.

Toivottavasti olet jo tehnyt newsdemo_db - tietokannan XAMPP:iin esim. käyttämällä [migrations/seeds - työkalua](../tietokannat/migrations_php.html). Käynnistä XAMPP.

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

### 4. *News-Model*

CI-frameworkissa tietoa haetaan tietokannasta *Model*-luokan avulla. Tee siis *Models*-kansioon uusi tiedosto: *NewsModel.php* ja tallenna siihen seuraava koodi (vaihda taulun nimi tarvittaessa):

```php
<?php namespace App\Models;

use CodeIgniter\Model;

class NewsModel extends Model
{
    protected $table = 'news';
    
    public function getAllNews()
    {      
        return $this->findAll();
    }
}
```

### 5. *News-Controller*

Seuraavaksi tehdään uutisille kontrolleri. Tee *Controllers*-kansioon uusi tiedosto News.php, ja liitä siihen seuraava koodi:

```php
<?php namespace App\Controllers;

use App\Models\NewsModel;

class News extends BaseController
{
    public function index()
    {
        $model = new NewsModel();
    
        $data = [
            'news'  => $model->getAllNews()
        ];
        var_dump($data)
    }
}
```

### 6. Reitti (route)

Jotta saamme tämän uuden kontrollerin toimintaan, siitä pitää kertoa reitittimelle eli avaa tiedosto: *App/Config/Routes.php* ja lisää sinne aikaisemman reitin alle uusi *news*-reitti (osoite):

```php
$routes->get('/', 'Home::index');  
$routes->get('/news', 'News::index'); //UUSI
```

Kokeile sivua, saatko tietokannasta jotain ulos (*var_dump*).

### 7. news_list (view)

Lisätään uusi *view* uutisten katseluun. Tee uusi tiedosto: views/news/list_view.php, ja tallenna siihen seuraava koodi:

```php
<h2>Uutiset alkavat:</h2>

<?php if (! empty($news) && is_array($news)) : ?>

    <?php foreach ($news as $news_item): ?>

        <h3><?= esc($news_item['title']); ?></h3>

        <div class="main">
            <p><?= esc($news_item['content']); ?></p>
        </div>

    <?php endforeach; ?>

<?php else : ?>

    <h3>Ei uutisia</h3>

    <p>Käynnistä tietokanta?</p>

<?php endif ?>
```

Ota tämä uusi *view* - käyttöön, korvaa *var_dump* *NewsController*:issa:

```php
        //var_dump($data);
        echo view('templates/header', $data);
        echo view('news/list_view', $data);
        echo view('templates/footer', $data);
```

Ja muista lisätä *$data*:an myös aikaisempi lisätä parametri 'name':

```php
 $data = [
            'news'  => $model->getAllNews(),
            'name' => 'Tiina'
        ];
```

Ensimmäinen osa demoa on nyt valmis. Olet saanut tietokannasta uutiset ruudulle.

---

### Tehtäviä:

- lisää ruudulle näkyville uutisen päivämäärä (muotoile local - muotoon)
- lisää nav-palkkiin linkki uutissivulle sekä takaisin pääsivulle (a href="/news")
- tee CSS-tiedosto (laita se kansioon /public/css), muotoile uutissivu kauniiksi, erota uutiset omiin laatikoihin, muotoile nav-palkki

### Lisätehtäviä:

- lisää tietokantaan uutiselle kuva (url), ja renderöi myös se ruudulle
