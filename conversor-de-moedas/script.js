function Converter() {
 
  //Pegar o valor do Elemento HTML
   var valorElemento = document.getElementById("valor");
   var valor = valorElemento.value;
   var valorEsolhido = parseFloat(valor);
   
 //Pegar a moeda escolhida
   var moedaEscolhida = document.getElementById("moeda");
   var moeda = moedaEscolhida.value;
   console.log(moeda);
   
 //Condicinal para direntes valores da moeda escolhida
   if (moeda == "Dolar") {
     valorEmReal = (valorEsolhido * 5.25).toFixed(2);
     console.log(valorEmReal);
 }   
   else if (moeda == "Bitcoin") {
   valorEmReal = (valorEsolhido * 99817).toFixed(2);
   console.log(valorEmReal)
 }  
   else if (moeda == "Ethereum") {
   valorEmReal = (valorEsolhido * 8253).toFixed(2);
   console.log(valorEmReal)
 }
 
 //Modificar um elemento que está no HTML
   var elementoValorConvertido = document.getElementById("valorConvertido");
   var valorConvertido = "O resultado em Real é R$ " + valorEmReal;
   
 //Usar o comando criado para adicionar através da variável com o id
   elementoValorConvertido.innerHTML = valorConvertido;
 }