Zde vkládáme kusy html nebo php kódu, které následně importujeme do webu.

## Příklad použítí

Vytvoříme zde, v _components_ soubor s názvem `component.html`

```
<div class="component">Ahoj já jsem znovupoužitelná komponenta</div>
```

Tento soubor následně můžeme importovat kdekoliv v našem kódu

```
<!-- @include components/component.html -->
```

## Podmínky nejsou podporovány

Možná hledáte způsob, jak díky podmínkám vkládat stejnou komponentu s různými stavy. Bohužel to nejde. Grunt frontend starter využívá `grunt-preprocess`, jehož hlavní výhodou je jednoduchost použítí. Pokud potřebujete vytvářet podmínky, loopy apod, použijte například .php a váš localhost.
