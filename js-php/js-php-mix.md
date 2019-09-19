## JavaScript PHP-koodin seassa

### OK/Cancel toiminnallisuus

JavaScript soveltuu hyvin käytettäväksi sellaisissa kohdissa sivustoa, jossa kysytään käyttäjän vahvistusta. JS:n avulla voidaan esim. vaihtaa linkkien *href*-arvo tai toteuttaa menurakenne.

JavaScriptin voi tuoda sivulle erillisenä *.js-tiedostona tai sijoittaa *script*-tagin sisään. Esim. tämän koodin voi sijoittaa *head.php*-tiedostoon:

```html
<script>
    function confirmDelete(id) {
        const answer = confirm("Poistetaanko uutinen?");
        if(!answer){
            document.getElementById('deleteNews' + id).href = '/uutiset';
        }
        return answer;
    }
</script>
```

Tätä koodia voi käyttää uutisen poistamisen vahvistukseen:

```php
$id = $newsitem['uutinenID'];
$newsid = 'deleteNews' . $id;
echo "<a id=$newsid onClick='confirmDelete($id)' href=/poista_uutinen/$id>Poista</a>";
```

