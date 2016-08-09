# Mixin

*Mixin* são objetos que permitem a reusabilidade de código, Para criar um, é só
usar a sintaxe abaixo:

```jsx
var Mixin = {
  [código compartilhado]
};
```

E chamamos como propriedade de um objeto React como abaixo:

```jsx
var Button = React.createClass({
  mixins: [Mixin]
  ...
});
```

Vamos fazer um exemplo de Mixin abaixo, primeiro html que usamos normalmente:

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

Agora vamos iniciar nosso primeiro Mixin:

```jsx
var RunMixin = {
  getInitialState: function(){
    return {label: 'Run'};
  },

  componentWillMount: function() {
    console.log('component will mount');
  },

  click: function(e) {
    var iframe = document.getElementById('frame').src = 'http://reactjs.com';
  },

  componentDidMount: function(){
    console.log(ReactDOM.findDOMNode(this));
  },
};
```

Nesse trecho de código, vamos destacar as seguintes funções:

**getInitialState**: Já usamos esse método anteriormente, ela compromete em
manter o estado inicial do objeto, ou seja, todos os objetos relacionados a esse
Mixin terão o estado `label` o valor de `Run`.

**ComponentWillMount**: Quando chamamos o componente, esse método é chamado, no
trecho apenas avisamos no console que o objeto vai ser criado.

**click**: Também já vimos lá trás esse handler, associamos eles a alterar a
propriedade `src` do `iframe` que iremos criar em breve.

**componentDidMount**: Esse código é executado após a montagem do componente, ou
seja, retornamos no console qual é o código do DOM.

Os quatro métodos acima serão chamados em qualquer objeto que associarmos o
Mixin, vamos criar outros objetos abaixo:

## Botão

```jsx
var Button = React.createClass({
  mixins: [RunMixin],
  render: function() {
    return <button onClick={this.click}>{this.state.label}</button>
  },
});
```

## Link

```jsx
var Link = React.createClass({
  mixins: [RunMixin],
  render: function(){
    return <a onClick={this.click} href="#">{this.state.label}</a>
  },
});
```  

## Logotipo

```jsx
var Logo = React.createClass({
  mixins: [RunMixin],
  render: function(){
    return <img onClick={this.click} width="40" src="https://facebook.github.io/react/img/logo_og.png" href="#"/>
  },
});
```

Apesar de possuírem caracteristicas diferentes, todos compartilham dos mesmos
trechos de código do *Mixin* e executam as mesmas ações.

-   Determinam o estado de `label` o valor `Run`
-   Avisam que o objeto está sendo criado no console
-   Associa o handler `click`
-   Escreve no console o nó do DOM

Após isso, vamos escrever o conteúdo e renderiza-lo na página junto ao `iframe`.
Segue o jsx completo:

```jsx
var RunMixin = {
  getInitialState: function(){
    return {label: 'Run'};
  },

  componentWillMount: function() {
    console.log('component will mount');
  },

  click: function(e) {
    var iframe = document.getElementById('frame').src = 'http://reactjs.com';
  },

  componentDidMount: function(){
    console.log(ReactDOM.findDOMNode(this));
  },
};

var Button = React.createClass({
  mixins: [RunMixin],
  render: function() {
    return <button onClick={this.click}>{this.state.label}</button>
  },
});

var Link = React.createClass({
  mixins: [RunMixin],
  render: function(){
    return <a onClick={this.click} href="#">{this.state.label}</a>
  },
});

var Logo = React.createClass({
  mixins: [RunMixin],
  render: function(){
    return <img onClick={this.click} width="40" src="https://facebook.github.io/react/img/logo_og.png" href="#"/>
  },
});

var Content = React.createClass({
  render: function() {
    return (
      <div>
        <Button /><br/><br/>
        <Link /><br/><br/>
        <Logo /><br/><br/>
        <iframe id="frame" src=''/>
      </div>
    );
  },
});

ReactDOM.render(<Content />, document.getElementById('content'));
```

---

[Home](../README.md) | [Anterior](note_4_3.md) | [Próxima Nota](note_4_5.md)
