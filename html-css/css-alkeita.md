## CSS-alkeita

### Demo 1

```html
<!DOCTYPE html>
<html lang="fi">
    <head>
        <meta charset="UTF-8">
        <title>CSS demo</title>
        <link rel="stylesheet" href="css_demo.css">
    </head>
    <body>
        <div id="header">
        <h1 class="header">Tervetuloa näille sivuille!</h1>
            <ul class="navbar">
                <li ><a class="navbutton" href="etusivu.html">Etusivu</a></li>
                <li ><a class="navbutton" href="toinensivu.html">Toinen sivu</a></li>
                <li ><a class="navbutton" href="kolmassivu.html">Kolmas sivu</a></li>
            </ul>
        </div>
        <div id="main">
        <div id="basicinfo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Open_Content_A_Practical_Guide_to_Using_Creative_Commons_Licences_web-29.png" alt="cc-lisenssit">
            <ul>
                <li><a href="https://courses.p2pu.org/en/courses/2486/content/5078/">Lue lisää CC-lisenssoinnista</a></li>
                <li><a href="https://wiki.uef.fi/pages/viewpage.action?pageId=15008150">Lisää tietoa tekijänoikeuksista</a></li>
            </ul>
        </div>
        <div id="topten">
        <h1>Numeroitu lista</h1>
        <ol>
            <li>eka</li>
            <li>toka</li>
            <li>kolmas</li>
        </ol>
        </div>
        <div id="data">
        <h1>Tietoa</h1>
            <tr>
                <td>Tieto 1</td>
                <td>*******</td>
            </tr>
            <tr>
                <td>Tieto 2</td>
                <td>*******</td>
            </tr>
            <tr>
                <td>Tieto 3</td>
                <td>*******</td>
                </tr>
            <tr>
                <td>Tieto 4</td>
                <td>*******</td>
            </tr>
        </table>
        </div>
        </div>
    </body>
</html>
```