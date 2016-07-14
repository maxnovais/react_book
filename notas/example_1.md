# 1.3 - First React Code

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://fb.me/react-0.14.2.js"></script>
    <script src="https://fb.me/react-dom-0.14.2.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/javascript">
      ReactDOM.render(
        React.createElement('h1', null, 'Hello world!'),
        document.getElementById('example')
      )
    </script>
  </body>
</html>
```

O código acima resulta na criação do elemento `<h1>` sem nenhum parâmetro com o
valor de `Hello Word!`.
Podemos escrever de outras formas também, com variável, por exemplo.

```javascript
var h1 = React.createElement('h1', null, 'Hello world!')
ReactDOM.render(
  h1,
  document.getElementById('example')
);
```

É importante que o método `ReactDOM.render()` só pode ter apenas um elemento por
vez, no caso acima, o `h1`.
Caso precise renderizar mais de uma vez o mesmo elemento no mesmo level (dois
elementos `h1`), colocaremos em um div, conforme abaixo:

```javascript
var h1 = React.createElement('h1', null, 'Hello world!')
ReactDOM.render(
  React.createElement('div', null, h1, h1),
  document.getElementById('example')
);
```

Podemos instanciar os elementos também como classes isoladas, que nem no exemplo
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
podem ser vistas no site oficial: <https://facebook.github.io/react/docs/tags-and-attributes.html>
