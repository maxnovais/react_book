# Formulários no React

Aqui, nesse sentido não tem muito o que dizer, estamos tratando de elementos
como `input`, `textarea` e `option`. Felizmente o React ajuda nesse quesito para
que as coisas sejam mais faceis de criar e manter. Lidar com os formulários
talvez precise de mais teoria do que prática, uma vez que tudo que já fizemos
até agora só seria reutilizado.

Nos elementos de formulário, o React dá suporte para três eventos:

-   onChange
-   onInput
-   onSubmit

E esse eventos podemos determinar tanto para um elemento do formulário, quanto
para todo formulário, usando algo como `<form onChange={this.validate}>` além
disso, pode também determinar alguns padrões para eventos de formulários. É bem
comum usar o comando `sendData()` para enviar dados sem a necessidade de clicar
em um botão.

O exemplo abaixo é um caso:

```jsx
keyup: function (e) {
  if (e.keyCode == 13) return this.sendData()
}
```

Ou seja, todas as vezes que a tecla de número 13 (Enter) for usada, ele irá
enviar o formulário, basta chamar o form com esse handler:
`<form onKeyUp={this.keyup}>`.

## Elementos do formulário

Com elementos dos formulários, também conseguimos determinar propriedades
mutáveis, ou seja, podemos interagir com as propriedades de cada elemento de
forma separada, podemos usar os exemplos abaixo:

-   `value` para `<input>` e `<textarea>`
-   `checked` para `<input>` com `type="checkbox"` e `type="radio"`
-   `selected` para `<option>`

Geralmente `<textarea>` usar o valor dentro da tag HTML, no React nós usamos
dentro da propriedade `value`, como abaixo:

```jsx
<textarea name="description1" value={"Pro Express.js is for the reader\n
    who wants to quickly get up-to-
    speed with Express.js, \nthe flexible Node.js framework\n "} />
<textarea name="description2" value={this.state.description}/>
```

**Observe** que você pode utilizar a quebra de linha dentro do Javascript usando
o valor `\n` e se precisar no código usar outra linha, pode usar a construção
`value={" . . . "}`, ou simplesmente, você pode usar apenas o estado do objeto,
conforme o textarea `description2`.

O elemento `<select>` é outro que tem um comportamento diferente comparado com
o HTML comum. Por exemplo o código abaixo:

```jsx
<select multiple={true} value={['meteor', 'react']}>
  <option value="meteor">Meteor</option>
  <option value="react">React</option>
  <option value="jQuery">jQuery</option>
</select>
```

Nesse caso, tratamos de um select que pode ter vários valores selecionados,
principalmente por constar `multiple={true}`.

A melhor maneira de capturar as mudanças de um elemento é através do `onChange`,
que para `<input>` e `<textarea>` será considerado quando alterar seu valor, no
caso dos `checkbox` e `radio` e `<option>` quando uma opção é selecionado ou
aterada.

**Nessa parte não tem exemplo prático**

---

[Home](../README.md) | [Anterior](note_4_6.md) | [Próxima Nota](note_5_2.md)
