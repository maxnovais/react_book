[Home](../README.md) | [Nota Anterior](note_3_6.md) | [Próxima Nota]()

# Projeto Timer

Com o que vimos até agora, já dá pra criar um pequeno projeto, esse é bastante
interessante, pois envolve algumas coisas já vistas e algumas coisas novas. É
um pequeno projeto de timer que irá tocar um som ao final do tempo.

Vamos iniciar primeiro com o HTML.

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
  <body class="container-fluid">
    <div id="timer-app"/></div>
    <script src="script.jsx" type="text/babel"></script>
  </body>
</html>
```

A idéia desse projeto, é termos diversos valores que possam ser o tempo de
ínicio, sendo assim, vamos, primeiramente, criar um objeto Timer:

```jsx
var Timer = React.createClass({
  render: function() {
    if (this.props.time == 0) {
      document.getElementById('end-of-time').play()
    }
    if (this.props.time == null || this.props.time == 0) return <div/>
    return <h1>Time left: {this.props.time}</h1>
  }
});
```

Esse objeto fará duas coisas, quando o contador chegar a 0, ele vai tocar uma
mídia definida do objeto pai e quando o valor for `0` ou `null` ele não irá
exibir o contador. Nesse momento também vamos criar um objeto `Button` e deixar
o tempo como uma propriedade, isso fará com que o botão seja reusável.

```jsx
var Button = React.createClass({
  startTimer: function(e) {
    return this.props.startTimer(this.props.time)
  },
  render: function() {
    return(
      <button type="button" className="btn-default btn" onClick={this.startTimer}>
        {this.props.time} seconds
      </button>
    )
  }
})
```

**Observe** que coloquei o objeto integralmente, para explicar melhor como
funciona, na renderização solicitamos a `this.props.time`, ou seja, a chamada do
objeto terá de incluir essa propriedade junto ao handler de `startTimer`. Por
fim, vamos ao último objeto, o `TimerWrapper`.

```jsx
var TimerWrapper = React.createClass({
  getInitialState: function() {
    return {time: null, int: null}
  },
  startTimer: function(time) {
    clearInterval(this.state.int)
    var _this = this
    var int = setInterval(function() {
      console.log('2: Inside of setInterval')
      var tl = _this.state.time - 1
      if (tl == 0) clearInterval(int)
      _this.setState({time: tl})
    }, 1000)
    console.log('1: After setInterval')
    return this.setState({time: time, int: int})
  },

  render: function(){
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer}/>
          <Button time="10" startTimer={this.startTimer}/>
          <Button time="15" startTimer={this.startTimer}/>
        </div>
        <Timer time={this.state.time}/>
        <audio id="end-of-time" src="sound.wav" preload="auto"></audio>
      </div>
    )
  }

})
```

Aqui fica toda a lógica do processo, inicializamos o objeto com as propriedades
de estado `time` e `int` iguais a nulo e definimos um handler chamado
`startTimer`, esse recebendo um valor de `time`.

Primeira coisa que ele vai fazer é limpar o intervalo do estado de `int` no
comando `clearInterval(this.state.int)`, isso é importante, pois se acionarmos
novamente o botão, ele não deve continuar o estado anterior, em seguida salvamos
o contexto do objeto `var _this = this` e definimos `int` uma função
`setInterval` que será executada em 1000 ms. Dentro do `setInterval`:

-   A variável `tl` significa *time left*
-   Subtraí o tempo com `var tl = _this.state.time - 1`
-   Se `tl` for igual a `0`, ele interrompe o intervalo
-   Por fim ele seta o estado de time com `.setState({time: tl})`

No fim da função ele retorna colocando o estado de `time` e `int` criando o
loop finito.

Os comandos [setInterval][0] e [clearInterval][1] não são do React, e podem
ser vistos na documentação oficial da [Mozilla][3]

Segue abaixo o JSX completo:

```jsx
var Timer = React.createClass({
  render: function() {
    if (this.props.time == 0) {
      document.getElementById('end-of-time').play()
    }
    if (this.props.time == null || this.props.time == 0) return <div/>
    return <h1>Time left: {this.props.time}</h1>
  }
});

var TimerWrapper = React.createClass({
  getInitialState: function() {
    return {time: null, int: null}
  },
  startTimer: function(time) {
    clearInterval(this.state.int)
    var _this = this
    var int = setInterval(function() {
      console.log('2: Inside of setInterval')
      var tl = _this.state.time - 1
      if (tl == 0) clearInterval(int)
      _this.setState({time: tl})
    }, 1000)
    console.log('1: After setInterval')
    return this.setState({time: time, int: int})
  },

  render: function(){
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer}/>
          <Button time="10" startTimer={this.startTimer}/>
          <Button time="15" startTimer={this.startTimer}/>
        </div>
        <Timer time={this.state.time}/>
        <audio id="end-of-time" src="sound.wav" preload="auto"></audio>
      </div>
    )
  }

})

var Button = React.createClass({
  startTimer: function() {
    return this.props.startTimer(this.props.time)
  },
  render: function() {
    return(
      <button type="button" className="btn-default btn" onClick={this.startTimer}>
        {this.props.time} seconds
      </button>
    )
  }
})

ReactDOM.render(
  <TimerWrapper/>, document.getElementById('timer-app')
)
```

[0]:https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval
[1]:https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/clearInterval
[3]:https://developer.mozilla.org/en-US/docs/Web/Reference/API
