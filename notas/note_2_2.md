[Home](../README.md) | [Nota Anterior](note_2_1.md) | [Próxima Nota](note_2_3.md)

# Condicionais

As condicionais seguem os mesmos padrões do Javascript comum:

```jsx
(condição) ? verdadeiro : falso
`if (condição) verdadeiro else falso
`if (condição) { verdadeiro } else { falso }
```

Vamos fazer com que condicionalmente mostre se o usuário precisa ou não logar ou
deslogar, podemos fazê-lo em três formas, assim como abaixo:

```jsx
// Primeiro formato
<div>Status: {window.isLoggedIn ? 'Logged in' : 'Logged out'}</div>

// Segundo formato
getLoginLogout: function() {
  if (window.isLoggedIn) return <a href='/logout'>Log out</a>
  else return <a href='/login'>Log in</a>
}

// Terceiro formato
loginLogoutLink
if (window.isLoggedIn) {
  loginLogoutLink = <a href="/logout">Log out</a>
} else {
  loginLogoutLink = <a href="/login">Log in</a>
}
```

Usaremos, nesse projeto o primeiro e o segundo formato, vamos utilizar o que já
tinhamos feito na anotação anterior, mas antes, vamos colocar uma linha antes
com:

```jsx
window.isLoggedIn = true
```

Isso é importante para saber se o usuário está logado ou não. (lembrando que
isso é uma página de teste).

Dentro do objeto `Menu`, vamo adicionar um método chamado `getLoginLogout`:

```jsx
getLoginLogout: function() {
  if (window.isLoggedIn) return <a href='/logout'>Log out</a>
  else return <a href='/login'>Log in</a>
},
```

Essa função irá retorna a opção `Login` ou `Logout` de acordo com a propriedade
`window.isLoggedIn`. Continuando no objeto Menu, vamos mudar o método `render`
para incluir o link que acabamos de criar.

```jsx
render: function(){
  var menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us']
  return (
    <div>
      {menus.map(function(v,i){
        return <div key={i}><Link label={v}/></div>
      })}
      <div>Status: {window.isLoggedIn ? 'Logged in' : 'Logged out'}</div>
      <div>{this.getLoginLogout()}</div>
    </div>
  )
}
```

Lembram que iamos utilizar dois jeitos de condicional, bom, a expressão
`<div>Status: {window.isLoggedIn ? 'Logged in' : 'Logged out'}</div>` faz
exatamente a mesma coisa que `getLoginLogout()`, a única diferença é que ele
retornará apenas o texto, ao invés do link que definimos no método.

Por fim, chamamos com o `ReactDOM.render()` o objeto e finalizamos, segue o JSX:

```jsx
window.isLoggedIn = true
var Menu = React.createClass({
  getLoginLogout: function() {
    if (window.isLoggedIn) return <a href='/logout'>Log out</a>
    else return <a href='/login'>Log in</a>
  },
  render: function(){
    var menus = ['Home', 'About', 'Services', 'Portfolio', 'Contact us']
    return (
      <div>
        {menus.map(function(v,i){
          return <div key={i}><Link label={v}/></div>
        })}
        <div>Status: {window.isLoggedIn ? 'Logged in' : 'Logged out'}</div>
        <div>{this.getLoginLogout()}</div>
      </div>
    )
  }
})

var Link = React.createClass({
  render: function () {
    var url='/' + this.props.label.toLowerCase().trim().replace(' ', '-')
    return (<div><a href={url}>{this.props.label}</a><br/></div>)
  }
})

ReactDOM.render(<Menu />, document.getElementById('menu'))
```
