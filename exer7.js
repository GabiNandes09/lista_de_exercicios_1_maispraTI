// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Quantas maças deseja comprar? "));
let valor;

if(n < 12){
    valor = 0.3*n;
} else {
    valor = 0.25*n;
}

console.log("O valor total de sua compra é:")
console.log(`R$${valor}`);