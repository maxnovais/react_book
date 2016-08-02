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
