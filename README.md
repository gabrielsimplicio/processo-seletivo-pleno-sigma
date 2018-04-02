# Site de quadrinhos da Marvel

Site Single Page Application que busca e lista através da API da Marvel, todos seus quadrinhos e personagens.

## Funcionamento

### Páginas

##### O site está dividido em 5 páginas

* **/home**
    * Lista os 12 quadrinhos mais recentes e os 12 personagens mais recentes.
* **/quadrinhos**
    * Lista todos os quadrinhos dísponíveis pela Marvel.
    * Sistema de paginação, mostrando 12 quadrinhos por página.
    * Campo de busca, para pesquisar um quadrinho pelo nome.
* **/quadrinho/id**
    * Lista os detalhes do quadrinho selecionado.
    * Caso tenha, lista os personagem que são relacionados à esse quadrinho.
* **/personagens**
    * Lista todos os personagens dísponíveis pela Marvel, listando 12 por página.
    * Sistema de paginação, mostrando 12 personagens por página.
    * Campo de busca, para pesquisar um personagem pelo nome.
* **/personagem/id**
    * Lista os detalhes do personagem selecionado.
    * Caso tenha, lista os quadrinhos que são relacionados à esse personagem.

### Páginação
* O site possui paginação nas páginas /quadrinhos e /personagens, onde cada página mostra 12 registros.

### Busca
* O site possui busca nas páginas /quadrinhos e /personagens, através do título do quadrinho ou pelo nome do personagem.

## Solução adotada

* **Framework** 
    * O framework escolhido foi o Angular, juntamente com o Angular CLI seguindo os padrões do Style Guide do Angular, como forma de ganhar mais experiência com desafios.
* **Pré-processadores**
    * Foi utilizado o pré-processador SASS ao invés de apenas CSS puro, para facilitar no desenvolvimento e organização dos arquivos css.
* **Bootstrap**
    * Foi utilizado bootstrap 4.0 para o responsivo. 

## Como instalar
**Antes de qualquer coisa, prepare o ambiente de desenvolvimento** 
    * Instale o [Node.js e o npm]
    * Instale o [Git]

**Clone o projeto, instale as dependências e devDependencies e inicie o servidor**
```sh
git clone https://github.com/Cristianotx/processo-seletivo-pleno-sigma
cd processo-seletivo-pleno-sigma-master
npm install
npm start
 ```
 
 ## Dependências
 **O site atualmente está usando as seguintes dependências**
 | Dependência | Versão |
| ------ | ------ |
| [Bootstrap] | 4.0.0 |
| [jQuery] | 3.3.1 |

License
----

MIT

[//]: # (Estes são links de referência usados no corpo desta nota e são retirados quando o processador de marcação faz o seu trabalho. Não há necessidade de formatar bem porque não deve ser visto. Obrigado SO - http://stackoverflow.com/ perguntas / 4823468 / store-comments-in-markdown-syntax)


   [Git]: <https://git-scm.com/downloads>
   [Bootstrap]: <http://getbootstrap.com/>
   [node.js  e o npm]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [AngularJS]: <http://angularjs.org>
