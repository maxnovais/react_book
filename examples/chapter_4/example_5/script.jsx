var Content = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  },
});

ReactDOM.render(
  <div>
    <Content>
      <h1>React.js</h1>
      <p>Rocks</p>
    </Content>
    <Content>
      <img src="https://facebook.github.io/react/img/logo.svg"/>
    </Content>
  </div>,
  document.getElementById('content')
);
