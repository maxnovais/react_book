[Home](../README.md) | [Nota Anterior](note_2_1.md) | [Próxima Nota](note_2_3.md)

# Condicionais em JSX

As condicionais seguem os mesmos padrões do Javascript comum:

```javascript
(condição) ? verdadeiro : falso
`if (condição) verdadeiro else falso
`if (condição) { verdadeiro } else { falso }
```

Vamos fazer com que condicionalmente mostre se o usuário precisa ou não logar ou
deslogar.

```javascript
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

Usaremos, nesse projeto o primeiro e o segundo formato, segue o código completo:

## script.jsx

```javascript
window.isLoggedIn = true
var Menu = React.createClass({
  getLoginLogout: function() {
    if (window.isLoggedIn) return <a href='/logout'>Log out</a>
    else return <a href='/login'>Log in</a>
  },
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
        <div>Status: {window.isLoggedIn ? 'Logged in' : 'Logged out'}</div>
        <div>{this.getLoginLogout()}</div>
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
