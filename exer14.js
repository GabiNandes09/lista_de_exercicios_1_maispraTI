// Utilizando somento while do
// 14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();
let n;
let qtd = 0;
let total = 0;

while (n != 0){
    n = parseFloat(prompt("Digite um número: "));

    qtd++;
    total += n;
}
let media = total/qtd;
console.log(`Média: ${media}`)