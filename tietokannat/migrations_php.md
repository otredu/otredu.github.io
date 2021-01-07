## phinx - migrations tool

Phinx on kätevä tietokannan luomis- ja päivitystyökalu. 

### Asennus

1. Asenna phinx composerin avulla

```cmd
composer require robmorgan/phinx
```

2. Init luo tarvittavat kansiot (db/migrations, db/seeds) ja phinx.php tiedoston 

```cmd
vendor/bin/phinx init
```

3. Konffaa tietokantayhteys

Käynnistä XAMPP ja luo uusi tietokanta. Tallenna tietokannan nimi phinx.php-tiedostoon:

```php
 'development' => [
            'adapter' => 'mysql',
            'host' => 'localhost',
            'name' => 'rentals',
            'user' => 'root',
            'pass' => '',
            'port' => '3306',
            'charset' => 'utf8',
        ],
```

4. Tee projektin juureen *.gitignore* - tiedosto

```cmd
phinx.php
/vendor
```

### Yhden taulun demo

1. Luo migrations-tiedosto ensimmäiselle taululle

```cmd
vendor/bin/phinx create Users
```

2. Määrittele taulun kentät *change()*-funktion sisällä, katso ohjeita [phinx:in dokumentaatiosta](https://book.cakephp.org/phinx/0/en/index.html)

```php 
public function change()
    {
        // create the table
        $table = $this->table('users',['id' => false, 'primary_key' => ['user_id']]);
        $table->addColumn('user_id', 'integer',['identity' => true])
              ->addColumn('created', 'datetime')
              ->addColumn('username', 'string')
              ->addColumn('password', 'string')
              ->addIndex(['username'], [
                'unique' => true,
                'name' => 'idx_username'])
              ->create();
    }
```

3. Aja migrations tietokantaan

```cmd
vendor/bin/phinx migrate -e development
```

Jos rakenne ei ollut haluttu voit vetää sen takaisin, korjata migrations-tiedostoa ja aja migrations uudelleen:

```cmd
vendor/bin/phinx rollback -e production
```

4. Tee taululle tyhjä seeds-tiedosto

```cmd
vendor/bin/phinx seed:create UsersSeeder
```

5. Lisää *run()* - funktioon tietokantataulun data

```php
    public function run()
    {
        $data = [
            [
                'user_id'    => 1,
                'created' => date('Y-m-d H:i:s'),
                'username' => 'tester1',
                'password' => 'hashed',
        
            ],
            [
                'user_id'    => 2,
                'created' => date('Y-m-d H:i:s'),
                'username' => 'tester2',
                'password' => 'hashed',
        
            ]
        ];

        $posts = $this->table('users');
        $posts->insert($data)
              ->saveData();
    }
```

6. Aja seedit tietokantatauluihin

```cmd
vendor/bin/phinx seed:run   
```

### Toisen taulun lisääminen

1. Luo migrations-tiedosto toiselle taululle

```cmd
vendor/bin/phinx create Notes
```

2. Määrittele taulun kentät *change()*-funktion sisällä (huom! *addForeignKey*) 

```php
    public function change(): void
    {
        $table = $this->table('notes',['id' => false, 'primary_key' => ['notes_id']]);
        $table->addColumn('notes_id', 'integer', ['identity' => true])
              ->addColumn('title', 'string', ['limit' => 50])
              ->addColumn('content', 'string')
              ->addColumn('created', 'datetime')
              ->addColumn('expiry', 'datetime')
              ->addColumn('user_id', 'integer')
              ->addForeignKey('user_id', 'users', 'user_id', array('delete'=> 'CASCADE', 'update'=> 'NO_ACTION'))
              ->save();
    }
```

3. Aja migrations tietokantaan

4. Tee taululle tyhjä seeds-tiedosto

```cmd
vendor/bin/phinx seed:create NotesSeeder
```

5. Lisää *run()* - funktioon tietokantataulun data ja *getDependensies()*-funktioon taulut joihin viitataan

```php
    public function getDependencies()
    {
        return [
            'UserSeeder'
        ];
    }
    public function run()
    {
        $data = [
            [
                'notes_id'    => 1,
                'title' => 'Hello',
                'content' => 'message',
                'created' => date('Y-m-d H:i:s'),
                'expiry' => date('2021-12-31 00:00:00'), 
                'user_id' => 1,
            ],
            [
                'notes_id'    => 2,
                'title' => 'Hello 2',
                'content' => 'message 2',
                'created' => date('Y-m-d H:i:s'),
                'expiry' => date('2021-12-31 00:00:00'), 
                'user_id' => 2,
            ]
        ];

        $posts = $this->table('notes');
        $posts->insert($data)
              ->saveData();
    }
```

6. Aja seedit tietokantaan

HUOM! Jos rollback ei toimi, voit poistaa taulut käsin tietokannasta ja ajaa migrations:it uudelleen.
