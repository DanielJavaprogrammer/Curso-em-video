//Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

var salarioMinimo = 1412.00;
var salarioUsuario = 2824.00; // Substitua pelo salário do usuário

var salariosMinimosGanhos = salarioUsuario / salarioMinimo;

console.log(`O usuário ganha aproximadamente ${salariosMinimosGanhos.toFixed(2)} salários mínimos.`);
