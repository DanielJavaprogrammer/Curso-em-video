// Criando um objeto chamado "funcionarios" com algumas propriedades.
const funcionarios = {
    nome: 'Daniel',
    idade: 23,
    cargo: 'Jornalista',
    sexo: 'M'
};

// Acessando uma propriedade do objeto usando colchetes []
console.log(funcionarios["nome"]); // Saída: Daniel

// Acessando uma propriedade do objeto usando ponto (.)
console.log(funcionarios.idade); // Saída: 23

// Adicionando uma nova propriedade ao objeto
funcionarios.nacionalidade = "Brazil";
console.log(funcionarios); 
// Agora o objeto inclui: { nome: 'Daniel', idade: 23, cargo: 'Jornalista', sexo: 'M', nacionalidade: 'Brazil' }

// Removendo uma propriedade do objeto usando 'delete'
delete funcionarios.cargo;
console.log(funcionarios); 
// Agora o objeto não tem mais a propriedade "cargo"

// Adicionando um método (função dentro do objeto)
funcionarios.status = function() {
    console.log('Funcionario ativo.');
};

// Chamando o método "status" do objeto
funcionarios.status(); // Saída: Funcionario ativo.
