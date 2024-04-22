// Utilizando apenas While do
// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let i = 0;
let x = 101;

while(i <= 50){
    if((x%2 != 0)&&(x%3 != 0)&&(x%5 != 0)&&(x%7 != 0)){
        console.log(x);
        x++;
        i++;
    }
}