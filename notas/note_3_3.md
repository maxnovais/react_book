[Home](../README.md) | [Nota Anterior](note_3_2.md) | [Próxima Nota](note_3_4)

# Métodos

Simples nota para manter a ordem, mas é um pouco mais do que está descriminado
nas notas anteriores, de como usar um método.

O HTML vai ser o de sempre:

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

No JSX vamos iniciar com o objeto Content junto a duas propriedades, assim:

```jsx
var Content = React.createClass({
  getUrl: function(){ . . . },
  render: function(){ . . . }
})
```

O `getUrl` será um método para retornar a url `http://webapplog.com`:

```jsx
getUrl: function(){
  return 'http://webapplog.com'
},
```

Já o `render` vai ter a obrigação de renderizar o método, observe:

```jsx
render: function() {
  return (
    <div>
      <p>Your REST API URL is: {this.getUrl()}</p>
    </div>
  )
}
```

Nada de novo aqui, é apenas para fixar, segue o JSX completo:

```jsx
var Content = React.createClass({
  getUrl: function(){
    return 'http://webapplog.com'
  },
  render: function() {
    return (
      <div>
        <p>Your REST API URL is: {this.getUrl()}</p>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
```
