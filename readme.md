# 🚀 Frontend starter

Níže najdeš informace jak s projektem zacházet.

### 💻 Dostupné příkazy

**`grunt develop`**

Spustí vyvojářský server. Hlídá soubory, kompiluje a aktualizuje prohlížeč když se něco změní.

**`grunt build`**

Prožene celý projekt různými optimalizacemi a vytvoří složku **dist**, která je určená pro vložení do produkce (ostrého webu).

## 🧐 Struktura projektu

Rychlý náhled na soubory , který uvidíte v projektu:

    	.
    	├── node_modules
    	├── dev
    	├── .gitignore
    	├── LICENSE
    	├── package-lock.json
    	├── package.json
    	├── README.md
    	├── dist
    	├── gruntfile.js
    	└── podklady

1. **`/node_modules`**: sloužka, kde se nacházejí všechny moduly a pluginy (npm packages), které používá projekt. Do této složky nikdy nezasahujeme a je generováná automatický.

2. **`/dev`**: složka ve které se nacházejí veškeré soubory, vztahující se k webu, který vidíme v prohlížeči. **Je pro nás nejdůležitější složkou a při vývoji pracujeme pouze s ni.**

3. **`.gitignore`**: soubor, který říká gitu, které soubory má ignorovat.

4. **`LICENSE`**: Frontend starter je pod MIT licenci.

5. **`package-lock.json`**: automatický generováný soubor, který obsahuje informace o použitých modulech (dependency). Do tohoto souboru nikdy nezasahujeme.

6. **`package.json`**: hlavním souborem pro Node.js projekty, který obsahuje informace o názvu projektu, autorovi. Díky němu npm ví, jaké moduly má nainstalovat.

7. **`README.md`**: soubor, který najdeš skoro v každém adresáři. Obsahuje užitečné informace a doporučení.

8. **`/dist`**: tato složka je generováná automatický. Obsahuje naše soubory ze složky dev v optimalizované podobě. Automatické spuštění serveru (browsersync) se spouští z této složky. Do této složky bys ručně neměl zasahovat - uprav složku dev, aby se to propsalo do dist.

9. **`gruntfile.js`**: soubor obsahujicí veškeré automatizace (hlídání souborů, minifikace, optimalizace). Pro pokročilé uživatele může být rozšiřitelným o další nástroje a automatizace.

10. **`/podklady`**: tato složka je volitelná a jeji obsah je ignorován gitem. Dáváme zde jakoukoliv dokumentaci (grafiku, texty apod)

### ❗️ Struktura dev

Vývoj probíhá výhradně ve složce `dev`, proto se na tuto složku podíváme podrobně.

    	.
    	└── dev
    		├── app
    			└── components
    		├── images
    		└── assets
    			├── icons
    			├── sass
    			├── js
    			├── fonts
    			└── favicons

1. **[dev](./dev)**: kořenový adresář
2. **[dev/app](./dev/app)**: zde pracujeme s .html, popřípadě .php soubory
3. **[dev/app/components](./dev/app/components)**: zde vytváříme znovupoužitelné html bloky,které potom importujeme
4. **[dev/images](./dev/images)**: zde patří veškeré obrázky použité na webu. V budoucnu se tyto obrázky vloží přes použitý CMS admin
5. **[dev/assets](./dev/assets)**: patří sem soubory, které se vztahuji k vývoji. Tyto soubory nelze ovlivnit skrz admin
6. **[dev/assets/icons](./dev/assets/icons)**: svg ikonky, které jsou vloženy inline a mění svou barvu v závislosti na css vlastnosti color
7. **[dev/assets/sass](./dev/assets/sass)**: css styly píšeme v preprocesoru sass
8. **[dev/assets/js](./dev/assets/js)**: náš custom javscript
9. **[dev/assets/fonts](./dev/assets/fonts)**: zde patří lokální fonty vložené přes font-face css vlastnost
10. **[dev/assets/favicons](./dev/assets/favicons)**: vygenerujeme a vložíme zde výsledné faviconky na web

Poznámka: v každé složce se nachází vlastní README.md soubor ve kterém najdeš příklad použití. Doporučuji složky proklikat a o každém si něco přečíst.

---

[© Grunt frontend starter](https://www.html-factory.cz/produkty/frontend-starter/?referrer=produkt-readme)
