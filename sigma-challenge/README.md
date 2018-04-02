# SIGMA - MARVEL - DESAFIO TÉCNICO FRONT-END PLENO

## Solução Adotada

Hoje por questões de produtividade escolhi o **React**. Para este desafio precisava adotar um padrão de fluxo de dados e dividir minha aplicação em partes, tornando-a mais fácil para implementar novas funcionalidades e reúso de UI. Uma dificuldade no teste também era o reúso de dados para evitar o over-fetching e para esta solução usei o **Redux**, consegui gerenciar estados e buscas de rede armazenando dados e reutilizando.

## O que esta aplicação faz?

Existem as seguintes funcionalidades:

* Uma lista de cartões de Heróis e Quadrinhos carregados da API da Marvel;
* Cada lista tem um item clicável que é redirecionado para os detalhes do mesmo;
* Na página de detalhes é possivel ver mais sobre o Herói ou Quadrinho;
* Scroll infinito integrado com paginação de API

## Bibliotecas Usadas

* [React](http://reactjs.org/)
* [Redux](http://redux.js.org/)
* [Flow Type](https://flow.org/)
* [Styled Components](https://github.com/styled-components)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)
* [Material Design](https://material-ui-next.com/)

##### Como rodar a aplicação

```sh
git clone https://github.com/betiol/sigma-challenge.git
cd sigma-challenge
yarn install
yarn start
```

## Possíveis implementações

* Lista de eventos
* Mais detalhes dos Heróis
* Mais detalhes dos Quadrinhos
