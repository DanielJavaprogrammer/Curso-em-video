let alimentos = [
    { id: 1, nome: "Uva" },
    { id: 2, nome: "Laranja" },
    { id: 3, nome: "Limão" },
    { id: 4, nome: "Cereja" },
    { id: 5, nome: "Morango" },
];

alimentos.push({ id: 5, nome: "Mamão" });

alimentos.length
console.log(alimentos.length)

console.log(alimentos[alimentos.length - 1]);

var nome = [];

alimentos.forEach(function (fruta) {
    nome.push(fruta.nome)
});

for (i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}