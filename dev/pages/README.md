V tomto adresáři pracujeme s .html, popřípadě .php soubory soubory.

Náš devstack nám umožňuje pracovat s .php soubory, ale kód se nepzpracvává! Jakékoliv php funkce jsou zcela ignorovány a soubory jsou vnimáné jako statické html. Použij .php jazyk pouze pokud web implementuješ například na wordpress. V takovém případě náš gruntfile bude kompilovat php soubory jako html a u sebe na lokalhostu přes virtuální server (mamp, wamp apod) přechroustáš php.

**Pozor** ačkoliv soubory se nacházejí v adresáři `pages` kořenová složka je `dev`. Pokud vkládáme obrázky pak je cesta `images/obrazek.jpg`
