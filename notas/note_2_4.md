[Home](../README.md) | [Nota Anterior](note_2_3.md) | [Próxima Nota](note_3_1.md)

# Compilando JSX

Bom, falamos bastante de Javascript, e mostramos também algumas coisas em JSX
para ser transformado através da ferramenta [Babel][0].

Já falamos da vantagem de usar o JSX, agora, iremos abordar um pouco sobre a
pré-compilação de um JSX, não tem muito segredo aqui, porém, ele tem de ser
feito através do [NodeJS][1], ou seja, instalado através do [NPM][2].

Não vou entrar muito no conceitual, mas para deixar mais claro: NodeJS é uma
plataforma de Javascript e NPM é seu gerenciador de pacotes, então, sugiro que
já tenha [instalado][3] localmente os dois antes de continuar. :)

Primeiramente, vamos abordar o mesmo código do exemplo anterior:

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

Vamos fazer duas alterações aqui:

-   Excluir a linha em que chamamos o babel-core
-   Modificar o script do jsx para: `<script src="script.js"></script>`

**Observe** que retirei o `type="text/babel"` que é explicitamente colocado para
transformar e executar os scripts JSX via navegador.

Agora vamos instalar a ferramenta babel:

```sh
npm install babel@5.8.34
```

E vamos transformar o JSX em Javascript comum com o comando abaixo:

```sh
node node_modules/babel/bin/babel.js examples/chapter_2/example_4/script.jsx -o examples/chapter_2/example_4/script.js -w    
```

Pronto, não tem nenhum segredo, o Javascript já foi compilado e deve estar com
esse código abaixo:

```Javascript
'use strict';

var Tooltip = React.createClass({
  displayName: 'Tooltip',

  getInitialState: function getInitialState() {
    return {
      opacity: false
    };
  },

  toggle: function toggle() {
    var tooltipNode = ReactDOM.findDOMNode(this);
    this.setState({
      opacity: !this.state.opacity,
      top: tooltipNode.offsetTop,
      left: tooltipNode.offsetLeft
    });
  },

  render: function render() {
    var style = {
      zIndex: this.state.opacity ? 1000 : -1000,
      opacity: +this.state.opacity,
      top: (this.state.top || 0) + 20,
      left: (this.state.left || 0) - 30
    };
    return React.createElement(
      'div',
      { style: { display: 'inline' } },
      React.createElement(
        'span',
        { style: { color: 'blue' }, onMouseEnter: this.toggle, onMouseOut: this.toggle },
        this.props.children
      ),
      React.createElement(
        'div',
        { className: 'tooltip bottom', style: style, role: 'tooltip' },
        React.createElement('div', { className: 'tooltip-arrow' }),
        React.createElement(
          'div',
          { className: 'tooltip-inner' },
          this.props.text
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(
    Tooltip,
    { text: 'Master Express.js-The Node.js Framework For Your Web Development' },
    'Pro Express.js'
  ),
  ' was published in 2014. It was one of the first books on v4.x. And it was my second book published with Apress after ',
  React.createElement(
    Tooltip,
    { text: 'Practical Node.js: Building Real-World Scalable Web Apps' },
    'Practical Node.js'
  ),
  '. ... The main focus of this post is to compare the four Node.js/Io.js frameworks: ',
  React.createElement(
    Tooltip,
    { text: 'HTTP API server' },
    'Hapi'
  ),
  ', ',
  React.createElement(
    Tooltip,
    { text: 'Release the Kraken!' },
    'Kraken'
  ),
  ', ',
  React.createElement(
    Tooltip,
    { text: 'Sail away' },
    'Sails.js'
  ),
  ' and ',
  React.createElement(
    Tooltip,
    { text: 'IBM of frameworks' },
    'Loopback'
  ),
  '. There are many other frameworks to consider, but I had to draw the line somewhere.'
), document.getElementById('tooltip'));
```

[0]:https://babeljs.io/
[1]:https://nodejs.org/en/
[2]:https://www.npmjs.com/
[3]:https://nodejs.org/en/download/
