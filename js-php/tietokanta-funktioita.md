## Tietokantafunktioita

Operaatioita jotka tehdään usein, kannattaa eristää omiksi funktioikseen. Niistä kannattaa tehdä mahdollisimman yleiskäyttöisiä, jotta niitä voidaan käyttää mahdollisimman monessa kohtaa.

### SelectAll

Tämän funktion avulla voit pyytää tietokantatauluun sisällön. Funktio kannattaa sijoittaa "database/database.php"-tiedostoon:

```php
function selectAll($pdo, $table){
    $statement = $pdo->prepare("select * from $table");
    $statement->execute();
    $all = $statement->fetchAll();
    return $all;
}
```

Funktiota voidaan kutsua näin (esim. uuden uutisten kysyminen). Tämä toiminnallisuus löytyy tyypillisesti kontrollerista (esim. controllers/read_news.php):

```php
require "database/database.php";

$pdo = connectDB();
$allnews = selectAll($pdo, 'uutinen');
```

### InsertInto

Tämän funktion avulla voit lisätä tietokantatauluun uuden tietueen. Funktio kannattaa sijoittaa "database/database.php"-tiedostoon:

```php
function insertInto($pdo, $table, $data){
    $columns = array_keys($data);
    $columns_string = implode(', ', $columns);
    $placeholders = implode(', ', array_fill(1, count($data), '?'));
    $sql = "INSERT INTO $table ($columns_string) VALUES ($placeholders)";
    $statement = $pdo->prepare($sql);
    $values =  array_values($data);
    $cleanvalues = array_map('cleanUp', $values);
    $statement->execute($cleanvalues);

    if($statement != FALSE) {
        echo "Insert onnistui";
    } else {
        echo "Insert meni pieleen";
    }
}
```

Funktiota voidaan kutsua näin (esim. uuden uutisen lisääminen). Tämä toiminnallisuus löytyy tyypillisesti kontrollerista (esim. controllers/add_news.php):

```php
require "database/database.php";
    if(isset($_POST['newstitle'], $_POST['newstext'], $_POST['writer'], $_POST['newstime'], $_POST['removedate'])){
        $title = $_POST['newstitle'];
        $text = $_POST['newstext'];
        $writer = $_POST['writer'];
        $time = $_POST['newstime'];
        $removetime = $_POST['removedate'];

        $pdo = connectDB();

    try {
        insertInto(
            $pdo,
            'uutinen',
            [   "otsikko" => $title,
                "sisalto" => $text,
                "kirjoittaja" => $writer,
                "kirjoituspvm" => $time,
                "poistamispvm" => $removetime]);
        echo "Uutinen lisätty";
    } catch (PDOException $e){
    echo "Virhe uutista lisättäessä: " . $e->getMessage();
    }
}
```

### DeleteFrom

Tämän funktion avulla voit poistaa tietokantataulusta tietueen. Funktio kannattaa sijoittaa "database/database.php"-tiedostoon:

```php
function deleteFrom($pdo, $table, $id_data){
    $id_name =  $id_data['id_name'];
    $id_value =  $id_data['id_value'];
    if(getenv('DB_DBTYPE') === 'MySql'){
        $statement = $pdo->prepare("delete from $table where $id_name = ?");
    } else {
        $statement = $pdo->prepare("delete from $table where \"$id_name\" = ?");
    }

    $statement->execute([$id_value]);
}
```

Funktiota voidaan kutsua näin (esim. uutista poistettaessa). Tämä toiminnallisuus löytyy tyypillisesti kontrollerista (esim. controllers/delete_news.php):

```php
require "database/database.php";
$pdo = connectDB();

try {
    deleteFrom($pdo, 'uutinen', ["id_name" => "uutinenID", "id_value" => $id]);
    echo "Uutinen poistettu";
} catch (PDOException $e){
    echo "Virhe uutista poistettaessa: " . $e->getMessage();
}
```

### Login

Tämä funktio testaa löytyykö käyttäjää tietokannasta, ja täsmääkö tietokannassa oleva ($hashedpassword) annetun salasanan kanssa.

```php
function login($pdo, $table, $user){
    $cleanusername = cleanUp($user["username"]);  
    $statement = $pdo->prepare("select password from $table where username = ?");
    $statement->execute([$cleanusername]);
    $hashedpassword = $statement->fetch(PDO::FETCH_ASSOC);

    if($hashedpassword["password"]){
        // password, varaa 255 merkkiä tietokannassa
        $result = password_verify($user["password"], $hashedpassword["password"]);
        return $result;
    } else {
        return false;
    }
}
```

Tässä esimerkki miten login-funktiota voi käyttää. Tämä toiminnallisuus löytyy tyypillisesti kontrollerista (esim. controllers/login.php):

```php
require "database/database.php";

require "database/database.php";
if(isset($_POST['username'], $_POST['password'])){
    $username = $_POST['username'];
    $password = $_POST['password'];
    $pdo = connectDB();
    $result = login($pdo, 'users', [
        "username" => $username,
        "password" => $password]);
    if($result){
        //echo "Tervetuloa";
        require "views/uusi_uutinen.view.php";
    } else {
        //echo "Et pääse sisään";
        require "views/login.view.php";
    }
} else {
    require "views/login.view.php";
}
```

*Huom!* Tässä ei ole otettu huomioon vielä sessiota!

### SelectFrom

Tämän funktion avulla voi kysyä tietokannalta yhtä tietuetta id:n avulla:

```php
function selectFrom($pdo, $table, $id_data){
    $id_name =  $id_data['id_name'];
    $id_value =  $id_data['id_value'];
    if(getenv('DB_DBTYPE') == 'MySql'){
        $statement = $pdo->prepare("select * from $table where $id_name=?");
    } else {
        $statement = $pdo->prepare("select * from $table where \"$id_name\"=?");
    }
  
    $statement->execute([$id_value]);
    $all = $statement->fetch(PDO::FETCH_ASSOC);
    return $all;
}
```

Tässä esimerkki miten *selectFrom*-funktioita voi käyttää (esim. *paivita_uutinen.php*-kontrollerista):

```php
require "database/database.php";
$pdo = connectDB();

try {
    $news = selectFrom($pdo, 'uutinen', ["id_name" => "uutinenID", "id_value" => $id]);
    echo "Muokkaa uutista";
} catch (PDOException $e){
    echo "Virhe uutista haettaessa: " . $e->getMessage();
}

if($news){
    $id = $news['uutinenID'];
    $title = $news['otsikko'];
    $text = $news['sisalto'];
    $writer = $news['kirjoittaja'];
    $dbtime = $news['kirjoituspvm'];
    $time = implode("T", explode(" ",$dbtime));
    $removetime = $news['poistamispvm'];

    require "views/paivita_uutinen.view.php";
} else {
  header("location: /uutiset");
  exit;
}
```

### Update

Tämän funktion avulla voi päivittää tiedot tietokantaan id:n avulla:

```php
function update($pdo, $table, $data, $id_data){
    $id_name =  $id_data['id_name'];
    $id_value =  $id_data['id_value'];
    $columns = array_keys($data);
    $columns_string = implode('= ?, ', $columns) . "=?";
    if(getenv('DB_DBTYPE') === 'MySql'){
        $sql = "UPDATE $table SET $columns_string WHERE $id_name=?";
    } else {
        $sql = "UPDATE $table SET $columns_string WHERE \"$id_name\"=?";
    }

    $statement = $pdo->prepare($sql);
    $values =  array_values($data);
    $cleanvalues = array_map('cleanUp', $values);
    $mergevalues = array_merge($cleanvalues, [$id_value]);
    $statement->execute($mergevalues);

    if($statement != FALSE) {
        echo "Update onnistui";
    } else {
        echo "Update meni pieleen";
    }
}
```

Tässä esimerkki miten *update*-funktiota voi käyttää (esim. *paivita_uutinen_db.php*-kontrollerista):

```php
require_once "database/database.php";
$pdo = connectDB();

if(isset($_POST['newstitle'], $_POST['newstext'], $_POST['writer'], $_POST['newstime'], $_POST['removedate'], $id)){
    $title = $_POST['newstitle'];
    $text = $_POST['newstext'];
    $writer = $_POST['writer'];
    $time = $_POST['newstime'];
    $removetime = $_POST['removedate'];

    try{
        update(
            $pdo,
            'uutinen',
            [   "otsikko" => $title,
                "sisalto" => $text,
                "kirjoittaja" => $writer,
                "kirjoituspvm" => $time,
                "poistamispvm" => $removetime],
            ["id_name" => "uutinenID", "id_value" => $id]);
            //echo "update ok";
            header("Location: /");
    } catch (PDOException $e){
            echo "Virhe uutista päivitettäessä: " . $e->getMessage();
    }
} else {
    header("location: /uutiset");
    exit;
}
```