# Itens

Como mudar a ordem de um elemento filho?
  Todos itens tem o valor zero como default
```css
.item1 {
  order: 1;
}
```

Como preencher o espaço restante de um container com os filhos?
```css
/* ocupa 1 porção do espaço */
.item1 {
  flex-grow: 1;
}

/* ocupa 3 porções do espaço */
.item2 {
  flex-grow: 3;
}

/* ocupa 1 porções do espaço */
.item3 {
  flex-grow: 1;
}
```

Como alinhar um elemento filho de acordo com o eixo?
```css
.item1 {
  flex-grow: 1;
  align-self: flex-start;
}
```