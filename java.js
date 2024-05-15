var nome = 'Daniel';
var salario = 1200;
var cargo = 'Gerente de compras';

console.log("Nome do funcionario: "+ nome);
console.log("Ultimo do salario: " + salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
console.log("Cargo do Funcionario: "+ cargo);
