Do této složky vkládáme svg soubory, které poslouží jako ikonky.

## Co si představit pod pojmem "ikonka"

Je to malý obrázek, který chceme ovlivňovat pomoci CSS (většinou barvu ikonky, která se může měnit na různých místech).

## Jak na to

Ikonky ukládáme jako .svg soubory do této složky. Příklad ikonky křízku (✖️)

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
	<path fill="#000000" d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>
</svg>
```

## Vkládáme inline svg s možnosti css editace

- svg kód by měl být čistý a zbaven zbytečného balastu aby nám to nerozbíjelo web. SVG by mělo mít pouze **xmlns** a **viewbox** atributy.
- ze všech objektu musíme odstranit atribut **fill**, popřípadě **stroke**
- odstraněné atributy (fill|stroke) nahradíme atributem **fill="currentColor"** popřípadě **stroke="currentColor"**. Tento atribut nám umožní měnit barvu ikonky pomoci css vlastnosti **color**

Příklad:

```
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
	<path fill="currentColor" d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>
</svg>
```

Následně tuto ikonku můžeme vložit na web kdekoliv:

```
<!-- @include images/svg/nazev-ikonky.svg -->
```

## Co když chci přidat na ikonku class atribut?

V css stylech je komponenta `_icon.scss`, která obsahuje různé velikosti, tyto velikosti si nastav dle potřeby. Následně to implementujeme na web:

```
<span class="icon icon-md" aria-hidden="true"><!-- @include images/svg/nazev-ikonky.svg --></span>
```

Naše css komponenta `.icon` nám umožňuje použítí této třídy jak na obalovací span, tak přímo na samotný svg tag.
