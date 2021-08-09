

/*
Dsl
Desenvolvido por Érick Luz Cavalcante
Como parte do projeto APP de programação para internet
equipe:
Érick Cavalcante
Paula Regina
Samuel Sales
Gabriela Oliveira
Vitor Lima
Raul Oliveira
------------------------------
Professor Marcos Vasconcelos
------------------------------


## API utilizada
## https://docs.awesomeapi.com.br/api-de-moedas

*/


/*
Metodo que efetua a Conversão de uma moeda
Este metodo realiza uma requisição via get para uma api

Os parametros deve ser usados nos seguintes padrões

/*
-   -   -   -   M   O   E   D   A   S   -   -   -   -
Codigo das Moedas:
USD-BRL (Dólar Comercial)
USDT-BRL (Dólar Turismo)
CAD-BRL (Dólar Canadense)
AUD-BRL (Dólar Australiano)
EUR-BRL (Euro)
GBP-BRL (Libra Esterlina)
ARS-BRL (Peso Argentino)
JPY-BRL (Iene Japonês)
CHF-BRL (Franco Suíço)
CNY-BRL (Yuan Chinês)
YLS-BRL (Novo Shekel Israelense)
BTC-BRL (Bitcoin)
LTC-BRL (Litecoin)
ETH-BRL (Ethereum)
XRP-BRL (Ripple)


-   -   -   -   M   O   D   O   -   -   -   -
compra (Padrão)
venda
variacao
porcentageVariacao
maximo
minimo

*/

function converterMoeda(moeda,quantidade, id,modo){

  // na variavel url, defino a URL de onde será efetuado a requisição,
  // com os paramentros  nescessários.

  var url  = "https://economia.awesomeapi.com.br/"+moeda+"/"+quantidade;

  // instacia requisição requisição
  var requisicao = new XMLHttpRequest();
  // Abre a conexão e define o metodo de envio de dados como GET
  // ao invés de post. Para que os paramentros sejam enviados via URL
  requisicao.open('GET', url);

  requisicao.responseType = 'json';  // tipo de api
  requisicao.send(); // envia dados
  requisicao.onload = function() { // quando carregar a requisição
    /*
    a variavel retorno recebe a resposta da api
    Ela retorna como um vetor como só me interessa o primeiro indice desse vetor, fixei em 0
    */
    var retorno = requisicao.response[0]; //recebe um objeto
    // Define o modo, e altera a variavel modo para corresponder
    // com o indice retornado da API
    switch (modo) {
      case "compra":
      modo="bid";
      break;

      case "venda":
      modo="ask";
      break;

      case "variacao":
      modo="varBid";
      break;

      case "porcentageVariacao":
      modo="pctChange";
      break;

      case "maximo":
      modo="high";
      break;

      case "minimo":
      modo="high";
      break;

      default:
      modo="bid";
      break;
    }
    // Grava o resultado no id passado no paramentro deste metodo
    document.getElementById(id).innerHTML=retorno[modo];
  }
}
