var Content = React.createClass ({
  getInitialState: function () {
    return {value: ''}
  },

  change: function (e) {
    this.setState({value: e.target.value})
  },

  render: function () {
    return (
      <div>
        <input type='text' onChange={this.change} placeholder='Hello!' ref='textbox' />
        <br />
        <span>{this.state.value}</span>
      </div>
    )
  }
})

ReactDOM.render(
  <Content></Content>,
  document.getElementById('content')
)
