//Utilizando apenas while do
// 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require('prompt-sync')();

let n = 0;
let x = 0;
let total = 0;
let qtd = 0;

do{
    n = parseFloat(prompt("Digite um número: "))
    if(n != 0){
    x = parseFloat(prompt("Digite seu peso: "));
    
    total += n*x;
    qtd += x;

    }
}while (n != 0)

console.log(`A média ponderada é: ${total/qtd}`)