var Content = React.createClass({
  getInitialState: function() {
    return {counter: 0}
  },
  click: function(e) {
    this.setState({counter: ++this.state.counter})
  },
  render: function() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.click}>
          Don't click me {this.state.counter} times!
        </button>
      </div>
    )
  }
})

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
