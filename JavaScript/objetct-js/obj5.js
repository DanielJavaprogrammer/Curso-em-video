// Copiar e Mesclar Objetos
// Às vezes, queremos copiar um objeto sem modificar o original ou juntar dois objetos. Para isso, usamos o Object.assign() ou o spread operator (...).

let original = { a: 1, b: 2 };
let copia = Object.assign({}, original); // Copia para um novo objeto
console.log(copia); // { a: 1, b: 2 }

// Outra forma moderna de copiar:
let copia2 = { ...original };
console.log(copia2); // { a: 1, b: 2 }
