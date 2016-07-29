[Home](../README.md) | [Nota Anterior](note_2_3.md) | [Próxima Nota]()

# Propriedades do React

Vamos partir de um `ìndex.html` comum como abaixo:

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
    <div id="content"></div>
    <script src="script.jsx" type="text/babel"></script>
  </body>
</html>
```

No JSX vamos criar alguns objetos:

```jsx
var Book = React.createClass( { ... })
var Content = React.createClass( { ... })
```

Primeiro vamos descrever algumas propriedades do objeto book:

```jsx
var Book = React.createClass({
  title: "Pro Express.js",
  publisher: "Apress",
  year: 2014
})
```

Definimos aqui que o livro é uma classe de React com três propriedades: `title`,
`publisher` e `year`. Vamos definir mais uma propriedade dentro dele:

```jsx
render: function(){
  return (
    <div>
      <i>{this.title}</i> ({this.publisher}, {this.year})
    </div>
  )
}
```

Essa propriedade e usada no React para renderização, vamos fazer o objeto `Book`
retornar as propriedades préviamente cadastradas, o objeto deve ficar parecido
com esse abaixo

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
propriedades.

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

O processo de criação é bem diferente, mas o resultado é o mesmo. Por fim, vamos
renderizar o objeto `Book` no html com o código abaixo:

```jsx
ReactDOM.render(
  <Book />,
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
  document.getElementById('content')
);
```
