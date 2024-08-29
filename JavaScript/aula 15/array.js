// let num = [6, 2, 10, 90, 14];
// num.sort(); // Coloca os valores em ordem crescente.
// num.length; // Checa o comprimento do array.
// var pos = num.indexOf(2); //Verifica se na tabela "num", tem o valor "2" e guarde na variavel "pos";
// console.log(pos);
// console.log("Seu array tem " + num.length + " posições.");

let num = [6, 2, 10, 90, 14];
num.sort((a, b) => a - b); // Ordena os valores em ordem crescente numericamente
var pos = num.indexOf(2); // Verifica se na tabela "num", tem o valor "2" e guarda na variável "pos";
console.log(pos);
console.log("Seu array tem " + num.length + " posições.");
