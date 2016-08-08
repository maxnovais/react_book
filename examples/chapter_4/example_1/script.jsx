var Content = React.createClass({
  submit: function(e) {
    var emailAddess = this.refs.emailAddess;
    var comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  },

  render: function(){
    return (
      <div className="well">
        <p>Please enter your opinion about this site.</p>
        <div className="form-group">
          Email: <input ref="emailAddess" className="form-control" type="text" placeholder="hi@maxnovais.me" />
        </div>
        <div className="form-group">
          Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary" value="Submit" onClick={this.submit}>Submit</a>
        </div>
      </div>
    );
  },
});

ReactDOM.render(
  <Content />, document.getElementById('content')
);
