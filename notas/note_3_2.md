[Home](../README.md) | [Nota Anterior](note_3_1.md) | [Próxima Nota](note_3_3.md)

# Estados

O React trabalha bastante com estado de objetos, para exemplificar, vamos fazer
um objeto que tenha meu nome e quais animais eu gosto em um array. Vamos definir
que esse é o estado inicial, já que posso gostar de mais animais conforme o
tempo, ou até mesmo, passar a não gostar de outros. Sendo assim, vamos criar o
objeto abaixo:

```jsx
var Me = React.createClass({
  getInitialState: function(){
    return {
      Name: 'Max',
      Animals: ['cat', 'dog','fish']
    }
  }
})
```

Aqui temos um objeto que na primeira chamada ele coloca o estado inicial com o
que está declarado dentro do método `getInitialState`. O estado pode ser
alterado a qualquer momento com o método `setState`.

Nos passos abaixo, iremos fazer uma pequena aplicação que atualiza o estado a
cada 800 milisegundos e renderiza na página. Vamos criar o HTML primeiro.

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

Vamos criar um objeto `Content` com dois métodos, `getInitialState` e `render`:

```jsx
var Content = React.createClass({
  getInitialState: function(){ . . . },
  render: function(){ . . . }
})
```

Vamos detalhar abaixo o que cada método irá fazer.

```jsx
getInitialState: function(){
  var _this = this
  setInterval(function(){
    _this.setState({hash: Math.random()})
  }, 800)
  return {hash: 0}
},
```

Observe que atribuimos uma variavel `_this` com o valor do objeto (`this`),
isso ocorre, pois em determinados momentos, chamar o `this` dentro de um método
você pode estar se referindo ao método, e não ao objeto, então, é bom  
atribuirmos a uma variável antes de adentrar no método.

Com o valor referenciado, determinamos a função `setInterval` ser chamada a
cada 800 milisegundos, e nessa chamada chamamos o método do objeto `setState`
passando no objeto a `hash` e atribuindo o valor randômico da função
`Math.random()`. Por fim, retornamos o valor inicial, que será 0.

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
