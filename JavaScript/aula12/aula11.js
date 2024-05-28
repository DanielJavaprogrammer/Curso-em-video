//Condição em bloco
//Condição dentro de condição

var idade = 22
console.log(`Você tem ${idade}.`)
if (idade < 12) {
    console.log("Você ainda não vota.")
} else if (idade < 18 || idade > 65) {
    console.log("O voto é opcional.")
} else {
    console.log("Seu voto é obrigatório.")
}