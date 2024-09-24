var cores = [
    { id: 1, nome: 'Amarelo' },
    { id: 2, nome: 'Verde' },
    { id: 3, nome: 'Azul' },
    { id: 4, nome: 'Branco' },
    { id: 5, nome: 'Preto' }
];

//Exemplo 1: utilizando um laço foreach
//Criando um novo array para receber os nomes
// var nomesCores = [];

//Percorrendo o array cores e atribuindo ao novo array os nomes
cores.forEach(function (cor) {
    nomesCores.push(cor.nome);
});
console.log(nomesCores);

//Exemplo 2: utilizando arrow function
// const coresNomes = cores.map(cor => cor.nome);
// console.log(coresNomes);