// FOR. Bucle determinado.
//Sintaxis:
//Iniciación de la variable
//Número de vueltas
//Incremento o decremento

// for(let i= 0; i<=10; i ++){
//     código a ejecutar;
// }

//Durante su ejecución la variable i aumentara su valor en cada vuelta


// for(let i= 0; i<=10; i++){
//     console.log(i);
// }

// for(let i= 10; i<=0; i--){
//     console.log(i);
// }

// for(let i= 10; i<=0; i--){
//     if(i !=5){
//         console.log(i);
//     }
// }

// let numbers = [56, 14, 23, 37, 41, 59];

// for(let i=0; i<numbers.length; i++){
//     console.log(`i vale ${i} y el valor de esa 
//     posición en el array es ${numbers[i]}`);
// }



// FOR OF/ FOR IN

// let names = ['Paco', 'José', 'Paula', 'María'];

// for(let name of names){
//     console.log(name);
// }

// Devolverá
// 1a vuelta: Paco 
// 2a vuelta: José 
// 3a: Paula
// 4a: María

// for in se usa más para objetos.
// for(let index in names){
//     console.log(index);
// }

// Devolverá
// 1a vuelta: 0
// 2a: 1
// 3a: 2
// 4a: 3



// for (let i = 0; i< names.length; i++){
//     if (names[i]=== 'Paula'){
//         break;
//     }
//     console.log(names[i]);
// }
// Se termina proceso cuándo el bucle llega al nombre de Paula

// for (let i = 0; i< names.length; i++){
//     if (names[i]=== 'Paula'){
//         continue;
//     }
//     console.log(names[i]);
// }
//En este caso continua omitiendo el nombre Paula.


//Palabras reservadas de bucle:
//      -break. Rompe el bucle 
//      -continue. Salta la(s) posición (es) que le indiquemos 
//                  y continua su ejecución.


