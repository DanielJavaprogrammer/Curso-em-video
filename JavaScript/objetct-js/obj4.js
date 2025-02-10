//Transformar um Objeto em um Array
/*
Object.keys(obj) → Retorna um array com as chaves do objeto
Object.values(obj) → Retorna um array com os valores do objeto
Object.entries(obj) → Retorna um array com pares chave-valor

*/

let pessoa = {
    nome: "Ana",
    idade: 28,
    profissao: "Engenheira"
};

console.log(Object.keys(pessoa));  // ["nome", "idade", "profissao"]
console.log(Object.values(pessoa)); // ["Ana", 28, "Engenheira"]
console.log(Object.entries(pessoa)); // [["nome", "Ana"], ["idade", 28], ["profissao", "Engenheira"]]


let um = Object.keys(pessoa);
console.log(um[1])