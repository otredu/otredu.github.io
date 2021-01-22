## Phinx - migrations tool

*Phinx* on kätevä tietokannan luomis- ja päivitystyökalu ([Phinx](https://phinx.org/)-dokumentaatio).

### Asennus

1. Asenna *phinx* composerin avulla (asenna [composer](https://getcomposer.org/download/), jos koneella ei ole sitä vielä)

    ```cmd
    composer require robmorgan/phinx
    ```

2. Tee tarvittavat kansiot: db/migrations ja db/seeds ja aja *phinx*:in init-komento (luo *phinx.php* - konfiguraatiotiedoston):

    ```cmd
    vendor/bin/phinx init
    ```

3. Konffaa tietokantayhteys

    Käynnistä *XAMPP* ja luo uusi tietokanta (*newsdemo_db*). Tallenna tietokannan nimi *phinx.php*-tiedostoon kohtaan *development*:

    ```php
    'development' => [
                'adapter' => 'mysql',
                'host' => 'localhost',
                'name' => 'newsdemo_db',
                'user' => 'root',
                'pass' => '',
                'port' => '3306',
                'charset' => 'utf8',
            ],
    ```

4. Tee projektin juureen *.gitignore* - tiedosto (vendor sisältää muiden tekemää koodia, ja *phinx.php* salasanoja, joten emme halua näitä *github*:iin)

    ```cmd
    phinx.php
    vendor
    ```

### Yhden taulun demo

1. Luo migrations-tiedosto ensimmäiselle taululle. Taulun nimi pitää kirjoittaa isolla alkukirjaimella, koska tästä syntyy luokka (*class*).

    ```cmd
    vendor/bin/phinx create Users
    ```

2. Määrittele taulun kentät *change()*-funktion sisällä, katso ohjeita [phinx:in dokumentaatiosta](https://book.cakephp.org/phinx/0/en/index.html).

*Huom!* phinx-tekee automaattisesti taululle *id*-nimisen *autoincrement primary key*:n, joten sitä ei tarvitse mainita. Käytä taulujen ja kenttien nimissä vain englantia ja pieniä kirjaimia sekä erikoismerkeistä vain _ viivaa).

    ```php
    public function change()
        {
            // create the table
            $table = $this->table('users');
            $table->addColumn('created', 'datetime')
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

    Jos rakenne ei ollut haluttu voit vetää sen takaisin, korjata *migrations*-tiedostoa ja aja *migrations* uudelleen:

    ```cmd
    vendor/bin/phinx rollback -e development
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
                    'id'    => 1,
                    'created' => date('Y-m-d H:i:s'),
                    'username' => 'tester1',
                    'password' => password_hash('salasana1', PASSWORD_DEFAULT),
            
                ],
                [
                    'id'    => 2,
                    'created' => date('Y-m-d H:i:s'),
                    'username' => 'tester2',
                    'password' => password_hash('salasana2', PASSWORD_DEFAULT),
            
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
    vendor/bin/phinx create News
    ```

2. Määrittele taulun kentät *change()*-funktion sisällä. Huomaa, että relaatio muodostetaan *addForeignKey*-lauseella. Hyvä tapa on nimetä *foregn key* tyyliin \<taulunnimi\>_id.

    ```php
        public function change(): void
        {
            $table = $this->table('news');
            $table->addColumn('title', 'string', ['limit' => 50])
                ->addColumn('content', 'string')
                ->addColumn('created', 'datetime')
                ->addColumn('expiry', 'datetime')
                ->addColumn('user_id', 'integer')
                ->addForeignKey('user_id', 'users', 'id', array('delete'=> 'CASCADE', 'update'=> 'NO_ACTION'))
                ->change();
        }
    ```

3. Aja migrations tietokantaan

4. Tee taululle tyhjä seeds-tiedosto

    ```cmd
    vendor/bin/phinx seed:create NewsSeeder
    ```

5. Lisää *run()* - funktioon tietokantataulun data ja *getDependensies()*-funktioon taulut joihin viitataan

    ```php
        public function getDependencies()
        {
            return [
                'UsersSeeder'
            ];
        }
        public function run()
        {
            $data = [
                [
                    'id'    => 1,
                    'title' => 'Talvi tuli',
                    'content' => 'Nyt on kyllä kylmä ilma!',
                    'created' => date('Y-m-d H:i:s'),
                    'expiry' => date('2021-12-31 00:00:00'), 
                    'user_id' => 1,
                ],
                [
                    'id'    => 2,
                    'title' => 'Bussi on myöhässä',
                    'content' => 'Tästä ei hyvää seuraa!',
                    'created' => date('Y-m-d H:i:s'),
                    'expiry' => date('2021-12-31 00:00:00'), 
                    'user_id' => 2,
                ]
            ];

            $posts = $this->table('news');
            $posts->insert($data)
                ->saveData();
        }
    ```

6. Aja seedit tietokantaan

    HUOM! Jos rollback ei toimi, voit poistaa taulut käsin tietokannasta ja ajaa migrations:it uudelleen.

7. Tee itsellesi ohje *readme.md* projektin juureen, niin muistat tarvittavat komennot

    ```md
    ## Luo uusi migrations - tiedosto
    vendor/bin/phinx create MyMigration

    ## Aja migrations tietokantaan
    vendor/bin/phinx migrate -e development

    ## Peruuta muutokset
    vendor/bin/phinx rollback -e development

    ## Tee uusi seeds - tiedosto
    vendor/bin/phinx seed:create UserSeeder

    ## Aja seed:it tietokantaan
    vendor/bin/phinx seed:run    
    ```
8. Tallenna *github*:iin.
