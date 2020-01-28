// Spread Operator (operador de expansión)
// Sintaxis (...)

// const numbers = [-12, 2, 3, 23, 43, 2, 3];
//Números por separado, sin array
// console.log(...numbers);



// Enviar elementos de un array a una función
// const addNumbers = (a, b, c) => {
//     console.log(a+b+c);
// }
// let numbersToAdd = [1, 2, 3];
// addNumbers(...numbersToAdd);



//Añadir un array a otro array
// let users = ['javier', 'david', 'rosa', 'juan', 'mercedes'];
// let newUsers = ['marta', 'jaime', 'laura'];
// users.push(...newUsers);
// console.log(users);



//Copiar arrays
// let arr1 = [1,2,3,4];
// let arr2 = [...arr1];
// console.log(arr2);



//Concatenar arrays
// let arr1 = [1,2,3,4];
// let arr2 = [6,7,8];
// let arrConcat = [...arr1, ...arr2];
// console.log(arrConcat);



// //Enviar un número indefinido de argumentos a una función (parámetros REST)
// const restParams = (...numbers) => {
//     console.log(numbers);
// }
// //Pasan estos parámetros y se vuelven array
// restParams(1, 2, 3, 4, 5);



//librería math
// const numbers = [-12, 2, 3, 23, 43, 2, 3];
// console.log(Math.max(...numbers));



//Eliminar elementos duplicados array
// const numbers = [-12, 2, 3, 23, 43, 2, 3];
// console.log([...new Set(numbers)]);

