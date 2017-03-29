# Použitá logika a tehnologie na projektu:

## Načítání:
- CORE
- LAYOUT
- LIBS
- COMPONENTS ===> WRAP, FORM, LIST, IN, TABLE, WINDOW, BOX
- SINGLE
- HELPERS

## nepoužíváme ID a co nejméně important!
- ID přebíjí nastavení class
- important pouze na neřešitelné situace, či přebití inline stylu z html či js

## komponentní kódování (BEM)
- http://www.vzhurudolu.cz/prirucka/bem
- http://www.smashingmagazine.com/2014/07/17/bem-methodology-for-small-projects/

## Zápis css vlastností podle priorit
- první píšeme zásadní vlastnosti (display, position, z-index, width, height apod), případně mixiny se zásadními vlastnostmi (.cfx(), .eliminate-lines(), box-sizing().. )
- jako druhé se píší stylistické věci jako font, color, background..
- jako třetí se píši css3 věci, bez zásadního vlivu (border-radius, box-shadow..)
- oddíly od sebe odsazujeme prázdným řádkem

## Složka components
- podsložky rozdělují komponenty logicky od sebe
- název podsložky se vkládá i do názvu komponenty pro lepší vyhledání
- název souboru komponenty však obsahuje jen zbytek názvu třídy
- do jaké podsložky patří komponenta? Rozhodovací strom:

---

--- Jedná se o třídu, která pouze tvoří obal pro nějakou část webu? (např bg + border + padding)
------ ano - WRAP
------ ne - Jedná se o plovoucí okno?
--------- ano - WINDOW
--------- ne - Jedná se věc ohledně formulářů? (prvek obalující inputy, validace..)
------------ ano - FORM
------------ ne - Jedná se o seznam? (výpis parametrů, výpis produktů, galerie obrázků..)
--------------- ano - html struktura je tvořená přes TABLE?
------------------ ano - TABLE
------------------ ne - LIST
--------------- ne - jedná se o blok informací jako celek? (např informace o produktu, položka panelu, drobečkovka..)
------------------ ano - BOX
------------------ ne - je struktura html tvořená přes TABLE, či jejich vnitřních elementů?
--------------------- ano - TABLE
--------------------- ne - IN

## Jednoduše:

- IN = malé drbky (šipka u linku, hvěždičky hodnocení) věci co jsou často někde
- LIST = čistě DL nebo UL, OL
- TABLE = tabulky
- WINDOW -= vyskakovací okna
- FORM = formularove prvky, obaly, struktury
- WRAP = jednoduché obaly, boxy, nezávislé na obsahu
- BOX = ucelené části stránek (např. detail produktu se dá rozdělit na několik boxů - cena, obrazky, galerie, info)

## Grunt.js
- grunt je javascriptový server jedoucí na npm
- pokud chceš, aby se ti při změně ve složkách scripts, templates, styles refreshnul sám prohlížeč, nainstaluj si ho (wiki - http://wiki/index.php/N%C3%A1stroj_Grunt_SS6 )
- jako druhou věc si přenastav baťáky resp. cesty v nich (lze tak jednoduše spouštět watch, generování spritů, či dokumentace)
- pokud nikdo nenastavil popis projektu do package.json, udělej tak
- pro sprite vkládej ikonky do složky img/design/sprite/src, po spustěni baťáku na sprite ti to vyplivne výsledný sprite do složky výše + vygeneruje less soubor do styles/0_core/sprite.less, toto se hodí hlavně a jen na ikonky, které zapisuješ čistě do html jako class="icon icon-nazevsouboru", ne na bg v css - přegenerování může změnit pozici
- dokumentace se generuje ze souborů ve složkách styles/components/.. + 0_core/forms/buttons.less, ta se po spuštění baťáku vygeneruje do složky docs v rootu, NECOMMITOVAT!
- dokumentace se píše do less souboru na začátek do komentáře viz https://www.npmjs.org/package/styledocco
