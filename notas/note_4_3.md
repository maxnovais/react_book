# Tipos e Validação

No React há como validar a entrada de valor da propriedade, se o tipo não
corresponder no modo de desenvolvimento ele o alertará com um erro de *warning*
no console, em produção ele não expoe o erro, falhando silenciosamente. Essa
validação é muito boa para alertar no desenvolvimento da aplicação.

**Observe** que para o React, a versão de produção será considerada aquela
minificada e a versão de desenvolvimento é a nao minificada, sempre.

Vamos exemplificar, primeiro reutilizando o HTML e JSX do exemplo passado:

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

```jsx
var Button  = React.createClass({
  getDefaultProps: function () {
    return {buttonLabel: 'Submit'};
  },
  render: function(){
    return <button>{this.props.buttonLabel}</button>;
  },
});

var Content = React.createClass({
  render: function(){
    return (
      <div>
        <Button buttonLabel="Start" />
        <Button />
        <Button />
        <Button />
      </div>
    );
  },
});

ReactDOM.render(
  <Content />, document.getElementById('content')
);
```

Para validar é só usar a propriedade do objeto `propTypes` com os dados do
objeto que será validado, primeiro vamos colocar a propriedade dentro do objeto
`Button`.

```jsx
var Button  = React.createClass({
  propTypes: { . . . },

  getDefaultProps: function () {
    (...)
```

Agora dentro de `propTypes` vamos colocar uma validação `func.isRequired` na
propriedade `handler`, ou seja, todas as chamadas de `Button` obrigatóriamente
terá que ter um handler, senão receberemos um alerta.

```jsx
propTypes: {
  handler: React.PropTypes.func.isRequired,
},
```

Se nesse momento, você rodar o código, já obterá o warning:
`Warning: Failed propType: Required prop 'handler' was not specified in
'Button'. Check the render method of 'Content'.` no console.

Após isso, vamos determinar que o `title` do objeto possa receber apenas
palavras.

```jsx
propTypes: {
  handler: React.PropTypes.func.isRequired,
  title: React.PropTypes.string,
},
```

Vamos ao objeto `content` colocar um valor no `title` em algum `Button` da
função render, vamos definir um número para isso com o `var number = 1` assim
como abaixo:

```jsx
var Content = React.createClass({
  render: function(){
    var number =1;
    return (
      <div>
        <Button buttonLabel="Start" />
        <Button />
        <Button title={number}/>
        <Button />
      </div>
    );
  },
});
```

Nesse momento, se rodar ele vai aparecer além do erro anterior, também um novo
alerta no console: `Warning: Failed propType: Invalid prop 'title' of type
'number' supplied to 'Button', expected 'string'. Check the render method of
'Content'.`

Agora, vamos definir uma função para que a chamada valide um email, vamos criar
um novo método dentro do `propType` validando uma expressão regular:

```jsx
propTypes: {
  handler: React.PropTypes.func.isRequired,
  title: React.PropTypes.string,
  email: function(props, propName, componentName) {
    var emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!emailRegularExpression.test(props[propName])) {
      return new Error('Email validation failed!');
    };
  },
},
```

Após isso, vamos adicionar mais dois botões dentro do objeto `Content`:

```jsx
var Content = React.createClass({
  render: function(){
    var number =1;
    return (
      <div>
        <Button buttonLabel="Start" />
        <Button />
        <Button title={number}/>
        <Button />
        <Button email="not-a-valid-email"/>
        <Button email="hi@azat.co"/>
      </div>
    );
  },
});
```

Ele deve retornar o erro: `Warning: Failed propType: Email validation failed!
Check the render method of 'Content'.`

Bom, vimos aí três das muitas validações que podemos ter, só em tipos, podemos
contar com essas abaixo:

-   React.PropTypes.string
-   React.PropTypes.number
-   React.PropTypes.bool
-   React.PropTypes.object
-   React.PropTypes.array
-   React.PropTypes.func

E por fim, o JSX completo:

```jsx
var Button  = React.createClass({
  propTypes: {
    handler: React.PropTypes.func.isRequired,
    title: React.PropTypes.string,
    email: function(props, propName, componentName) {
      var emailRegularExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      if (!emailRegularExpression.test(props[propName])) {
        return new Error('Email validation failed!');
      };
    },
  },

  getDefaultProps: function () {
    return {buttonLabel: 'Submit'};
  },

  render: function(){
    return <button>{this.props.buttonLabel}</button>;
  },
});

var Content = React.createClass({
  render: function(){
    var number =1;
    return (
      <div>
        <Button buttonLabel="Start" />
        <Button />
        <Button title={number}/>
        <Button />
        <Button email="not-a-valid-email"/>
        <Button email="hi@azat.co"/>
      </div>
    );
  },
});

ReactDOM.render(
  <Content />, document.getElementById('content')
);
```

---

[Home](../README.md) | [Anterior](note_4_2.md) | [Próxima Nota](note_4_3.md)
