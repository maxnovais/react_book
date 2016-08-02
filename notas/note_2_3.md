[Home](../README.md) | [Nota Anterior](note_2_2.md) | [Próxima Nota](note_3_1.md)

# Projeto Tooltip

Nessa anotação, vamos fazer um pequeno projeto de front-end usando algumas
ferramentas legais junto com o React. Primeiro, vamos criar no HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example 2</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/flatly/bootstrap.min.css" rel="stylesheet" />
  </head>
    <body class="container">
      <h1>Tooltip Widget</h1>
      <div id="tooltip"></div>
      <script src="script.jsx" type="text/babel"></script>
    </body>
  </html>
```

Como sugestão, usamos o tema de [Bootswatch](https://bootswatch.com/) chamado
[Flatly](https://bootswatch.com/flatly/), e criaremos um div com o id de
`tooltip`. Inicializaremos o JSX com um objeto e colocaremos alguns métodos
dentro:

```jsx
var Tooltip = React.createClass({
  getInitialState: function() { ... }
  toggle: function() { ... }
  render: function() { ... }
});
```

A idéia é que a função `getInitialState` retorne a opacidade inicial `false`, ou
seja `0` - invísivel. O `toggle` faz o papel de alterar o estado de `false` para
`true`, sendo assim, retorna `1` - visível. Por fim, temos o 'render' que irá
cuidar da renderização dos objetos `Tooltip` na página.

Vamos detalhar cada um deles.

```jsx
getInitialState: function() {
  return { opacity: false }
},
```

Aqui não tem nenhum segredo, coloca o estado inicial do objeto com opacidade em
`false`.

```jsx
toggle: function() {
  var tooltipNode = ReactDOM.findDOMNode(this)
  this.setState({
    opacity: !this.state.opacity,
    top: tooltipNode.offsetTop,
    left: tooltipNode.offsetLeft
  })
},
```

Aqui é onde a mágica acontece, inicialmente buscamos o DOM a ser manipulado com
a função `ReactDOM.findDOMNode()`, como o parametro de busca é o `this`, ele
retorna o próprio objeto de HTML. Depois só mudamos sua seu status com
`.setState()` colocando a opacidade ao contrário do que estava inicialmente,
já as propriedades `top` e `left` vem do próprio objeto manipulado.

Vamos falar mais tarde sobre `.setState()`, então, por enquanto não precisa se
preocupar sobre isso.

```jsx
render: function() {
    var style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top||0) + 20,
      left: (this.state.left||0) -30
    }
    return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'blue'}} onMouseEnter={this.toggle} onMouseOut={this.toggle}>
          {this.props.children}
        </span>
        <div className="tooltip bottom" style={style} role="tooltip">
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">
          {this.props.text}
        </div>
      </div>
    </div>
  )
}
```

Essa última, ela renderiza o estilo usado no objeto `style`, que além da sua
opacidade, ele trabalha com os `z-index` do CSS, e quando o valor for verdadeiro
o objeto vai sobrepor todos os outros e o contrário ele não vai sobrepor nenhum
objeto.

A função retorna um `div` renderizado na linha `{{display: 'inline'}}` com um
`span` com a propriedade `children`, tem as funções `onMouseEnter={this.toggle}`
e `onMouseOut={this.toggle}`.
Depois disso o objeto `style` é passado na div principal e a propriedade text é
chamada, sendo assim, a criação de um objeto desse, precisa do parâmetro `text`,
além do `children`, e ficaria mais ou menos assim:
`<Tooltip text="Hint">Example</Tooltip>`.

Também não vamos adentrar nos eventos, falaremos sobre isso mais tarde também.
O último passo é renderizar com o código abaixo:

```jsx
ReactDOM.render(<div>
  <Tooltip text="Master Express.js-The Node.js Framework For Your Web Development">Pro Express.js</Tooltip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
    after <Tooltip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</Tooltip>.
    ...
    The main focus of this post is to compare the four Node.js/Io.js frameworks: <Tooltip text="HTTP API server">Hapi</Tooltip>, <Tooltip text="Release the Kraken!">Kraken</Tooltip>, <Tooltip text="Sail away">Sails.js</Tooltip> and <Tooltip text="IBM of frameworks">Loopback</Tooltip>. There are many other frameworks to consider, but I had to draw the line somewhere.
  </div>,
  document.getElementById('tooltip'))
```

O código completo do JSX será:

```jsx
var Tooltip = React.createClass({
  getInitialState: function() {
    return {
      opacity: false
    }
  },

  toggle: function() {
    var tooltipNode = ReactDOM.findDOMNode(this)
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    })
  },

  render: function() {
    var style = {
      zIndex: (this.state.opacity) ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top||0) + 20,
      left: (this.state.left||0) -30
    }
    return (
      <div style={{display: 'inline'}}>
        <span style={{color: 'blue'}} onMouseEnter={this.toggle} onMouseOut={this.toggle}>
          {this.props.children}
        </span>
        <div className="tooltip bottom" style={style} role="tooltip">
        <div className="tooltip-arrow"></div>
        <div className="tooltip-inner">
          {this.props.text}
        </div>
      </div>
    </div>
  )
}
});

ReactDOM.render(<div>
  <Tooltip text="Master Express.js-The Node.js Framework For Your Web Development">Pro Express.js</Tooltip> was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress
    after <Tooltip text="Practical Node.js: Building Real-World Scalable Web Apps">Practical Node.js</Tooltip>.
    ...
    The main focus of this post is to compare the four Node.js/Io.js frameworks: <Tooltip text="HTTP API server">Hapi</Tooltip>, <Tooltip text="Release the Kraken!">Kraken</Tooltip>, <Tooltip text="Sail away">Sails.js</Tooltip> and <Tooltip text="IBM of frameworks">Loopback</Tooltip>. There are many other frameworks to consider, but I had to draw the line somewhere.
  </div>,
  document.getElementById('tooltip'))
```
