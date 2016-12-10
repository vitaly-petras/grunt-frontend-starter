Jak správně ukládat SVG ikonky pro použití bez komplikací:


--------------------------- 1) Velikost ikonky ---------------------------
Vždy nastavujeme ikonce velikost dle PSD souboru, tedy skutečnou velikost ikonky, kterou máme v návrhu.


--------------------------- 2) Velikost plátna ---------------------------
SVG ikonky jsou specifické v tom, že mají desetinné místa - to nesmíme dopustit, protože většina prohlížečů desetinné PX nepodporuje.
Abychom to napravili, je nutno postupovat takto: 
a) soubor -> nastavení dokumentu -> upravit kreslící plátna -> ENTER -> přizpůsobit hranicím kresby
b) šířku a výšku pak zaokrouhlíme VŽDY na celé číslo nahoru 
(např. velikost 3.125 x 6.0005 zaokrouhlíme na 4 x 7)


--------------------------- 3) Uložení ikonky ---------------------------
CMD + SHIFT + S = uložit jako SVG

Nejdůležitější atributy pro generování Grunticon uvádím takto (!!!)

Profily SVG: 								SVG 1.1
Text: 										SVG
Podmnožiny:									žádné (použit systémová písma)
Umístění obrazů:							Připojit
Vlastnosti CSS:								Prezentační atributy	(!!!)
Vytvořit méně elementů <tspan>:				Ano
Použit element <textPath>...:				Ano
Responzivní:								NE	(!!!)
Zahrnout data rozdělení na řezy:			NE
Zahrnout XMP:								NE

Toto uložení si pamatuje poslední změny, stačí to nastavit jednou a pak už by to mělo fungovat samo.