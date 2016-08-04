# Manipuladores

Falando mais sobre propriedades, elas são imutáveis, ou seja, não sofrem
mudanças e são passada para outros componentes. Sendo assim, nos podemos
ter uma propriedade que é uma função e usá-la como manipulador.

Bom, inicialmente vamos criar nosso html padrão:

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

Agora vamos criar um botão chamado de `ClickCounterButton`, ele não terá um
evento atrelado em `onClick` como o anterior (que colocava um método interno
chamado pela referência `this.click`). Aqui iremos fazer pela chamada.

```jsx
var ClickCounterButton = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.handler}>
        Don't click me {this.props.counter} times!
      </button>
    )
  }
})
```

Aqui faremos algo interessante, ao chamar esse objeto, vamos ter de atribuir o
valor das propriedades `handler` e `counter` com a sitax `name=VALUE`. Vamos
criar outro objeto, esse sim com os métodos que serão chamados:

```jsx
var Content = React.createClass({
  getInitialState: function(){ . . . },
  click: function(e){ . . . },
  render: function() { . . . }
})
```

Vamos definir o `getInitialState` o estado `counter` igual a 0:

```jsx
getInitialState: function(){
  return {counter: 0}
},
```

Já o método `click`, vamos fazê-lo recolher o estado de counter e somar mais 1.

```jsx
click: function(e){
  this.setState({counter: ++this.state.counter})
},
```

Até aqui, já vimos nas anotações anteriores, agora vem a grande questão, a
renderização deve ser como falamos anteriormente, passando as propriedades de
`counter` e `handler`.

```jsx
render: function() {
  return (
    <div>
      <ClickCounterButton counter={this.state.counter} handler={this.click}/>
    </div>
  )
}
```

Não existe nenhuma novidade visual no funcionamento, no entanto, por trás,
retiramos a lógivca do componente e colocamos em um componente pai.

```jsx
var ClickCounterButton = React.createClass({
  render: function() {
    return <button className="btn btn-primary" onClick={this.props.handler}>
      Don't click me {this.props.counter} times!
    </button>
  }
})

var Content = React.createClass({
  getInitialState: function(){
    return {counter: 0}
  },
  click: function(e){
    this.setState({counter: ++this.state.counter})
  },
  render: function() {
    return (
      <div>
        <ClickCounterButton counter={this.state.counter} handler={this.click}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
```

- - -

[Home](../README.md) | [Anterior](note_3_4.md) | [Próxima](note_3_6.md)
