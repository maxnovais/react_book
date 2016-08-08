# Usando Refs

**Refs** é uma referência para pegar o elemento através do React, isso é muito
útil principalmente para coletar valores de formulários. Para usar isso, nós
precisaremos de duas coisas:

    - Renderizar o elemento com o atributo ref utilizando camelCase.
        - `<input ref="userName" />`
    - Acessar com o esse nome em outro método, um handler, talvez.
        - `this.refs.userName`

Como exemplo, vamos fazer uma pequena aplicação que coleta os dados do
formulário e exibe no console, algo bem simples, apenas para ver o que pode ser
feito com isso.

Inicializaremos com nosso HTML:

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

Primeira coisa que iremos fazer é iniciar o objeto de React chamado `Content`,
dentro dele iremos colocar um handler chamado `submit` e o método `render`.

```jsx
var Content = React.createClass({
  submit: function(e) { . . . },
  render: function() { . . . },
  });
```

Vamos trabalhar primeiro na renderização:

```jsx
render: function(){
  return (
    <div className="well">
      <p>Please enter your opinion about this site.</p>
      <div className="form-group">
        Email: <input ref="emailAddess" className="form-control" type="text" placeholder="hi@maxnovais.me" />
      </div>
      <div className="form-group">
        Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
      </div>
      <div className="form-group">
        <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
      </div>
    </div>
  );
},
```

As únicas observações aqui são colocar os atributos `refs` nos dois campos do
formulário e fazer com que o botão `Submit` tenha chame o handler `submit`
através da chamada `this.submit`. Nada que não tenhamos visto nas anotações
anteriores.

Agora vamos ao handler `submit`:

```jsx
var Content = React.createClass({
  submit: function(e) {
    var emailAddess = this.refs.emailAddess;
    var comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  },
```

**Observe** que na versão 14 ou inferior, nós tinhamos como trazer um nó de DOM
através da função `.getDOMNode()`, essa foi deprecada na versão 15, ou  seja,
para chamar, podemos usar tanto a função acima do *ReactDOM*, quanto  trazer a
referência completa `this.refs.NAME` que irá ter o mesmo efeito da função
`.getDOMNode()`.

Após isso, só renderize o objeto `Content`. Segue o JSX completo:

```jsx
var Content = React.createClass({
  submit: function(e) {
    var emailAddess = this.refs.emailAddess;
    var comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  },

  render: function(){
    return (
      <div className="well">
        <p>Please enter your opinion about this site.</p>
        <div className="form-group">
          Email: <input ref="emailAddess" className="form-control" type="text" placeholder="hi@maxnovais.me" />
        </div>
        <div className="form-group">
          Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
        </div>
      </div>
    );
  },
});

ReactDOM.render(
  <Content />, document.getElementById('content')
)
```

- - -

[Home](../README.md) | [Anterior](note_3_7.md) | [Próxima Nota](note_4_2.md)
