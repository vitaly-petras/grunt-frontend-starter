Do této složky vkládáme svg soubory, které poslouží jako ikonky.

## Co si představit pod pojmem "ikonka"

Je to SVG obrázek, který chceme ovlivňovat pomoci CSS (většinou barvu ikonky, která se může měnit na různých místech). Jsme v 21 století a používáme pouze SVG ikonky!

## Pozor

Všechny svg ikonky v této složce jsou komprimovány specifickým nastavením SVGO, které odstraní veškeré barvy v kódu a nahradí popřípadě doplní atribut `fill="currentColor"`. Jinými slovy, ikonky by měly mít vždy 1 barvu! Pokud chceš vložit SVG obrázek s jinými než transparentními nebo více barvami využij složku `images`.

## Jak na to

1. Ikonky ukládáme jako .svg soubory do této složky
2. SVG kód je automatický optimalizován a doplněn o potřebné atributy
3. Můžeme ikonku vložit kdekoliv:

```
<svg class="icon">
	<use xlink:href="assets/icons.svg#nazev-souboru"></use>
</svg>
```

## Doporučení

Nejspíš to nebude nutné, ale dobrým zvykem je každou ikonku přeuložit v ilustrátoru. Pokud pracuješ např. s programem sketch, tak ten generuje neskutečně prasacký svg kód a může se stát, že ikonka nebude fungovat správně. Je proto vždy lepší ikonku v ilustrátoru otevřít, úpravit do vhodného formátu a vložit do složky. Ikonky by neměli obsahovat gradienty.
