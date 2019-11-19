# Compra com sucesso

A proposta solicita para que seja realizada a compra de qualquer item do site[www.automationpractice.com](www.automationpractice.com), passando por todos os passos que o site requer para que a compra seja realizada com sucesso.

## Pré-requisitos para rodar a aplicação

Ter o Google Chrome instalado no computador, bem como o node.js.

## Como rodar a aplicação

- Basta digitar no terminal `npm install` (onde o npm irá ler o que está contido no arquivo package.json as dependências listadas, fazendo com o que o teste funcione). Em seguida, digitar o comando `npx webdriver-manager update`. Por fim, digitar `npm test`(que é o próprio teste).

## Como foi construído

- Javascript puro foi utilizado no código, e tambémo framework Selenium. Protractor também foi utilizando, o que permite que se use Selenium utilizando a linguagem Javascript. 

## Como consegui realizar a tarefa proposta
Nunca havia utilizado Selenium para realizar testes, mas gostei da ferramenta. Por não conhecer tanto assim, recorri a alguns links da Internet para ir montando o exercício.

Segue o link do vídeo que mostra o teste funcionando: [https://youtu.be/buju965bwX4](https://youtu.be/buju965bwX4)

## O que eu poderia ter feito se tivesse mais tempo
- Realizar um teste para o passo 9 (Valide o valor total da compra)
- Fazer testes menores pra testar de forma independente cada etapa do site 
- Fazer os testes utilizando Java + Selenium em um outro repositório

## Referências
Links de onde encontrei material para estudar/entender tópicos que ainda não havia entendido muito bem do Javascript utilizando Selenium:

* [https://www.youtube.com/watch?v=7bzbcyfli50](https://www.youtube.com/watch?v=7bzbcyfli50)

* [https://techblog.poppulo.com/removing-sleeps-from-your-angularjs-protractor-tests/](https://techblog.poppulo.com/removing-sleeps-from-your-angularjs-protractor-tests/)

* [https://firstdoit.com/no-need-for-globals-using-npm-dependencies-in-npm-scripts-3dfb478908](https://firstdoit.com/no-need-for-globals-using-npm-dependencies-in-npm-scripts-3dfb478908)
