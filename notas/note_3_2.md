[Home](../README.md) | [Nota Anterior](note_3_1.md) | [Próxima Nota]()

# Estados

O estado do objeto pode ser passado no array de criação do objeto. Um exemplo
simples seria o abaixo:

```jsx
var Content = React.createClass({
  getInitialState: function(){
    return {
      Name: 'max',
      Animals: [
        'cat',
        'dog',
        'fish'
      ]
    }
  }
})
```

Aqui temos um objeto que na primeira chamada ele coloca o estado inicial com o
que está declarado dentro do método `getInitialState`. O estado pode ser
alterado a qualquer momento com o método `setState`. Nos passos abaixo, iremos
fazer uma pequena aplicação que atualiza o estado a cada 800 milisegundos e
atualiza na visualização também.

Vamos, inicialmente, criar o HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example 3</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
  </head>
  <body>
    <div id="content"></div>
    <script src="script.jsx" type="text/babel"></script>
  </body>
</html>
```

Vamos criar o objeto:

```jsx
var Content = React.createClass({ . . . })
```

Dentro desse objeto, teremos dois métodos iniciais, o `getInitialState` e o
`render`.

```jsx
var Content = React.createClass({
  getInitialState: function(){},
  render: function(){}
})
```

O `getInitialState` é onde irá acontecer toda mágica instanciando a `this` e
usando a função `setInterval`, faremos com que o número mude randomicamente.

```jsx
getInitialState: function(){
  var _this = this
  setInterval(function(){
    _this.setState({hash: Math.random()})
  }, 800)
  return {hash: 0}
},
```

**Observe** que atribuimos uma variavel `_this` com o valor do objeto (`this`),
isso ocorre, pois em determinados momentos, chamar o `this` dentro de uma função
você pode estar se referindo direto a função, e não ao objeto, então, sempre
atribuímos a uma variável antes de adentrar a uma função.

Com o valor referenciado, determinamos a função `setInterval` ser chamada a
cada 800 milisegundos, e nessa chamada chamamos o método do objeto `setState`
passando no dicionário a chave `hash` e o valor randômico da função
`Math.random()`, por fim, retornamos o valor inicial da função.

Basicamente, essa expressão irá trazer o valor zero de ínicio e depois a cada
800 milisegundos atualizará o número por um valor randômico. Na outra função, o
render só irá renderizar o objeto completo, e a chave `hash`

```jsx
render: function() {
  return (
    <div>
      <h1>Changing the State</h1>
      <p>This value is random: {this.state.hash}</p>
    </div>
  )
}
```

Sem muitos segredos aqui, por último, vamos renderizar o objeto com `ReactDOM`.
Segue o JSX completo abaixo:

```jsx
var Content = React.createClass({
  getInitialState: function(){
    var _this = this
    setInterval(function(){
      _this.setState({hash: Math.random()})
    }, 800)
    return {hash: 0}
  },
  render: function() {
    return (
      <div>
        <h1>Changing the State</h1>
        <p>This value is random: {this.state.hash}</p>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
)
```
