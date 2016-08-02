[Home](../README.md) | [Nota Anterior](note_3_5.md) | [Próxima Nota]()

# Parent

Bom, se você não ficou convencido em usar a lógica fora do componente, vou
mostrar um bom motivo para isso, vamos iniciar com nosso html:

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

Vamos usar o mesmo JSX que usamos no exemplo anterior:

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

Primeira coisa que iremos fazer é retirar o contador do botão:

```jsx
var ClickCounterButton = React.createClass({
  render: function() {
    return <button className="btn btn-primary" onClick={this.props.handler}>
      Don't click me!
    </button>
  }
})
```

E vamos criar um contador separado:

```jsx
var Counter = React.createClass({
  render: function(){
    return <span>Clicked {this.props.value} times.</span>
  }
})
```

Usamos as mesmas premissas da anotação anterior aqui. Agora vamos mudar somente
o `render` do objeto `content` chamando o nosso novo objeto `Counter` passando
a propriedade que era chamada de `counter` como `value`:

```jsx
render: function() {
  return (
      <div>
        <ClickCounterButton handler={this.click}/>
        <br/>
        <Counter value={this.state.counter}/>
      </div>
    )
}
```

Dessa forma, o evento feito no botão terá resultado no valor do contador, que é
basicamente um texto em outro componente, assim, acredito que você já esteja
convencido a usar essa forma de abstração.

Segue o JSX completo:

```jsx
var ClickCounterButton = React.createClass({
  render: function() {
    return <button className="btn btn-primary" onClick={this.props.handler}>
      Don't click me!
    </button>
  }
})

var Counter = React.createClass({
  render: function(){
    return <span>Clicked {this.props.value} times.</span>
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
        <ClickCounterButton handler={this.click}/>
        <br />
        <Counter value={this.state.counter}/>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
```
