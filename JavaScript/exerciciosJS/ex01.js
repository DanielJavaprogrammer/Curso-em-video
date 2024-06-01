//1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C. //FEITO

const A = parseFloat(30);
const B = 11;
const C = 10;

const somaAB = parseFloat(A + B);

if (somaAB < C) {
    console.log(`O resultado da soma é ${somaAB}. Então o valor é menor que C.`);
}
else {
    console.log(`O resultado da soma é ${somaAB}. Então o valor é maior que C.`);
}