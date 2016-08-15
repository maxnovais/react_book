# Componentes não controlados

Um componente não controlado no React significa que a propriedade `value` não é
atribuída através da biblioteca. Por exemplo, o `input` abaixo é um desses
componentes, pois o React não consegue atribuir o `value`.

```jsx
render: function() {
  return <input type="text" />
}
```

Em alguns casos, você pode usar uma propriedade chamada `defaultValue`, conforme
abaixo, isso determinará o valor inicial do input, mas não sua proprieda
`value`.

```jsx
render: function() {
  return <input type="text" defaultValue="JSX" />
}
```

Se você usar algo diferente desse, o valor não irá mudar quando o input for
mostrado. Nesse exemplo vamos fazer algo para capturar o valor e mostrá-lo na
visualização. Primeiramente, iniciamos com o nosso html padrão:

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

Primeiro, vamos criar um objeto chamado `Content` com os métodos
`getInitialState`, `change` e `render`:

```jsx
var Content = React.createClass ({
  getInitialState: function () { . . . },
  change: function (e) { . . . },
  render: function () { . . . }
})
```

**Lembrando** que o `change` é um handler, então ele precisa receber um valor,
que aqui definimos como `e`. primeiro vamos definir o estado inicial:

```jsx
getInitialState: function () {
  return {value: ''}
},
```

Aqui iremos fazer o `render` usando o handler `change` dentro do evento
`onChange`, conforme abaixo:

```jsx
render: function () {
  return (
    <div>
      <input type='text' onChange={this.change} placeholder='Hello!' ref='textbox' />
      <br />
      <span>{this.state.value}</span>
    </div>
  )
}
```

por fim, faremos com que a cada chamada do `change` ele altere o estado `value`
do objeto por aquele que está no formulário:

```jsx
change: function (e) {
  this.setState({value: e.target.value})
},
```

Sendo assim, qualquer alteração que há no `ìnput`, o valor é refletido no estado
do objeto. segue o JSX completo:

```jsx
var Content = React.createClass ({
  getInitialState: function () {
    return {value: ''}
  },

  change: function (e) {
    this.setState({value: e.target.value})
  },

  render: function () {
    return (
      <div>
        <input type='text' onChange={this.change} placeholder='Hello!' ref='textbox' />
        <br />
        <span>{this.state.value}</span>
      </div>
    )
  }
})

ReactDOM.render(
  <Content></Content>,
  document.getElementById('content')
)
```

---

[Home](../README.md) | [Anterior](note_5_1.md) | [Próxima Nota](note_5_2.md)
