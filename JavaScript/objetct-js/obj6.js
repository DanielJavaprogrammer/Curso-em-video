// Mesclar Objetos
//  unir dois objetos

let obj1 = { nome: "Carlos" };
let obj2 = { idade: 30, profissao: "Desenvolvedor" };

let pessoa = { ...obj1, ...obj2 }; // Une os dois objetos
console.log(pessoa);
// { nome: "Carlos", idade: 30, profissao: "Desenvolvedor" }
