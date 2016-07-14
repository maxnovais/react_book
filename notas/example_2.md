# 2 - JSX

## O que é

JSX é uma extensão do Javascript para ser mais legível e compilado via
transformadores. Lembrando que não é necessário seu uso do React.
Entre os beneficios:

-   O código fica mais legível, compacto
-   Desenvolvedores novatos ou designer podem mexer com mais facilidade
-   Não tem uma curva de aprendizado alta.

## Comparações

Na conversão para JSX, devemos observar alguns pontos importante, por exemplo,
não criaremos mais os elementos via `createElement()`, ao invés disso, criaremos
através de `<>`, assim, o código ficará mais legível, como podemos ver nas
diferenças abaixo.

```javascript
// JS
return React.createElement('div',
  null,
  menus.map(function(v,i){
    return React.createElement('div',
      {key: i},
      React.createElement(Link, {label: v})
    )
  })
)

// JSX
return (
  <div>
    {menus.map(function(v,i){
      return <div key={i}><Link label={v}/></div>
    })}
  </div>
)
```

Eles criam exatamente os mesmos objetos, de maneira diferente. A mesma coisa
ocorre na renderização dos links:

```javascript
// JS
return React.createElement('div',
  null,
  React.createElement('a', {href: url}, this.props.label),
  React.createElement('br')
)

// JSX
return (
  <div>
    <a href={url}>{this.props.label}</a><br/>
  </div>
)
```

## Coversão

Após a tradução do código para JS, os arquivos devem ficar mais ou menos nesse
formato:

### index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example 2</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
  </head>
  <body>
    <div id="menu"></div>
    <script src="script.jsx" type="text/babel"></script>
  </body>
</html>
```

### script.jsx

```javascript
var Menu = React.createClass({
  render: function(){
    var menus = ['Home',
      'About',
      'Services',
      'Portfolio',
      'Contact us']
    return (
      <div>
        {menus.map(function(v,i){
          return <div key={i}><Link label={v}/></div>
        })}
      </div>
    )
}})

var Link = React.createClass({
  render: function () {
    var url='/'
      + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')
    return (
      <div>
        <a href={url}>{this.props.label}</a><br/>
      </div>
    )
  }
})

ReactDOM.render(<Menu />, document.getElementById('menu'))
```

-   [Home](../README.md)
-   [Exemplo Anterior](example_1.md)
