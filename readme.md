## Instalace projektu

```npm install```

## Práce s projektem

```grunt```

## PHP2HTML development
Vyvojářská verze webu je realizováná v PHP. Abyste ji rozchodily je nutné mít nainstalovaný *php-cgi*. Instrukce najdete [zde](https://github.com/bezoerb/grunt-php2html)

## !!! Pozor !!!
V GITu je k dispozici vývojařská verze projektu, která se nachází v `dev` složce. Tato verze **není určená** pro produkční web. Pro produkční web prosím použijte příkaz `grunt build`, která se postárá o:
- minifikaci všech textových souborů js, html, css
- kompresi všech obrázků svg, png, jpg
- kompilaci javascriptu do es5 pro podporu starších prohlížečů (IE 10+)
- kompilaci .php souborů do .html souborů
- generaci .htaccess souborů
- a mnoho dalších nastavení, které webu hodně pomůžou v rychlosti načítání a funkčnosti


## Generace souborů pro produkci - **build**
Po instalaci projektu `npm install` je potřeba provést příkaz `grunt build`. Tento buildovací příkaz vygeneruje složku dist, která je připravená pro nahrání na produkční web.

Do kořenového adresáře kde se nachází soubor `gruntfile.js` lze přidat soubor `passwords.js`. 

```
{
  	"tinypng": "your-api-key-here",
}
```

Díky [TinyPNG](https://tinypng.com/) při buildu dochází k kompresi jpg a png obrázků. Tento krok je volittelný, ale doporučuje se ho využit. Tato služba je zdarma do 500 kompresí za měsíc.

---

Vitalij Petráš @ [HTMLFACTORY](http://www.html-factory.cz/) © 2018
