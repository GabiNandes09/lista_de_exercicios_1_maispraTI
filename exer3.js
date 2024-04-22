// 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite o 1° número: "));
let n2 = parseInt(prompt("Digite o 2° número: "));
let n3 = parseInt(prompt("Digite o 3° número: "));
let n4 = parseInt(prompt("Digite o 4° número: "));

n4 += (n1+n2+n3);
n1 += 25;
n2 *=3;
n3*=1.12;

console.log("Novos números:")
console.log("1° nº: " + n1);
console.log("2° nº: " + n2);
console.log("3° nº: " + n3);
console.log("4° nº: " + n4);
