# Processo Seletivo Front-End Pleno da Sigma/TJMT

## Houmar Passareli Rodrigues de Sousa

## Firebase

O projeto está hospedado no firebase e pode ser acessado por este link
[a link](https://comicshop-hprs.firebaseapp.com/)

## Considerações

Bem, me esforcei o máximo para demonstrar meu conhecimento em JS como foi requisitado.

Ainda sim ficaram algumas features que eu queria fazer, infelizmente a correria me impossibilitou.

Fiz o projeto todo em inglês por achar que não casaria termos em português na aplicação e dados em inglês vindos da API.

### JS nativo

Sim, eu resolvi fazer em JS nativo. Não usei frameworks e não usei JQuery. Fiz tudo com na mão com JS PURO!

A única lib que eu usei foi para gerar os hashs em MD5. Nesse ponto precisaria de um conhecimento muito avançado.

### Por que JS nativo?

Gosto do desafio, e o desafio era uma prova de JS Pleno.
Não desmerecendo quem usa/usou framework, mas queria mostrar meu potencial com o código base.

### JS + CSS 

O fato de eu não usar JQuery me trouxe alguns desafios. Na minha tragetória com desenvolvimento em JS já fiz muito disso, mas com o uso de ferramentas que facilitam as coisas, você perde o costume.

Então usei muito as funções de transição a animação do CSS.

### Como funciona?

O projeto esta portado unicamente em uma página HTML.
É carregado todos os files JS nesse HTML e a partir deles vou inserindo o conteudo conforme demanda e requisição.

Começando pelo main.js que fica responsável por métodos genericos e complementos para index.Genericos como:

* HTTP Request;
* Gerador de Hash;
* Responsável pela renderização da página;
* Manipulação de Eventos;

Em seguida temos a home.js que como o nome já diz está encarregada de ser a "porta de entrada" da aplicação.

Nele você escolhe qual direção seguir entre comics ou characters.

Comics irá requisitar a comics.js, nela assim como na characters.js são feitas as manipulações de exibição de suas respectivas obrigações. Como:

* Requisições direcionadas a API;
* Tratamento dos dados recebidos;
* Acionamento de efeitos para usuabiliade;
* Construção da página de exibição.

### Desafios encontrados

Os maiores desafios foi em questão da API mesmo. Foi comentado que existiam links quebrados das imagens onde na verdade não existem imagens e são substituidas por thumbnails defaults.

### Considerações finais

Bom, minha aplicação não ficou muito robusta, mas acredito que o código está bem completo e legível.

Aguardo o retorno.