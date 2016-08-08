# Propriedade Padrão

No React existe um método chamado `getDefaultProps` que quando é invocado,
coloca ao objeto uma propriedade não atribuida pela chamada do objeto e essa
pode ser chamada pelo `this.props`.

Por exemplo, criamos um botão com a propriedade `buttonLabel` de `Submit`, aí
todas as chamadas de objeto sem o valor de `buttonLabel` voltarão com o valor de
`Submit` por padrão.

Vamos demonstrar isso na prática, primeiro vamos utilizar o HTML:

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

Vamos iniciar nosso JSX com o botão:

```jsx
var Button  = React.createClass({
  getDefaultProps: function () {
    return {buttonLabel: 'Submit'};
  },
  render: function(){
    return <button>{this.props.buttonLabel}</button>;
  },
});
```

Nesse trecho de código do `getDefaultProps` iniciamos o objeto `Button` que tem
a propriedade `buttonLabel` com o valor de `Submit` por padrão. No segundo
trecho, retornamos o objeto colocando como retorno de label a propriedade desse
objeto: `this.props.buttonLabel`

Vamos criar a chamada:

```jsx
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
```

Aqui criamos quatro chamadas, em uma delas colocamos a propriedade `buttonLabel`
com o valor de `Start`, essa diferenciará de todas as outras chamadas. Agora é
só reproduzir o conteúdo no html, segue o JSX completo:

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

- - -

[Home](../README.md) | [Anterior](note_4_1.md) | [Próxima Nota](note_4_2.md)
