// Leitura dos valores de A, B e C
const A = parseFloat(prompt("Digite o valor de A:"));
const B = parseFloat(prompt("Digite o valor de B:"));
const C = parseFloat(prompt("Digite o valor de C:"));

// Cálculo da soma entre A e B
const somaAB = A + B;

// Verificação se a soma é menor que C
if (somaAB < C) {
    console.log(`A soma entre A e B (${somaAB}) é menor que C (${C}).`);
} else {
    console.log(`A soma entre A e B (${somaAB}) não é menor que C (${C}).`);
}
