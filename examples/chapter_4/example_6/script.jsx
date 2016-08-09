var choices = ['Rock', 'Paper', 'Scissors'];

var rps ={
  mod: function(a, b) {
      var c = a % b;
      return (c < 0) ? c + b : c;
    },

  compare: function(choice1, choice2, choices) {
    var x = choice1;
    var y = choice2;

    if (x == y) {
      return "Tie";
    };

    if (this.mod((x - y), choices.length) < choices.length / 2) {
      return choices[choice1] + " wins. You WIN!";
    } else {
      return choices[choice2] + " wins. You lose.";
    };
  },
};

var App = React.createClass({
  getInitialState: function(){
    return {
      answer: '',
    };
  },

  makeMove: function(e) {
    var opponentAnswer = Math.floor(Math.random()*3);
    var answer = e.target.getAttribute('data-answer-index');
    var outcome = rps.compare(answer, opponentAnswer, choices);
    this.setState({
      opponentAnswer: opponentAnswer,
      answer: answer,
      outcome: outcome,
    });
  },

  render: function() {
      return (
        <div className='text-center'>
          <h1>Welcome to Jokenpo!</h1>
          <div className="col-xs-6 col-md-5 col-md-offset-1">
            <h2>Make your move!&nbsp;</h2>
            <p>
            <div className="btn-group" role="group">
            <button className='btn btn-success' onClick={this.makeMove} data-answer-index='0'>{choices[0]}</button>
            <button className='btn btn-primary' onClick={this.makeMove} data-answer-index='1'>{choices[1]}</button>
            <button className='btn btn-danger' onClick={this.makeMove} data-answer-index='2'>{choices[2]}</button>
            </div>
            </p>
            <figure>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Rock-paper-scissors.svg" width="300"/>
            </figure>
          </div>
          <div className="col-xs-6 col-md-5">
          {
            (!this.state.answer)? '':
            <div className="well">
              <h2>Result</h2>
              <p>
                You selected {choices[this.state.answer]}.<br/>
                Opponent selected {choices[this.state.opponentAnswer]}. <br/>
                <h3>{this.state.outcome}</h3>
              </p>
            </div>
          }
          </div>
        </div>
      );
    },
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
