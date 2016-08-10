var Jokenpo = React.createClass({
  choices: ['Rock', 'Paper', 'Scissors'],

  getInitialState: function(){
    return {
      answer: '',
    };
  },

  compare: function(answer, opponentAnswer) {
    var choices = this.choices

    if (answer == opponentAnswer) {
      return "Tie";
    };

    var mod = (answer - opponentAnswer) % choices.length;
    console.log(mod)
    if (mod < 0) {
      mod = mod + choices.length
    };

    if (mod < choices.length / 2) {
      return choices[answer] + " wins. You WIN!";
    } else {
      return choices[opponentAnswer] + " wins. You lose.";
    };
  },

  makeMove: function(e) {
    var opponentAnswer = Math.floor(Math.random()*3);
    var answer = e.target.getAttribute('data-answer-index');
    var outcome = this.compare(answer, opponentAnswer);
    this.setState({
      opponentAnswer: opponentAnswer,
      answer: answer,
      outcome: outcome,
    });
  },

  render: function() {
    var choices = this.choices
    return (
      <div className='text-center'>
        <h1>Welcome to Jokenpo!</h1>
        <div className="col-xs-6 col-md-5 col-md-offset-1">
          <h2>Make your move!&nbsp;</h2>
          <div className="btn-group" role="group">
            <button className='btn btn-danger' onClick={this.makeMove} data-answer-index='0'>{choices[0]}</button>
            <button className='btn btn-primary' onClick={this.makeMove} data-answer-index='1'>{choices[1]}</button>
            <button className='btn btn-success' onClick={this.makeMove} data-answer-index='2'>{choices[2]}</button>
          </div>
          <hr/>
          <figure>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/Rock-paper-scissors.svg" width="300"/>
          </figure>
        </div>
        <div className="col-xs-6 col-md-5">
          <div className="well">
            <h2>Result</h2>
            {
              (this.state.answer) ?
              <p>
                You selected {choices[this.state.answer]}.<br/>
                Opponent selected {choices[this.state.opponentAnswer]}. <br/>
                <h3>{this.state.outcome}</h3>
              </p>
                :
              <p>
                Make your move first!
              </p>
            }
          </div>
        </div>
      </div>
    );
  },
});

ReactDOM.render(
  <Jokenpo />,
  document.getElementById('content')
);
