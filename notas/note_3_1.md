[Home](../README.md) | [Nota Anterior](note_2_3.md) | [Próxima Nota](note_3_2.md)

# Propriedades

Como falamos no [Projeto Tooltip](note_2_3.md), aqui vamos falar um pouco das
propriedades dos objetos, primeiramente vamos criar o nosso HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example 3</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
  </head>
  <body class="container">
    <div id="book"></div>
    <div id="content"></div>
    <script src="script.jsx" type="text/babel"></script>
  </body>
</html>
```

No JSX vamos criar dois objetos, um chamado `Book` e outro chamado `Content` e
vamos descrever algumas propriedades do objeto book:

```jsx
var Book = React.createClass({
  title: "Pro Express.js",
  publisher: "Apress",
  year: 2014
})
```

Definimos aqui que o livro é uma classe de React com três propriedades: `title`,
`publisher` e `year`. Vamos definir o método `render` dentro dele que irá
retornar formatada as propriedades:

```jsx
render: function(){
  return (
    <div>
      <i>{this.title}</i> ({this.publisher}, {this.year})
    </div>
  )
}
```

O método `render` é usado no React para renderização, fizemos o objeto `Book`
retornar as propriedades do objeto referenciando as propriedades ou métodos do
objeto usando o `this` do Javascript. O objeto `Book` ficará dessa forma:

```jsx
var Book = React.createClass({
  title: "Pro Express.js",
  publisher: "Apress",
  year: 2014,
  render: function(){
    return (
      <div>
        <i>{this.title}</i> ({this.publisher}, {this.year})
      </div>
    )
  }
});
```

O outro objeto `Content`, vamos fazer uma representação diferente, usando a
função `getInitialState` do React, que irá inicializar o objeto com aquelas
propriedades. Falaremos mais tarde também de estados, então não precisa se
preocupar, por enquanto.

```jsx
var Content = React.createClass({
  getInitialState: function(){
    return { githubName: 'azat-co' }
  },
  render: function(){
    return <div>{this.state.githubName}</div>
  }
})
```

Apesar do processo de criação é diferente, o resultado é o mesmo, a única
diferença é que referenciamos o valor através de uma propriedade de estado ao
invés de uma propriedade direto do objeto usando `this.state.<propriedade>`.

Por fim, vamos renderizar o objeto `Book` e o `Content` com o código abaixo:

```jsx
ReactDOM.render(
  <Book />,
  document.getElementById('book')
);

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
```

Segue abaixo o código completo do JSX também:

```jsx
var Book = React.createClass({
  title: "Pro Express.js",
  publisher: "Apress",
  year: 2014,
  render: function(){
    return (
      <div>
        <i>{this.title}</i> ({this.publisher}, {this.year})
      </div>
    )
  }
});

var Content = React.createClass({
  getInitialState: function(){
    return {
      githubName: 'azat-co'
    }
  },
  render: function(){
    return <div>{this.state.githubName}</div>
  }
});

ReactDOM.render(
  <Book />,
  document.getElementById('book')
);

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
```
