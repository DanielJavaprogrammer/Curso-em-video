// Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.

const A = 12
const B = 13

if (A == B){
    const C = A + B
    console.log(`Valores iguais. A soma dos valores é ${C}.`)
}else{
    const C = A * B
    console.log(`Valores diferente. A multiplicacao dos valores é ${C}.`)
}

