// 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
// divididos por 11, dão resto igual a 5.

const prompt = require('prompt-sync')();

console.log("Números entre 1000 e 1999:")

for(let i = 1000; i <= 1999; i++){
    console.log(i)
}

console.log("Números entre 1000 e 1999, que divididos por 11, tem resto igual a 11:")

for(let i = 1000; i < 1999; i++){
    if (i%11 === 5){
        console.log(i)
    }
}