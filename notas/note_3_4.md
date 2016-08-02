[Home](../README.md) | [Nota Anterior](note_3_3.md) | [Próxima Nota](note_3_5.md)

# Eventos

O React suporta uma série de eventos, por exemplo, a lista de eventos de mouse
até a versão 0.14.:

-   onClick
-   onContextMenu
-   onDoubleClick
-   onDrag
-   onDragEnd
-   onDragEnter
-   onDragExit
-   onDragLeave
-   onDragOver
-   onDragStart
-   onDrop
-   onMouseDown
-   onMouseEnter
-   onMouseLeave
-   onMouseMove
-   onMouseOut
-   onMouseOver
-   onMouseUp

Uma coisa interessante do React, é que ele é declarativo, não imperativo, isso
quer dizer que não precisamos anexar a função no evento, e sim declarar e
chamá-la no evento, em outras palavras, podemos nomear nossa função com qualquer
nome e fazer apenas a chamada do método.

Bom, vamos aos códigos, primeiro o HTML, adicionei um CSS já conhecido para
ficar mais apresentável.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example 3</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/flatly/bootstrap.min.css" rel="stylesheet" />
  </head>
  <body>
    <div id="content"></div>
    <script src="script.jsx" type="text/babel"></script>
  </body>
</html>
```

Vamos iniciar o objeto `Content` com os métodos `getInitialState` e `render`,
esses, como comentado anteriormente, já possuem papéis bem definidos dentro do
React. Agora, vamos adicionar um método de ação, o chamaremos de `click`, a
estrutura deve ficar muito parecida com essa abaixo:

```jsx
var Content = React.createClass({
  getInitialState: function() { . . . },
  click: function(e) { . . . },
  render: function() { . . . }
})
```

Começando pelo `getInitialState`, vamos definir uma propriedade chamada counter
e iniciar ela no zero, assim como abaixo:

```jsx
getInitialState: function() {
  return {counter: 0}
},
```

Agora vamos definir o nosso método de `click`:

```jsx
click: function(e) {
  this.setState({counter: ++this.state.counter})
},
```

Até aqui não tem nada de especial, inicializamos o objeto com o valor de zero,
e quando houverem chamadas no método `click`, ele adiciona +1 ao contador. O
grande segredo do negócio, é como o método é chamado:

```jsx
render: function() {
  return (
    <div>
      <button className="btn btn-primary" onClick={this.click}>
        Dont click me {this.state.counter} times!
      </button>
    </div>
  )
}
```

Nesse ponto, fazemos referencia direta ao método dentro do objeto na expressão
`onClick={this.click}`, agora ficou fácil entender como é criado esse
comportamento.

Segue o JSX completo:

```jsx
var Content = React.createClass({
  getInitialState: function() {
    return {counter: 0}
  },
  click: function(e) {
    this.setState({counter: ++this.state.counter})
  },
  render: function() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.click}>
          Dont click me {this.state.counter} times!
        </button>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
```
