# 🚀  HTMLFACTORY starter template

## 👤 Pro klienty
- [ke shlédnutí](https://htmlfactory-template-starter.netlify.com/)
- [ke stažení](https://htmlfactory-template-starter.netlify.com/data.zip) - na tomto odkaze stáhnete produkční a optimalizované soubory (minifikované css, js, komprimováné obrázky apod)
- projekt lze taky snadno stáhnout jako archiv. Stači kliknout na ikonku mráčku (download) vedle "Web IDE". Právě tato stažená verze, popřípadě verze nacházející se zde na gitlabu je vhodnější v případě jakýchkoliv dalších úprav a vývoje.


## 🎧 Pro vyvojáře
Níže najdeš informace jak s projektem zacházet.

### 💻 Dostupné příkazy

**`grunt develop`**

Spustí vyvojářský server. Hlídá soubory, kompiluje a aktualizuje prohlížeč když se něco změní.

**`grunt build`**

Prožene celý projekt různými optimalizacemi a vytvoří složku **public**, která je určená pro vložení do produkce (ostrého webu).


**`grunt debug`**

Vygeneruje public složku a spustí server optimalizovaného webu. Hodí se předevšim při testování a debugování prohlížečů a zařízení.


## 🧐 Co je uvnitř?
Rychlý náhled na soubory , který uvidíte na projektu:

		.
		├── node_modules
		├── dev
		├── .gitignore
		├── LICENSE
		├── package-lock.json
		├── package.json
		├── README.md
		├── public
		├── gruntfile.js
		└── podklady

1. **`/node_modules`**: sloužka, kde se nacházejí všechny moduly a pluginy (npm packages), které používá projekt. Do této složky nikdy nezasahujeme a je generováná automatický.

2. **`/dev`**: složka ve které se nacházejí veškeré soubory, vztahující se k webu, který vidíme v prohlížeči. **Je pro nás nejdůležitější složkou a při vývoji pracujeme pouze s ni.**

3. **`.gitignore`**: soubor, který říká gitu, které soubory má ignorovat.

4. **`LICENSE`**: HTMLFACTORY starter template je pod MIT licenci.

5. **`package-lock.json`**: automatický generováný soubor, který obsahuje informace o použitých modulech (dependency). Do tohoto souboru nikdy nezasahujeme.

6. **`package.json`**: hlavním souborem pro Node.js projekty, který obsahuje informace o názvu projektu, autorovi. Díky němu npm ví, jaké moduly má nainstalovat.

7. **`README.md`**: soubor, který najdeš skoro v každém adresáři. Obsahuje užitečné informace a doporučení.

8. **`/public`**: tato složka je generováná automatický. Obsahuje naše soubory ze složky dev v optimalizované podobě. Automatické spuštění serveru (browsersync) se spouští z této složky. Do této složky bys ručně neměl zasahovat - uprav složku dev, aby se to propsalo do public.

9. **`gruntfile.js`**: soubor obsahujicí veškeré automatizace (hlídání souborů, minifikace, optimalizace). Pro pokročilé uživatele může být rozšiřitelným o další nástroje a automatizace.

10. **`/podklady`**: tato složka je volitelná a jeji obsah je ignorován gitem. Dávám zde jakoukoliv dokumentaci (grafiku, texty apod)


### ❗️ Struktura dev
Pojďme se blíže podívat na strukturu složky dev, protože v ni budeme trávit většinu času.

		.
		└── dev
			├── html-components
			├── images
				└── svg
			└── assets
				├── sass
				├── js
				├── fonts
				└── favicons

1. **[dev](./dev)**: v této složce pracujeme s .html soubory
2. **[html-components](./dev/html-components)**: zde můžeme vytvářet znovupoužitelné html bloky, které potom importujeme
3. **[images](./dev/images)**: zde patří veškeré obrázky použité na webu
4. **[svg](./dev/images/svg)**: zde vkládáme svg soubory, které následně použijeme jako ikonky.
5. **[assets](./dev/assets)**: patří sem soubory, které se vztahuji k vývoji. Jsou to css styly, javascript, lokální fonty, faviconky apod.

Poznámka: v každé složce se nachází vlastní README.md soubor ve kterém najdeš příklad použití. Můžeš to proklikat v odkazech výše.


### Jak to všechno začíná?
Pokud plánuješ začít nový projekt a využit tento project starter, pak doporučený postup je následující:
- vytvoř si nový projekt v GITu ([gitlab](https://gitlab.com/))
- cd cesta/do/noveho/projektu - ujisti se, že tvůj terminál (CMD pro windowsáky) se nachází ve správné složce
- vlož do terminálu (cmd pro win) a stiskni ENTER. Tím se stáhne celý projekt a potom jsi připraven začít s vývojem.
```
git clone git@gitlab.com:html-factory/project-template.git
rm -rf project-template/.git
rsync -vau project-template/ ./
rm -rf project-template
npm install
```


### 🌎 Hurá do světa

Web doporučuji napojit na [Netlify](https://app.netlify.com/start/repos). Netlify je bezplatný hosting pro statické (html) stránky. Je to je dokonalý nástroj pro plně automatizovanou prezentaci tvé práce klientovi. Mezi přednosti této služby patří:
- automatický deploy po pushnutí (= nulová údržba)
- automatická podpora HTTPS & HTTP2
- všechny soubory jsou hostováný na CDN (= je to rychlé)
- je to zdarma! Dokud nepřekročíme určité limity, ale to ty nepřekročíš pokud nemáš několikatisícovou návštěvnost denně
- velmi jednoduché nastavení služby na pár kliknutí



---

Vitalij Petráš @ [HTMLFACTORY](http://www.html-factory.cz/) © 2018
