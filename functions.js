//Son fragmentos de código que escribimos para ejecutar una tarea y no volver a escribir el mismo código más de una vez.
// Nos ayudan a modularizar el código
// Las funciones deben realizar una sola tarea

//función por declaración
// function nombreFuncion(){
//     //código a ejecutar
// }

//función por expresión
// const nombreFuncion = () => {
//     //código a ejecutar
// }

// Puede recibir parámetros
// Pueden devolver valores

// function saludar(){
//     console.log('Hola');
// }
//Si solo hay una línea de código no es necesario abrir las llaves tanto en funciones cómo if else
// const saludar = () => console.log('Hola');
// //Si hay un parámetro se pueden omitir los parentesís
// const saludarUsuario = user => console.log(`Hola ${user}`);
// //invocamos la función
// saludar();
// //Se invocan escribriendo el nombre de la función más paréntesis
// saludarUsuario('Pepe');
// saludarUsuario('Marta');

//son la misma función solo que en las llaves requiere return
// const suma = (num1, num2) => {
//     return num1 + num2;
// }
// const suma = (num1, num2) => num1 +num2;

//Al encontrar un return deja de ejecutarse
// const suma = (num1, num2) => {
//     if(num1 == 2){
//         return num1 + num2
//     }
//     console.log('Esto no se va a ejecutar si entra en el if')
//     return num1;
// }
// console.log(suma(2,3));

//También podemos guardar el resultado en una variable
// let result = suma(3,6);



