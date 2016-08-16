# Ciclo de Vida de Componentes

Todos os componentes no *React* tendem a terem um ciclo de vida, ou seja, há
eventos desde a criação, atualização e destruição do elemento de DOM. Vou tentar
abordar isso de uma maneira clara e sucinta.

Basicamente, nos capitulos anteriores aprendemos sobre eventos e isso é
exatamente o que ocorre aqui, um grande exemplo foi o uso do `componentDidMount`
usado na [Nota 4.4][0] que logava no console o DOM criado.

Existem outros eventos similares, incluíndo:

-   componentWillMount
-   componentWillReceiveProps
-   shouldComponentUpdate
-   componentWillUpdate
-   componentDidUpdate
-   componentWillUnmount

Esses eventos são distribuídos em três categorias: **Mounting**, **Updating** e
**Unmounting**.

##Mounting

No evento de montagem do componente dois eventos são chamados
`componentWillMount` e `componentDidMount`:

**componentWillMount**: É chamado uma vez quando tanto o servidor quanto o
browser estão renderizando o objeto. Esse tempo de execução ocorre *antes da
renderização inicial*.

**componentDidMount**: Esse é chamado *após a renderização inicial* e está sendo
executado somente pelo browser, nesse momento você consegue referenciar, por
exemplo, os objetos filhos - Só observe que ele será executado antes da criação
dos objetos abaixo dele.

##Updating

Esse se trata de eventos de atualização, são no total quatro:
`componentWillReceiveProps`, `shouldComponentUpdate`, `componentWillUpdate` e
`componentDidUpdate`.

**componentWillReceiveProps**: Esse daqui é chamado apenas quando é atribuído
uma nova propriedade ao componente - Esse não é chamado no momento de criação
do componente. Esse método coleta a nova propriedade como um argumento. E ele
é bem útil para capturar nova propriedade e colocar em um estado. Por exemplo,
atribuindo a opacidade do CSS o valor `0` ou `1` de acordo com a nova
propriedade `isVisible`:

```jsx
componentWillReceiveProps: function(newProps) {
  this.setState({
    opacity: (newProps.isVisible) ? 1 : 0
  })
}
```

Outro detalhe, é que esse evento não inicializa uma renderização extra.

**shouldComponentUpdate**: 


**componentWillUpdate**:

**componentDidUpdate**:

---

[Home](../README.md) | [Anterior](note_5_2.md) | [Próxima Nota](note_5_3.md)

[0]:note_4_4.md
