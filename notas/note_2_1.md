[Home](../README.md) | [Nota Anterior](note_1.md) | [Próxima Nota](note_2_2.md)

# 2 - JSX

JSX é uma extensão do Javascript para ser mais legível e compilado via
transformadores. O JSX não é um dos requerimentos do React, mas devido a sua
facilidade de compreensão, vamos utilizar esse formato nos tutoriais.

-   O código fica mais legível, compacto
-   Desenvolvedores novatos ou designer podem mexer com mais facilidade
-   Não tem uma curva de aprendizado alta.

Há um fato relevante aqui, o JSX é transformado em JS comum através de dois
meios, um deles é compilar localmente o JSX através do [Babel via Node](https://www.npmjs.com/package/babel)
e a outra forma é fazer com que o browser transforme isso localmente através
da lib [Babel Core](https://cdnjs.com/libraries/babel-core/).

 Para nossas aplicações, e para diminuir a complexidade delas,  por enquanto,
 não vamos compilar nenhum JS, isso não quer dizer que não precisamos fazer isso
 no futuro. Para aplicações pequenas, o transformador não impacta tanto na
 performance do browser, mas conforme a aplicação for ficando mais robusta, mais
 complexo fica transformar o JSX localmente.

 E também, vamos considerar que não é uma boa prática ter mais uma lib no seu
 html, sendo que você pode diminuir para obter performance.

## Comparações

Na conversão para JSX, devemos observar alguns pontos importante, por exemplo,
não criaremos mais os elementos via `createElement()`, ao invés disso, criaremos
através de `<>`, assim, o código ficará mais legível, como podemos ver nas
diferenças abaixo.

### Javascript
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
```

### JSX
```jsx
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

### Javascript
```javascript
// JS
return React.createElement('div',
  null,
  React.createElement('a', {href: url}, this.props.label),
  React.createElement('br')
)
```

### JSX
```jsx
return (
  <div>
    <a href={url}>{this.props.label}</a><br/>
  </div>
)
```

## Primeiro JSX

Primeiro vamos iniciar com nosso html comum:

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

Até aqui nenhuma novidade, abaixo segue o JSX.

```jsx
var Menu = React.createClass({
  render: function(){
    var menus = ['Home', 'About', 'Services', 'Portfolio','Contact us']
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
    var url='/' + this.props.label.toLowerCase().trim().replace(' ', '-')
    return (<div><a href={url}>{this.props.label}</a><br/></div>)
  }
})

ReactDOM.render(<Menu />, document.getElementById('menu'))
```

Vamos fazer por passo a passo, primeiro, vamos criar dois objetos de React:

```jsx
var Menu = React.createClass({ . . . })
var Link = React.createClass({ . . . })
```

O objeto `link` deve renderizar o hiperlink de acordo com o label passado para
ele, então, teremos um código similar a este:

```jsx
var Link = React.createClass({
  render: function () {
    var url='/' + this.props.label.toLowerCase().trim().replace(' ', '-')
    return (<div><a href={url}>{this.props.label}</a><br/></div>)
  }
})
```

A primeira função do render é criar a variável `url` com uma string válida,
assim primeiramente ele vai pegar a string `/` e juntar com o valor de `label`,
vamos definir o valor de label como `Guarda Chuva `, então, inicialmente vamos
ter `/Guarda Chuva `, o método `toLowerCase()` vai deixar todas as letras
minusculas, ou seja, teremos `/guarda chuva `, após isso o `trim()` irá remover
o espaço o final da linha, ficando somente `/guarda chuva` e por fim usamos o
replace para substituir o espaço por hífen, retornando `/guarda-chuva`.

O retorno é um objeto de link `<a>` com a url que montamos e a propriedade label
que será passada na chamada da função. Após isso, vamos criar o menu:

```jsx
var Menu = React.createClass({
  render: function(){
    var menus = ['Home', 'About', 'Services', 'Portfolio','Contact us']
    return (
      <div>
        {menus.map(function(v,i){
          return <div key={i}><Link label={v}/></div>
        })}
      </div>
    )
}})
```

Novamente, chamamos a propriedade render, criamos um array com os labels do
menu e retornamos o objeto com o método de array `.map()` com uma função que
retorna um `div` com a chamada do objeto `link` passando o `label`, ou seja, o
método `.map()` irá passar em todos os itens do array e criará o menu
dinamicamente.
