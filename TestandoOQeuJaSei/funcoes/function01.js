let data = new Date();
let hora = data.getHours();
let minuto = data.getMinutes();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();

// const horaAtual = () => {
//     return ("Agora são " + hora + " e " + minuto + " minutos.");
// }
// console.log(horaAtual());

// // Função para ver nome do funcionario. (Usando parametro).
// const funcionario = (nome) => {
//     return ("Bem vindo " + nome + "!");
// }
// console.log(funcionario("Lucas"));

// // Funcção que calcula area (com parametro).
// const calcularArea = (largura, altura) => {
//     return largura * altura;
// }

// console.log("A area completa é " + calcularArea(5, 10));

// Função para ver data atual
const dataAtual = () => {
    let data = new Date();
    let mess = data.getMonth().toString().padStart(2, "0");
    return ("Hoje é " + dia + "/" + mess + "/" + ano);
}

console.log(dataAtual() + ".");