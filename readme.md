# 🚀  HTMLFACTORY starter template

## 👤 Pro klienty

### Demo
- [ke shlédnutí](https://htmlfactory-template-starter.netlify.com/)

### Způsoby stažení
- [optimalizovaný archiv](https://htmlfactory-template-starter.netlify.com/data.zip) - produkční a optimalizované soubory (minifikované css, js, komprimováné obrázky apod)
- projekt lze taky snadno stáhnout jako archiv. Stači kliknout na ikonku mráčku (download) vedle "Web IDE". Tyto soubory pravděpodobně nepotřebujete! Nacházejí se zde vývojové soubory a tento způsob stažení budete potřebovat nejspíše pouze pro programátora, který neumí pracovat s GITem.

### V případě dalších úprav na projektu

V případě, že projekt se bude dále upravovat mimo mě (kodéra tohoto projektu), velmi vás prosím aby tyto změny byly provedené v mém vývojovém prostředí. Ideálně v GITu abych i já měl aktuální verzi projektu. V případě neodborného zásahu do kódu dále nenesu žádnou odpovědnost za funkčnost díla.

Máte-li vyvojáře, který vám můj statický kód implementuje na redakční systém, tlačte na něj aby pracoval s GITem.

### Případné připomínky

Pokud k dílu máte jakékoliv připomínky, prosím otevřete `issue` v ticketovacím systému. Tento systém najdete v levém postranním panelu pod záložkou `issues`.

Správně by 1 připomínka měla být v 1 samostatném issue s podrobným popisem. Pokud se jedna o chybu uveďte prosím tyto údaje:
- váš operační systém
- prohlížeč a jeho verze
- [rozlišení obrázovky](https://whatismyresolution.com/) v sekci detailed information
- pokud je to možné přiložte i fotku

Tento způsob připomínkování nám ušetří mnoho času a snadno se v tom všichni zorientujeme. Děkuji!

---
---
---
---

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

10. **`/podklady`**: tato složka je volitelná a jeji obsah je ignorován gitem. Dáváme zde jakoukoliv dokumentaci (grafiku, texty apod)


### ❗️ Struktura dev
Pojďme se blíže podívat na strukturu složky dev, protože v ni budeme trávit většinu času.

		.
		└── dev
			├── pages
				└── components
			├── images
			└── assets
				├── icons
				├── sass
				├── js
				├── fonts
				└── favicons

1. **[dev](./dev)**: kořenový adresář
2. **[dev/pages](./dev/pages)**: zde pracujeme s .html, popřípadě .php soubory
3. **[dev/pages/components](./dev/pages/components)**: zde vytváříme znovupoužitelné html bloky,které potom importujeme
4. **[dev/images](./dev/images)**: zde patří veškeré obrázky použité na webu. V budoucnu se tyto obrázky vloží přes použitý CMS admin
5. **[dev/assets](./dev/assets)**: patří sem soubory, které se vztahuji k vývoji. Tyto soubory nelze ovlivnit skrz admin
6. **[dev/assets/icons](./dev/assets/icons)**: svg ikonky, které jsou vloženy inline a mění svou barvu v závislosti na css vlastnosti color
7. **[dev/assets/sass](./dev/assets/sass)**: css styly píšeme v preprocesoru sass
8. **[dev/assets/js](./dev/assets/js)**: náš custom javscript
9. **[dev/assets/fonts](./dev/assets/fonts)**: zde patří lokální fonty vložené přes font-face css vlastnost
10. **[dev/assets/favicons](./dev/assets/favicons)**: vygenerujeme a vložíme zde výsledné faviconky na web

Poznámka: v každé složce se nachází vlastní README.md soubor ve kterém najdeš příklad použití. Můžeš to proklikat v odkazech výše.


### Jak to všechno začíná?
Pokud plánuješ začít nový projekt a využit tento project starter, pak doporučený postup je následující:
1. vytvoř si nový projekt v GITu ([gitlab](https://gitlab.com/))
2. cd cesta/do/noveho/projektu - ujisti se, že tvůj terminál (CMD pro windowsáky) se nachází ve správné složce
3. vlož do terminálu (cmd pro win) a stiskni ENTER. Tím se stáhne celý projekt a potom jsi připraven začít s vývojem.
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
