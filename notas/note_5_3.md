# Componentes controlados

Para o React, componentes controlados, são aqueles que é possível atribuir valor
a propriedade `value`. Isso é um tanto simples, bonito e discreto para o
usuário, no entanto, vale observar que ele trabalha com estados para poder
ajustar isso.

Por exemplo, se criarmos o seguinte input `<input type="text" value='123456'/>`
o valor dele não será alterado não importa o que digitarmos, pois anexamos a
propriedade `value` um valor estático.

Para poder trabalhar melhor isso, anexamos o value ao estado
(`this.state.value`), e isso ficará mais fácil de trabalhar.

Primeiro, vamos criar nosso HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example 5</title>
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

Dessa vez, o objeto `Content` terá três métodos, `getInitialState`, `change` e
`render`, no primeiro só vamos atribuir para que o estado de `value` retorne uma
string vazia:

```jsx
getInitialState: function(){
  return {value: ''}
},
```

Agora, vamos fazer com que o handler `change` coloque no estado o `value`
removendo valores que não são números:

```jsx
change: function(e) {
  this.setState({value: e.target.value.replace(/\D/g, '')})
},
```

Por fim, o `render` do formulário:

```jsx
render: function() {
  return (
    <div>
      Account Number: <input type="text" onChange={this.change} placeholder="123456" value={this.state.value}/>
      <br/>
      <span>{this.state.value.length > 0 ? 'You entered: ' + this.state.value: ''}</span>
    </div>
  )
}
```

**Observe** que é atribuído a propriedade `value` o estado e não um valor
estático, por isso, a qualquer mudança no input, o valor sofre alteração também.

Segue, o JSX completo:

```jsx
var Content = React.createClass({
  getInitialState: function(){
    return {value: ''}
  },
  change: function(e) {
    this.setState({value: e.target.value.replace(/\D/g, '')})
  },
  render: function() {
    return (
      <div>
        Account Number: <input type="text" onChange={this.change} placeholder="123456" value={this.state.value}/>
        <br/>
        <span>{this.state.value.length > 0 ? 'You entered: ' + this.state.value: ''}</span>
      </div>
    )
  }
})

ReactDOM.render(
  <Content></Content>,
  document.getElementById('content')
);
```

---

[Home](../README.md) | [Anterior](note_5_2.md) | [Próxima Nota](note_5_3.md)
