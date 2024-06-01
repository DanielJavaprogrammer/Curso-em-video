//Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo. 


var x = parseInt(144)

if (x % 2 === 0){
    if (x >= 0){
        console.log(`O numero digitado foi ${x}, então é par positivo.`)
    }else{
        console.log(`O numero digitado foi ${x}, então é par negativo.`)
    }
}else{
    if (x >= 0){
        console.log(`O numero digitado foi ${x}, então é impar positivo.`)
    }else{
        console.log(`O numero digitado foi ${x}, então é impar negativo.`)
    }
}