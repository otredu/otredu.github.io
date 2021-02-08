## CodeIgniter: Newsdemo osa 3

### 1. Navikoinnin lisääminen (register/login)

Lisää navikointipalkkiin (*views/templates/header.php*) linkki rekisteröitymis- ja kirjautumislomakkeille sekä uloskirjautumiselle:

```php
    <li><a href="/user/register">Rekisteröidy</a></li>
    <li><a href="/user/login">Kirjaudu</a></li>
    <li><a href="/user/logout">Kirjaudu ulos</a></li>
```
### 2. Views (register/login)

Tee rekisteröitymislomake (*Views/user/register.php*)

```php
<?= \Config\Services::validation()->listErrors(); ?>

<h3>Register</h3>

<form action="/user/register" method="post">
 
    <div><label for="username">Käyttäjänimi</label>
        <input type="text" name="username" id="username" value="">
    </div>
 
    <div><label for="password">Salasana</label>
        <input type="password" name="password" id="password" value="">
    </div>
        
    <div><label for="password2">Salasana uudelleen</label>
        <input type="password" name="password2" id="password2" value="">
    </div>
     
    <input type="submit" name="submit" value="Rekisteröidy" />
</form>
```

Tee samalla vastaava kirjautumislomake (*Views/user/register.php*), jossa *action*-kentässä on: "user/login".

### 3. User - Controller (register)

Tee uusi kontrolleri (*Controllers/User.php*) ja siihen *register*-metodi.

```php
<?php namespace App\Controllers;

use App\Models\UserModel;

class User extends BaseController
{
    public function register()
    {
        $data = [];
        $model = new UserModel();

        if ($this->request->getMethod() === 'post'){

        $rules = [
                'username' => 'required|min_length[6]|max_length[255]|is_unique[users.username]',
                'password'  => 'required|min_length[8]|max_length[255]',
                'password2' => 'matches[password]'
        ];
        $errors = [
                'username' => [
                'required' => 'Käyttäjänimi ei voi olla tyhjä'
            ],
                'password' => [
                'required' => 'Salasana ei voi olla tyhjä'
                ],
        ];

        if(! $this->validate($rules, $errors)){
            $data['validation'] = $this->validator;
        } else {
            $model->save([
                'username' => $this->request->getPost('username'),
                'password'  => $this->request->getPost('password'),
            ]);
            return redirect()->to('/user/login');
        }
    }
        echo view('templates/header');
        echo view('user/register');
        echo view('templates/footer');
    }
}
```

Tässä annetaan validointikirjastolle suomenkieliset virheviestit *error*-taulukossa, joka kulkeutuu *view:lle. Kirjasto osaa tarkistaa, että salasanat täsmäävät (*match*) ja sen onko valittu käyttäjätunnus jo käytössä (*is_unique*). Voit itse lisätä virheilmoituksia.

### 4. UserModel

Jotta tieto tallentuu tietokantaan, tee uusi model (*Models/UserModel.php*). Model hoitaa salasanan hashaamisen (*beforeUpdate*).

```php
<?php namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model{
  protected $table = 'users';
  protected $allowedFields = ['username', 'password'];
  protected $beforeInsert = ['beforeInsert'];
  protected $beforeUpdate = ['beforeUpdate'];

  protected function beforeInsert(array $data){
    $data = $this->passwordHash($data);
    return $data;
  }

  protected function beforeUpdate(array $data){
    $data = $this->passwordHash($data);
    return $data;
  }

  protected function passwordHash(array $data){
    if(isset($data['data']['password']))
      $data['data']['password'] = password_hash($data['data']['password'], PASSWORD_DEFAULT);

    return $data;
  }
}
```

### 5. Routes

 Lisää yllä tehty register-metodi *config/routes.php*:een:

 ```php
 $routes->match(['get', 'post'], '/user/register', 'User::register');
 ```

 Nyt pitäisi rekisteröitymisen toimia.

### 6. User - Controller (login)

 Lisää *User*-kontrolleriin metodi, joka hoitaa kirjautumisen:

 ```php
public function login()
{
    $data = [];
    $model = new UserModel();

    if ($this->request->getMethod() === 'post'){
        $rules = [
            'username' => 'required|min_length[6]|max_length[50]',
            'password' => 'required|min_length[8]|max_length[255]|validateUser[username,password]',
        ];

        $errors = [
          'password' => [
          'validateUser' => 'Tarkista käyttäjänimi tai salasana'
          ]
        ];

        if (! $this->validate($rules, $errors)) {
            $data['validation'] = $this->validator;
        }else{
            $model = new UserModel();
            $user = $model->where('username', $this->request->getVar('username'))->first();
            $this->setUserSession($user);
            return redirect()->to('/');
        }
    }

    echo view('templates/header');
    echo view('user/login');
    echo view('templates/footer');
}
```

*Login* - käyttää käyttäjätunnuksen ja salasanan tarkistamiseen CI:n validaatiokirjastoa (*validate*), johon voi lisätä omia validointisääntöjä. Tee uusi tiedosto (*Validation/UserRules.php*) ja liitä seuraava koodi siihen:

```php
<?php
namespace App\Validation;
use App\Models\UserModel;

class UserRules
{
  public function validateUser(string $str, string $fields, array $data){
    $model = new UserModel();
    $user = $model->where('username', $data['username'])
                  ->first();

    if(!$user)
      return false;

    return password_verify($data['password'], $user['password']);
  }
}
```

Jotta CI-framework löytää tämän tiedoston, lisää se *Config/Validation.php*-tiedostoon:

```php
public $ruleSets = [
    \CodeIgniter\Validation\Rules::class,
    \CodeIgniter\Validation\FormatRules::class,
    \CodeIgniter\Validation\FileRules::class,
    \CodeIgniter\Validation\CreditCardRules::class,
    \App\Validation\UserRules::class,           // UUSI!
];
```

Jotta kirjautuminen muistetaan, tallennetaan *session*-muuttujaan kirjautuneen tiedot. Tämä tapahtuu uuden *private*-metodin avulla, joka lisätään *User*-kontrolleriin. *private*-metodit ovat luokan sisäisiä "apumetodeja", eikä niitä käytetä luokan ulkopuolelta.

```php
private function setUserSession($user){
    $data = [
        'id' => $user['id'],
        'username' => $user['username'],
        'isLoggedIn' => true,
    ];

    session()->set($data);
    return true;
}
```

Session-muuttujaa voidaan käyttää *session()*-funktion avulla, palauttaa *session*-olion, jolla on käteviä apumetodeja. Jotta sessio syntyy, jokaisen requestin kohdalla pitää muistaa kutsua session alustusfunktiota. Oliomallissa tämä hoituu, kun seuraavan koodirivin ottaa käyttöön *BaseController*:issa (jonka kaikki kontrollerit perivät):

```php
$this->session = \Config\Services::session();
```

### 7. Routes

 Lisää yllä tehty login-metodi *config/routes.php*:een:

 ```php
 $routes->match(['get', 'post'], '/user/login', 'User::login');
 ```

 Jotta näemme, että login toimii, muutetaan navigointipalkin sisältöä kirjautumisen mukaisesti:

 ```php
<ul>
    <li><a href="/">Takaisin</a></li>
    <?php if (session()->get('isLoggedIn')): ?>
    <li><a href="/news">Lue uutisia</a></li>
    <li><a href="/news/create">Luo uusi uutinen</a></li>
    <li><a href="/user/logout">Kirjaudu ulos</a></li>
    <?php else: ?>
    <li><a href="/user/register">Rekisteröidy</a></li>
    <li><a href="/user/login">Kirjaudu</a></li>
    <?php endif ?>    
</ul>
```

Nyt kirjautumisen pitäisi toimia.

8. Käyttäjän tunnistaminen (*user_id*)

Jotta uusi uutinen tallentuu tietokantaan oikean käyttäjän alle, käydään korjaamassa *News*-kontrollerin *create*-metodiin seuraava rivi. Kovakoodatun *user_id*:n tilalle haetaan kirjautuneen käyttäjän id *session*-muuttujasta:

```php
$model->save([
    'title' => $this->request->getPost('title'),
    'content'  => $this->request->getPost('content'),
    'user_id' => session()->get('id')     /// TÄMÄ!
]);
```

9. Logout

Jotta voit testata kirjautumista, lisätään *User*-kontrolleriin *logout*-metodi:

```php
public function logout(){
    session()->destroy();
    return redirect()->to('/');
}
```

Lisää sille myös reitti (*Conf/routes.php*):

```php
$routes->get('/user/logout', 'User::logout');
```

10. Filters

Vaikka kirjautuminen periaatteessa toimii, tekemämme reitit eivät ole suojattuja. Jos avaat käsin osoitteen: */news* se aukeaa, vaikka käyttäjä ei ole kirjautuneena.

Jotta näin ei pääsisi käymään lisätään *Auth*-filter, suojaamaan reittejä. Tee *Auth*-luokka (*Filters/Auth.php*):

```php
<?php namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class Auth implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = NULL)
    {
        // Do something here
        if(! session()->get('isLoggedIn')){
          return redirect()->to('/');
        }
    }

    //--------------------------------------------------------------------

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = NULL)
    {
        // Do something here
    }
}
```

Luokka ei peri *CI framework*:ista toimintoja, mutta se implementoi *FilterInterface*:n, eli se lupaa toteuttaa tietyt toiminnallisuudet, jotta framework voi sitä käyttää.

Jotta filteriä on helpompi käyttää annetaan sille lyhyempi *alias*. Lisää seuraava rivi (*Conf/Filters.php*)

```php
public $aliases = [
    'csrf'     => \CodeIgniter\Filters\CSRF::class,
    'toolbar'  => \CodeIgniter\Filters\DebugToolbar::class,
    'honeypot' => \CodeIgniter\Filters\Honeypot::class,
    'auth' => \App\Filters\Auth::class,   //TÄMÄ!!
    ];
```

Ja lopuksi otetaan filter-suojaukset reiteille käyttöön, muokkaa *Conf/routes.php*:

```php
$routes->get('/news', 'News::index',['filter' => 'auth']);
$routes->match(['get', 'post'], '/news/create', 'News::create',['filter' => 'auth']);
$routes->get('/news/delete/(:num)', 'News::delete/$1',['filter' => 'auth']);
$routes->get('/news/edit/(:num)', 'News::edit/$1',['filter' => 'auth']);
$routes->get('/news/update/(:num)', 'News::update/$1',['filter' => 'auth']);
```

Nyt rekisteröityminen, kirjautuminen ja uloskirjautuminen toimivat.

11. Session Flashdata

Jos haluat kertoa, että rekistöityminen onnistui, voit tallentaa tiedon *session*:n *flashData*:aan. Tähän voi tallentaa väliaikaista tietoa, joka näytetään seuraavan sivun yhteydessä eli *login*-sivulla.

Lisää *User::register*-metodin sisälle registeröinnin onnistumishaaraan (ennen redirect:iä):

```php
    session()->setFlashdata('success', 'Rekisteröinti onnistui');
```

Lisää myös *login*-view:iin:

```php
<?php if (session()->get('success')): ?>
    <?= session()->get('success') ?>
<?php endif; ?>
```