$(document).ready(function(){

    // modal
    $('.modal').modal({
        dismissible: false
    });
    //menu mobile
    $(".button-collapse").sideNav();
    //parallax
    $('.parallax').parallax();
    //tooltipped
    $('.tooltipped').tooltip();
    //scroll
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        },800);
    });

 });


// Função para adicoinar aliquota referente a cada estado 
 function PreencherAliq() {
    
    var es;
    
    es = document.getElementById("Escolha").value;
    
    switch (es) 
    {
    case 'AC':
        es = 0;
        document.getElementById("aliquota").value = 17;
    break;

    case 'AL':
        es = 0;
        document.getElementById("aliquota").value = 12;
    break;

    case 'AP':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'BA':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'CE':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'DF':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'ES':
        es = 0;
        document.getElementById("aliquota").value = 17;
    break;

    case 'GO':
        es = 0;
        document.getElementById("aliquota").value = 17;
    break;

    case 'MA':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'MT':
        es = 0;
        document.getElementById("aliquota").value = 17;
    break;

    case 'MS':
        es = 0;
        document.getElementById("aliquota").value = 17;
    break;

    case 'MG':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'PA':
        es = 0;
        document.getElementById("aliquota").value = 17;
    break;

    case 'PB':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'PR':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'PE':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'PI':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'RN':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'RS':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'RJ':
        es = 0;
        document.getElementById("aliquota").value = 20;
    break;

    case 'RO':
        es = 0;
        document.getElementById("aliquota").value = 17.5;
    break;

    case 'RR':
        es = 0;
        document.getElementById("aliquota").value = 17;
    break;

    case 'SC':
        es = 0;
        document.getElementById("aliquota").value = 17;
    break;

    case 'SP':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'SE':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;

    case 'TO':
        es = 0;
        document.getElementById("aliquota").value = 18;
    break;
   
    }
}
function botao_limpar()
{
    //botao para limpar campos 

        document.getElementById("txt_iof").value = "";
        document.getElementById("txt_impostos_importacao").value = "";
        document.getElementById("txt_monetaria").value = "";
        document.getElementById("txt_result_icms").value = "";
        document.getElementById("txt_result_iof").value = "";
        document.getElementById("valor_final").innerHTML = "Valor Total com Impostos R$:";
        document.getElementById("txt_custo_frete").value = 0;
        document.getElementById("txt_valor_prodbr").value = "";
        document.getElementById("txt_valor_produsd").value = "";
        document.getElementById("txt_result_impostos_importacao").value = "";
        document.getElementById("txt_icms").value = "";


  
}
var icms,iof,precoProdutoRS,valorFreteRS,valorFrete,precoProduto,intTotal;//variaveis globais utilizadas para realizar o calculo


function calcular() {

    cotacao = parseFloat(document.getElementById("dolar").innerHTML );// cotacao com dolar 
            
    iof  = parseFloat(document.getElementById("txt_iof").value);//iof
    valorFrete = parseFloat(document.getElementById("txt_custo_frete").value);//valor do frete
    precoProduto  = parseFloat(document.getElementById("txt_valor_produsd").value);//preco do produto em dolares

    var impostoImportacao=0;
  
    if (precoProduto>100){
      impostoImportacao=0.6;//variavel utilizada na conta
      document.getElementById("txt_impostos_importacao").value = 60;//somente para mostrar para o usuario esta variavel nao e utilizada na conta

    }
    icms = 0;
    icms = parseFloat(document.getElementById("aliquota").value);
    parseFloat(document.getElementById("txt_monetaria").value = cotacao);//pega o icms por estado 
    iof = 6.38;
    parseFloat(document.getElementById("txt_iof").value = iof.toFixed(2));//mostra o iof em porcentagem


     icms = icms / 100;//conversao para porcentagem do icms
     iof = iof / 100;//conversao para porcentagem do iof


     precoProdutoRS = precoProduto * cotacao;//conversao para o produto em reais

     parseFloat(document.getElementById("txt_valor_prodbr").value = precoProdutoRS.toFixed(2));//mostra o produto convertido em reais

     valorFreteRS = valorFrete* cotacao;//valor do frete em reais

     intTotal = precoProdutoRS + valorFreteRS;//valor total do frete mais mercadoria em reais
  
    var intIOF = 0;
    if (iof>0) {
      var intIOF = intTotal * iof;
      parseFloat(document.getElementById("txt_result_iof").value = intIOF.toFixed(2)); //mostra o resultado do iof em reais 

    }
  
    //calculo dos impostos sem frete

    if (valorFrete==0) {
      var impostoImportacao = precoProdutoRS * impostoImportacao;//calculo do imposto de importacao 
      document.getElementById("txt_result_impostos_importacao").value = impostoImportacao.toFixed(2);//valor em reais do imposto de importacao

      var icms = ((precoProdutoRS + impostoImportacao)  / (1 - icms)) * icms;
      document.getElementById("txt_result_icms").value = icms.toFixed(2);//valor do icms em reais

      var intTot = impostoImportacao + icms + intIOF;//total de imposto sem frete
    } else {
    
    //calculo dos impostos com frete 
      var impostoImportacao = (precoProdutoRS + valorFreteRS) * impostoImportacao;
      document.getElementById("txt_result_impostos_importacao").value = impostoImportacao.toFixed(2);//valor em reais do imposto de importacao

      var icms = (((precoProdutoRS + valorFreteRS) + impostoImportacao) / (1 - icms))* icms;//calculo do icms com frete
      document.getElementById("txt_result_icms").value = icms.toFixed(2);//mostra valor do icms em reais

      intTot= impostoImportacao + icms + intIOF;//total de impostos com frete

    }
  //total a pagar
     
    totais = intTotal + impostoImportacao + icms + intIOF;//calculo do total 
    document.getElementById("valor_final").innerHTML = "Valor Total com Impostos R$: " + totais.toFixed(2);

      

 }
  