## WordPress:in asentaminen webhotelliin

1. Lataa [WordPress.zip](https://wordpress.org/download/) ja pura se
2. Uudelleen nimeä tiedosto: *wp-config-sample.php* *wp-config.php*:ksi.
3. Avaa tiedosto editorissa esim. visual studio code ja muokkaa tietokantasi nimi (xxxx_database), käyttäjätunnus (xxxx_username) sekä salasana (xxxx_password). Saat nämä opettajalta:

    ```cmd
    /** The name of the database for WordPress */
    define( 'DB_NAME', 'xxxx_database' );

    /** MySQL database username */
    define( 'DB_USER', 'xxxx_username' );

    /** MySQL database password */
    define( 'DB_PASSWORD', 'xxxx_password' );
    ```

4. Lataa [WinSCP-ohjelma (portable)](https://winscp.net/eng/docs/portable).

5. Avaa yhteys palvelimelle käyttäen opettajan antamia ftp-kirjautumistietoja (ftp-server, ftp-username, ftp-password, ftp-port):

    ![winscp login](./img/winscp.png)

6. Siirrä kaikki WP-tiedostot palvelimelle *public*-kansion sisälle hinaamalla ne vasemmalta oikealle.

    ![winscp tiedostojen siirto](./img/winscp_files1.PNG)

7. Nyt wp-konffaussivun pitäisi aueta osoiteesta: *xxxx_username.nodeeli5.net*. Konffaa selaimessa WP-palvelimesi loppuun, tallenna huolella wp-admin-tunnus ja salasana!

*Huom!* Jos sinulla on jo lokaali wp-toteutus, siirrä tietokanta-dump kuten [näissa ohjeissa](./nodeeli.html).

## Linkkejä

- [How to install Wordress](https://wordpress.org/support/article/how-to-install-wordpress/)