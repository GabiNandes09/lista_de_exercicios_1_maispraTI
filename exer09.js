const prompt = require('prompt-sync')();

let n = parseInt(prompt("Insira o código: "));

switch (true){
    case (n===1): 
        console.log("SUL");
        break;
    case (n===2): 
        console.log("Norte");
        break;
    case (n===3): 
        console.log("Leste");
        break;
    case (n===4): 
        console.log("Oeste");
        break;
    case (n===5): case (n===6):
        console.log("Nordeste");
        break;
    case ((n>=7)&&(n<=9)): 
        console.log("Sudeste");
        break;
    case ((n>=10)&&(n<=20)): 
        console.log("Centro-Oeste");
        break;
    case ((n>=25)&&(n<=50)): 
        console.log("Nordeste");
        break;
    default:
        console.log("Produto importado.")
        break;
}



