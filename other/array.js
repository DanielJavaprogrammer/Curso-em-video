let n = [];

for (i = 0; i <= 9; i++) {
    n.push(i);
    console.log(n[i]);
}

console.log(`Seu array tem um total de ${n.length} variaveis.`);

let maior = n[0];
n.push(34);

for (i = 0; i <= n.length; i++) {
    if (maior <= n[i])
        maior = n[i];
}

console.log("O maior numero é " + maior + ".");
