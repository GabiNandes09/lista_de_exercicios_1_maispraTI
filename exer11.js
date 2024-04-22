// 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.

const prompt = require('prompt-sync')();

let i = 1;
let sair = 0;

while( sair === 0){
    let x = parseInt(prompt(`Digite o ${i}° número: `));
    i++;
    console.log();
    switch (true){
        case ((x===0)||(x<0)):
            sair = 1;
            break;
        case (x%2 != 0):
            console.log("O número é ímpar")
            break;
        case (x%2 === 0):
            console.log("O número é par");
            break;
    }
    
}