function calcular() {

var nota1 = parseFloat(document.getElementById("nota1").value);
var nota2 = parseFloat(document.getElementById("nota2").value);
var nota3 = parseFloat(document.getElementById("nota3").value);
var nota4 = parseFloat(document.getElementById("nota4").value);
  

var notaFinal = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1);

console.log("Sua nota final é " + notaFinal)

document.getElementById("result").innerHTML = "Sua nota final é " + notaFinal;
  
}