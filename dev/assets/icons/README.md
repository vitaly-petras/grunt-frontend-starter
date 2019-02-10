Do této složky vkládáme svg soubory, které poslouží jako ikonky.

## Co si představit pod pojmem "ikonka"

Je to SVG obrázek, který chceme ovlivňovat pomoci CSS (většinou barvu ikonky, která se může měnit na různých místech). Jsme v 21 století a používáme pouze SVG ikonky!

## Pozor

Všechny svg ikonky v této složce jsou komprimovány specifickým nastavením SVGO, které odstraní veškeré barvy v kódu a nahradí popřípadě doplní atribut `fill="currentColor"`. Pokud chceš vložit SVG obrázek s jinými než transparentními barvami využij složku `images`

## Jak na to

1. Ikonky ukládáme jako .svg soubory do této složky
2. SVG kód je automatický optimalizován a doplněn o potřebné atributy
3. Můžeme ikonku vložit kdekoliv v našem html kódu `<!-- @include assets/icons/nazev-ikonky.svg -->`

## Co když chci přidat na ikonku class atribut?

V css stylech je komponenta `_icon.scss`, která obsahuje různé velikosti, tyto velikosti si nastav dle potřeby. Následně to implementujeme na web:

```
<span class="icon icon-md jakakoliv-jina-css-trida" aria-hidden="true">
	<!-- @include assets/icons/nazev-ikonky.svg -->
</span>
```

Naše css komponenta `.icon` nám umožňuje použítí této třídy jak na obalovací span, tak přímo na samotný svg tag.

## Doporučení

Nejspíš to nebude nutné, ale dobrým zvykem je každou ikonku přeuložit z ilustrátoru. Pokud pracuješ např. s programem sketch, tak ten generuje neskutečně prasacký svg kód a může se stát, že ikonka nebude fungovat správně.
