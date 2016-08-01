[Home](../README.md) | Nota Anterior | [Próxima Nota](note_2_1.md)

# 1 - Hello Word

Bom, o react pode ser conseguido de diversas maneiras, tanto pelo NPM, quanto
por repositórios de CDN, eu vou preferir usar um repositório de CDN para
garantir a simplicidade daqui, e isso tem suas desvantagens, pois o código da
lib **React** não será armazenada localmente, e precisará de internet.

Eu preferi usar o [CDNjs](https://cdnjs.com/libraries/react) pra isso, mas
também podemos usar outras fontes, agora vamos criar nossa primeira página:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
  </head>
  <body>
    <div id="example"></div>
  </body>
</html>
```

Isso é uma página padrão, sem nenhum conteúdo, até que acidentalmente
adicionamos o código na mistura:

```html
<script type="text/javascript">
  ReactDOM.render(
    React.createElement('h1', null, 'Hello world!'),
    document.getElementById('example')
  )
</script>
```

O código acima resulta na criação do elemento `<h1>` sem nenhum parâmetro com o
valor de `Hello Word!` dentro do componente chamado `example`. Nisso, podemos
ver algumas coisas legais e ser implementada de outras formas, como a abaixo:

```javascript
var h1 = React.createElement('h1', null, 'Hello world!')
ReactDOM.render(
  h1,
  document.getElementById('example')
);
```

Vale observar a importância de que o método `ReactDOM.render()` tenha apenas um
elemento por vez, e no caso acima, o `h1`.
Caso precise renderizar mais de uma vez o mesmo elemento no mesmo level (dois
elementos `h1`), colocaremos em um div, conforme abaixo:

```javascript
var h1 = React.createElement('h1', null, 'Hello world!')
ReactDOM.render(
  React.createElement('div', null, h1, h1),
  document.getElementById('example')
);
```

Podemos instanciar os elementos também como classes isoladas, como no exemplo
abaixo:

```javascript
var HelloWorld = React.createClass({
  render: function render() {
    return React.createElement('h1', null, 'Hello world!!!');
  }
});
```

E chamaremos a classe, ao invés do render.
**Nota:** Podemos chamar mais de uma vez dentro de um `createElement()`

```javascript
ReactDOM.render(
  React.createElement(
    'div',
    null,
    React.createElement(HelloWorld, null),
    React.createElement(HelloWorld, null),
    React.createElement(HelloWorld, null)
  ),
  document.getElementById('example')
);
```

Existe também uma quantidade muito grande de tags HTML que o react suporta, e
podem ser vistas no [site oficial](https://facebook.github.io/react/docs/tags-and-attributes.html).
