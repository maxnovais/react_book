# Children

Em certos casos, precisamos que um componente possa ser reutilizado de forma
universal, por exemplo, como renderizar um objeto de postagem de um blog.
Digamos, por exemplo que precisamos de duas postagens:

-   Postagem A:

```html
<div>
  <h1>React.js</h1>
  <p>Rocks</p>
</div>
```

-   Postagem B:

```html
<div>
  <img src="https://facebook.github.io/react/img/logo.svg"/>
</div>
```

São dois componentes diferentes, mas com a mesma base (`<div></div>`), nesse
caso podemos utilizar a propriedade `children` do objeto de React. Inicialmente,
vamos criar o nosso html convencional:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example 4</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/flatly/bootstrap.min.css" rel="stylesheet" />
  </head>
  <body class="container">
    <div id="content"></div>
    <script src="script.jsx" type="text/babel"></script>
  </body>
</html>
```

Após isso, no JSX, vamos criar a base:

```jsx
var Content = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },
});
```

Nesse trecho de código, não há nenhum segredo, criamos um `div` e o conteúdo
desse será o `{this.props.children}`. Mudaremos apenas a forma de chamada no
`render`, conforme abaixo:

```jsx
ReactDOM.render(
  <div>
    <Content>
      <h1>React.js</h1>
      <p>Rocks</p>
    </Content>
    <Content>
      <img src="https://facebook.github.io/react/img/logo.svg"/>
    </Content>
  </div>,
  document.getElementById('content')
);
```

**Observe** que a propriedade `children` retornará uma lista, ou seja, podemos
acessar posições usando `this.props.children[0]`, `this.props.children[1]` (...)
`this.props.children[N]`. Segue abaixo o JSX completo:

```jsx
var Content = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },
});

ReactDOM.render(
  <div>
    <Content>
      <h1>React.js</h1>
      <p>Rocks</p>
    </Content>
    <Content>
      <img src="https://facebook.github.io/react/img/logo.svg"/>
    </Content>
  </div>,
  document.getElementById('content')
);
```

---

[Home](../README.md) | [Anterior](note_4_4.md) | [Próxima Nota](note_4_5.md)
