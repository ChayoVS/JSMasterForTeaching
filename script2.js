//Condicionales, if else

//Estructuras de control de flujo:
//Condicionales: 
//1) Simples 
//2)Compuestos 
//3)Múltiples

// 1. if(condición) código a ejecutar

//if(condición){
//     código a ejecutar1
//     código a ejecutar2
// }

//2. if(condición) código a ejecutar
//   else código a ejecutar

// if(condición){
//     código a ejecutar
// }else{
//     código a ejecutar
// }


// 3. if(condición){
//     código a ejecutar
// }else if(otra condición){
//     código a ejecutar
// }else{
//     código a ejecutar
// }

// Operadores lógicos 
//&& and
// || o 
//! false

//Bucles:
//-Determinados
//-Indeterminados


// 1. Ejercicio: Ordena 3 números de menor a mayor.
//Posibilidades 6 

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a= prompt('introduzca el primer número');
let b= prompt('introduzca el segundo número');
let c= prompt('introduzca el tercer número');

numbers.textContent = `Los números introducidos son ${a}, ${b} y ${c}`;

if(a>=b && a>=c){
    if(b>c){
        result.textContent = `El orden es: ${a}, ${b}, ${c}`;
    }else{
        result.textContent = `El orden es: ${a}, ${c}, ${b}`;
    };
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent = `El orden es: ${b}, ${a}, ${c}`;
    }else{
        result.textContent= `El orden es: ${b}, ${c}, ${a}`;
    }
}else if(c>=a && c>=b){
    if(a>b){
        result.textContent = `El orden es: ${c}, ${a}, ${b}`;
    }else{
        result.textContent = `El orden es: ${c}, ${b}, ${a}`;
    }
} 
