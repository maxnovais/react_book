# Projeto Jokenpo

Bom, nessa parte, vamos fazer um pequeno projeto de um jogo "Jokenpo" - Pedra,
Papel e Tesoura para os mais acostumados. Diferente do livro [React Quickly][0],
usaremos apenas React e Javascript, não teremos histórico e não utilizaremos
nada de Back-End, inclusive, considero um pouco diferente essa parte, pois só
mantive as lógicas e fluxos que não utilizam a persistência de dados.

Bom, primeiramente vamos começar criando o nosso HTML padrão:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example 4</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.2/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.6/flatly/bootstrap.min.css" rel="stylesheet" />
  </head>
  <body class="container">
    <div id="content"></div>
    <script src="script.jsx" type="text/babel"></script>
  </body>
</html>
```

Vamos criar agora o JSX com a aplicação completa, primeiro, vamos criar um
objeto de *React* chamado de Jokenpo e vamos definir as propriedades e métodos
do objeto, assim como abaixo:

```jsx
var Jokenpo = React.createClass({
  choices: ['Rock', 'Paper', 'Scissors'],
  getInitialState: function(){ . . . },
  compare: function(answer, opponentAnswer) { . . . },
  makeMove: function(e) { . . . },
  render: function() { . . . },
});
```

-   **choices**: As opções disponíveis, em um array.
-   **getInitialState**: Definição do estado inicial da app - [*cap. 3_2*][1].
-   **compare**: A lógica de comparação ficará nesse bloco.
-   **makeMove**: Esse será o handler da app - [*cap. 3_5*][2].
-   **render**: E por fim a renderização da app.

Como a `choices` já está preenchida, vamos a `getInitialState`:

```jsx
getInitialState: function(){
  return {
    answer: '',
  };
},
```

Aqui só definimos que não há ainda `answer`, para garantir que a `div` de
resultados não seja exibida antes do usuário selecionar uma opção, observaremos
isso mais pra frente no método de `render`. A próxima lógica é do objeto
`compare`:

```jsx
compare: function(answer, opponentAnswer) {
  var choices = this.choices

  if (answer == opponentAnswer) {
    return "Tie";
  };

  var mod = (answer - opponentAnswer) % choices.length;
  if (mod < 0) {
    mod = mod + choices.length
  };

  if (mod < choices.length / 2) {
    return choices[answer] + " wins. You WIN!";
  } else {
    return choices[opponentAnswer] + " wins. You lose.";
  };
},
```

Bom, aqui é a lógica mais complicada da aplicação, no primeiro `if` validamos se
as opções são iguais e retornamos um empate. Como a entrada sempre será números
faremos alguns cálculos para definir quem é o vencedor.

Podemos ter 3 números de entrada do usuário e da máquina `[0, 1, 2]`, essas
opções equivalem as mesmas de `choices`. Primeiramente definimos a divisão
modular das entradas e a quantidade de opções no
(`var mod = (answer - opponentAnswer) % choices.length`) e caso o valor dessa
seja negativo, vamos alterar o valor de `mod` somando o a quantidade de opções
(`mod = mod + choices.length`) e por fim, vamos ver se o valor de `mod` é menor
que a quantidade de opções dividido por dois para poder definir o vencedor.

Um exemplo de valores:

-   Usuário: 0
-   Máquina: 2

Primeiro faremos o calculo de `mod` - `(0 - 2) % 3` esse resultará em `-2`,
agora validamos se esse é menor que número de opções divido por 2 - `3 / 2`, ou
seja, ele retorna verdadeiro e como consequencia o usuário é vencedor.

O próximo passo é o *handler* `makeMove`:

```jsx
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
```

Por se tratar de um handler, ele recebe o valor de `e`, primeiro definimos um
valor randomico multiplicado `Math.random()` multiplicado por 3 e depois retorna
seu valor inteiro com a função `Math.floor()`, ou seja, a expressão
`Math.floor(Math.random()*3)` tem essa finalidade.

Coletamos também o atributo do DOM `e.target.getAttribute('data-answer-index')`
e atribuímos a `answer`, após isso usamos o método `compare()` e atribuímos ao
`outcome`, por fim, colocamos tudo isso em um estado com `.setState()`.

Depois disso tudo pronto (ufa!), agora vem a renderização:

```jsx
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
```

Primeiro vamos definir choices como `this.choices`, e agora teremos algumas
coisas para observar nos DOMs de `button`, como o handler dos botões em ações
`onClick`, nesse colocaremos o handler `this.makeMove` e o atributo
`data-answer-index` que dará o valor da opção conforme o index do array
`choices`, que é `[0, 1, 2]` e por fim a visualização de `choices[n]`.

O `data-answer-index` é o que coletamos no handler `makeMove` e colocamos ele
no estado como `answer` junto com `opponentAnswer` e `outcome`. E em uma parte
desse código, vamos validar se existe alguma coisa em `answer`, na expressão
`(this.state.answer)? [...]`, caso houver, iremos renderizar a parte de
resultados no bloco de código como abaixo:

```jsx
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
```

Essa parte não tem nenhum segredo que já não vimos nesse projeto, ele só pega
a posição de `choices` de acordo com o estado `this.state` e renderiza os
valores amigáveis. Segue, enfim, o JSX completo:

```jsx
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
```

---

[Home](../README.md) | [Anterior](note_4_5.md) | [Próxima Nota](note_4_6.md)

[0]:https://www.manning.com/books/react-quickly
[1]:note_3_2.md
[2]:note_3_5.md
