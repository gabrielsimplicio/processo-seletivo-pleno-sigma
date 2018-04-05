# Processo Seletivo Front-End Pleno da Sigma/TJMT - Solução

Este projeto consome a API da marvel e simula uma loja de quadrinhos com os dados obtidos da API.

No projeto há quatro telas: Quadrinhos, Personagens, Quadrinho e Personagem (as duas últimas são telas com informações detalhadas que são acessadas ao clicar em um dos itens das duas primeiras telas).

## Tecnologias Utilizadas

O projeto foi iniciado utilizando o gerador de boilerplate [create-react-app](https://github.com/facebook/create-react-app) que gera um projeto configurado para a biblioteca [react](https://reactjs.org/).

Além do `react` foram utilizados também:

- [react-router](https://github.com/ReactTraining/react-router)
- [Sass](https://sass-lang.com/)
- [Jest](https://facebook.github.io/jest/)

E vários outros pacotes com polyfills, webpack loader e babel loader, que vieram configurados no `create-react-app`.

Foi cogitada a utilização do [redux](https://redux.js.org/) também, no entanto entendi que nesse ponto do projeto só iria adicionar complexidade, se houvesse tempo hábil para o desenvolvimento de funções como carrinho de compras, seria utilizado o redux.

## Instação

Para instalar é necessário clonar o projeto e instalar os pacotes utilizando o `npm install`, após isso executar com `npm start`.

```
> git clone https://github.com/brunoravanhani/processo-seletivo-pleno-sigma.git
> cd processo-seletivo-pleno-sigma
> npm install
> npm start
```

Foram desenvolvidos alguns testes unitários com o framework `Jest` para funções que são puramente de lógica e transformação de objetos. Os testes podem ser executados com o comando `npm test`.
