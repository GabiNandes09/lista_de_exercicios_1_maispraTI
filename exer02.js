// 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt("Qual o número total de eleitores? "));
let brancos = parseInt(prompt("Qual o número de votos em branco? "));
let nulos = parseInt(prompt("Qual o total de votos nulos? "))
let validos = parseInt(prompt("Qual a quantidade de votos válidos? "));

brancos /= eleitores;
nulos /= eleitores;
validos /= eleitores;

brancos*=100;
nulos*=100;
validos*=100;

console.log(`${brancos}% de votos brancos.`);
console.log(`${nulos}% de votos nulos.`);
console.log(`${validos}% de votos validos.`);