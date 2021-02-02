## CodeIgniter: Newsdemo osa 2

### 1. Lomakkeen luominen (view)

Lisätän uusi *view* lomakkeelle, tallenna se nimellä: *views/news/create.php*:

```php
<?= \Config\Services::validation()->listErrors(); ?>

<h2>Lisää uusi uutinen</h2>

<form action="/news/create" method="post">
    <?= csrf_field() ?>

    <label for="title">Otsikko</label>
    <input type="input" name="title" /><br />

    <label for="content">Teksti</label>
    <textarea name="content"></textarea><br />

    <input type="submit" name="submit" value="Luo uutinen" />

</form>
```

Lomakkeen ensimmäinen rivi käyttää CI:n sisäänrakennettua *form validator* - kirjastoa ja ilmoittaa jos syötteessä on virheitä. *csrf_field()* luo näkymättömän *input*-kentän, joka sisältää [*csrf-token*:in](https://portswigger.net/web-security/csrf). Tämä estää väärinkäytökset, koska token on kertakäyttöinen, ja näin tunnistetaan tieto, joka tulee sivuston itse luoman lomakkeen kautta.

### 2. Lomakkeen käsittely (controller)

Lisätään *NewsController*:iin uusi metodi, joka hoitaa sekä lomakkeen luomisen (get), että sen lähettämisen (post). Liitä seuraava koodi jo olemassa olevan luokan metodiksi.

```php
    public function create()
    {
        $model = new NewsModel();

        if ($this->request->getMethod() === 'post' && $this->validate([
                'title' => 'required|min_length[3]|max_length[255]',
                'content'  => 'required'
            ]))
        {
            $model->save([
                'title' => $this->request->getPost('title'),
                'content'  => $this->request->getPost('content'),
                'user_id' => 1 // HUOM! vaihda kun kirjautuminen on kunnossa!
            ]);

            $data = [
                'message' => "lisääminen"
            ];

            echo view('templates/header');
            echo view('news/success', $data);
            echo view('templates/footer');
 
        }
        else
        {
            echo view('templates/header');
            echo view('news/create');
            echo view('templates/footer');
        }
    }
```

CI-framework tarjoaa *request* - olion, josta voidaan kysyä siihen liittyviä arvoja, kuten HTTP metodia (*getMethod()*) tai lomakekenttiä (*getPost('title')*). Jälkimmäinen vastaa $_POST['title] - kenttää.

Tallentaminen tietokantaan toimii automaattisesti *NewsModel()*:n *save()*-metodin kautta ja lomakkeen validointiin käytetään CI:n omaa [*form validation* - kirjastoa](https://codeigniter.com/user_guide/libraries/validation.html).

Tarvitset vielä onnistumisen ilmoitusnäkymän (*news/views/success.php), joka ilmoittaa että lisääminen onnistui.

```php
<h2>Uutisen <?= $message ?> onnistui!</h2>
```

### 3. Model:in päivittäminen

CI:n model-luokka ei kirjoita tietokantaan mitään, ettet kerro sille mitä kenttiä sen kautta on sallittua/turvallista päivittää. Lisää olemassaolevaan NewsModel:iin seuraava rivi:

```php
protected $allowedFields = ['title', 'content', 'user_id'];
```

### 4. Reitin lisääminen

Lisää vielä reitit *app/conf/routes.php* - tiedostoon:

```php
$routes->match(['get', 'post'], '/news/create', 'News::create');
```

### 5. Uutisen poistaminen (view)

Lisää "poista" - linkki uutisten listaukseen (*views/news/list_view.php*):

```php
<p><a  href="<?php echo base_url(); ?>/news/delete/<?php echo $news_item['id']; ?>">Poista uutinen</a></p>
 ```

Tämä luo esimerkiksi reitin: */news/delete/1* (joka poistaa uutisen, jonka id on 1).

Käytämme tässä url:in rakentamiseen lisääksi funktiota *base_url()*, jotta voimme määrittää webbiserverimme portiksi jotain muuta kuin 8080. Muokkaa *.env* - tiedostoon base_url:

```php
app.baseURL = 'http://localhost:8888'
```

### 6. Uutisen poistaminen (controller)

Lisää uusi metodi *NewsController*:iin:

```php
 public function delete($id = null)
    {
        $model = new NewsModel();
        $model->where('id', $id)->delete($id);
        return redirect()->to(base_url('news'));
    }
```

### 7. Reitin lisääminen

```php
$routes->get('/news/delete/(:num)', 'News::delete/$1');
```

### 8. Uutisen muokkaaminen (view)
`
Tee uusi muokkauslomake (*views/news/edit.php*):

```php
<?= \Config\Services::validation()->listErrors(); ?>

<h2>Muokkaa uutista</h2>

<?php if (! empty($news_item)): ?>

<form action="<?php echo base_url(); ?>/news/update/<?php echo $news_item['id']; ?>" method="post">
    <?= csrf_field() ?>

    <label for="title">Otsikko</label>
    <input type="input" name="title" value="<?= $news_item['title'] ?>"/><br />

    <label for="content">Teksti</label>
    <textarea name="content"><?= $news_item['content'] ?></textarea><br />

    <input type="submit" name="submit" value="Tallenna uutinen" />

</form>

<?php else: ?>

<h2>Uutista ei enää ole</h2>

<?php endif ?>
```

Lisää "muokkaa" - linkki uutisten listaukseen (*views/news/list_view.php*):

```php
<p><a  href="<?php echo base_url(); ?>/news/edit/<?php echo $news_item['id']; ?>">Muokkaa uutista</a></p>
```

### 10. Uutisen muokkaaminen (controller)

Lisää *NewsController*:iin uusi metodi, joka hakee muokattavan uutisen tietokannasta ja avaa sen editointinäkymään:

```php
 public function edit($id = null)
    {
        $model = new NewsModel();
 
        $data = [
            'news_item'  => $model->where('id', $id)->first()
        ];

        echo view('templates/header');
        echo view('news/edit', $data);
        echo view('templates/footer');
    }
```

### 11. Reitin lisääminen

Lisää uusi reitti:

```php
$routes->get('/news/edit/(:num)', 'News::edit/$1');
```

### 12. Muokatun uutisen tallentaminen (controller)

Lisää metodi, joka hoitaa muokkausten tallentamisen tietokantaan.

```php
public function update($id = null)
    {
        $model = new NewsModel();

        if ($this->request->getMethod() === 'post' && $id !== null && $this->validate([
                'title' => 'required|min_length[3]|max_length[255]',
                'content'  => 'required'
            ]))
        {
            $newsdata = [
                'title' => $this->request->getPost('title'),
                'content'  => $this->request->getPost('content'),
            ];
            
            $model->update($id, $newsdata);

            $data = [
                'message' => "päivittäminen"
            ];

            echo view('templates/header');
            echo view('news/success', $data);
            echo view('templates/footer');
        }
        else
        {
            return $this->response->redirect(base_url('/news'));
        }
    }
```

### 13. Reitin lisääminen

Lisää reitti päivityksen hoitavalle *NewsController*:in metodille.

```php
$routes->get('/news/update/(:num)', 'News::update/$1');
```