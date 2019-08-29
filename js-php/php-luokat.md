### Oliot ja luokat

Ohjelmoinnissa olioiden avulla varastoidaan tietoa, ja tarjotaan määritelty rajapinta tämän tiedon käsittelemiseen. Olion tarkoitus on piilottaa tiedon esitysmuoto, ja estää sen käyttäminen suoraan. Nämä olion sisäiset muuttujat ovatkin yleensä tyyppiä *protected* eli ne eivät näy olion ulkopuolelle ([lisää public, protected ja private eroista](https://www.php.net/manual/en/language.oop5.visibility.php)). 

Olion sisältämää tietoa käsitellään sen metodien avulla, jotka ovat *public* tyyppisiä. Metodit ovat funktioita, jotka pääsevät käsittelemään olion sisälle talletettuja muuttujan arvoja *this*:in kautta. Olion rakenne ja toiminta määritellän luokan (*class*) avulla. Luokasta tehdään olio eli uusi instanssi *new*:n avulla.

Kun luokka määritellän, ensimmäiseksi tehdään sen rakentaja eli *construct*:ori. Tässä *task*-nimisen luokan määrittely:

```php
<?php

class Task {
    protected $description;
    protected $completed = false;

    public function __construct($desc)
    {
        $this->description = $desc;
    }
    public function getDescription(){
        return $this->description;
    }
    public function isComplete(){
        return $this->completed;
    }
    public function complete(){
        $this->completed = true;
    }
}
```

Luokka sisältää muuttujat *$description* sekä *$completed*, jonka alkuarvo on *false*. Luokan rakentaja (*__construct*) on funktio, joka saa parametrin *desc*, joka tallennetaan sisäiseen muuttujaan *$this->description*.

```php
    public function __construct($desc)
    {
        $this->description = $desc;
    }
```

Luokalla on myös funktiot, tehtävän kuvauksen ja tilan kysymiseen (ns. *getter*):

```php
public function getDescription(){
        return $this->description;
}
public function isComplete(){
        return $this->completed;
}
```

Sekä yksi funktio, jonka avulla tehtävän voi kuitata tehdyksi (ns. *setter*):

```php
    public function complete(){
        $this->completed = true;
    }
```

Tästä luokasta voi tehdä uusia instansseja eli olioita rakentajan avulla:

```php
$task = new Task('Go to the store');
```

Olion metodeja voi kutsua olion nimen avulla:

```php
$task->getDescription();
$task->isComplete();
$task->complete();
```