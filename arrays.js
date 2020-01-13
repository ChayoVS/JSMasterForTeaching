//Arrays

//Son estructuras que nos permiten almacenar varios datos y agruparlos.
//Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas.
//Se pueden mezclar tipos de datos, pero no es recomendable.
//Se declaran con corchetes [].
//Pueden declararse vacíos o con contenido.
//Pueden añadirse o eliminarse elementos en el momento que queramos.
//Cada elemento podrá ser identificado por su índice, es decir por su posición.
//Estos índices empiezan a contar desde 0.

// let numeros= [1, 2, 3, 4, 5];

// let palabras= ['hola', 'estamos', 'en', 'Youtube'];

// console.log(numeros[0]);

// //suma los dos índices
// console.log(numeros[0] + numeros[1]);

// //buscando palabra y cuantos elementos tiene
// console.log(`La palabra ${palabras[1]} tiene ${palabras[1].length} letras`);


// console.log(numeros);


let numbers = [1, 2, 3, 4, 5];

//Propiedades Array 
// .length - devuelve el número de posiciones que tiene el array aquí no cuenta desde 0 

// console.log(numbers.length);




// Métodos Array


// Array.isArray(variable a evaluar) - Devuelve true si la variable es un array

// let number = 4;

// console.log(Array.isArray(number));
// console.log(Array.isArray(numbers));


//Eliminar un elemento
//  .shift() Elimina el primer elemento del array y devuelve ese elemento.
//  .pop() Elimina el último elemento del array y devuelve ese elemento.

// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// Nota *Los elementos borrados se pueden guardar en variables*


//Añadir elementos 
//  .push(element1, element2,...) -Añade uno o más elementos al final del
//  del array y devuelve la nueva longitud.
//  .unshift(element1, element2,...) -Añade uno o más elementos al comienzo
//  del array y devuelve la nueva longitud.

// numbers.push(6);
// console.log(numbers);
// numbers.unshift(0);
// console.log(numbers);
// Nota *Los elementos añadidos se pueden guardar en variables*


//  .indexOf() -Devuelve el primer índice del elemento que coincincida con 
//  el valor especificado, o -1 si ninguno es encontrado.

//  .lastIndexOf() -Devuelve el último índice del elemeto que coincida  con
//  el valor especificado, o -1 si ninguno es encontrado.

//  .reverse() -Invierte el orden de los elemetos del array.
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

//  .join('separador') -Devuelve un string con el separador que indiquemos,
//  por defecto son comas.
//  let arrayString = numbers.join(' ');
//  console.log(arrayString);
//  console.log(numbers.join('-')) devolverá el array separado con -

//  .splice(a, b, items) -Cambia el contenido de un array eliminando elementos
//  existentes y/o agregando nuevos elementos.
//      a -Índice de inicio
//      b -Número de elementos (opcional)
//      items -Elementos a añadir en el caso de que se añadan (opcional)
//  console.log(numbers);
//  numbers.splice(3); -Elimina desde la posición 3 (a) hasta el final.
//  numbers.splice(2, 2) -Elimina desde la posición (a) el número de valores 
//                        que le indiquemos. Elimina de la posición 2, 2 elementos.
//  numbers.splice(2, 2, 10, 23) -Elimina desde la posición 2, 2 elementos y añade el
//                            10 y 23 en su lugar. Si el valor de (b) es 0 sólo añade
//                            los elementos sin borrar nada.

//  .slice(a, b) -Extrae elementos de un array desde el índice (a) hasta el índice 
//  (b). Si no existe (b) lo hace desde (a) hasta el final, si  no existe ni (a) ni 
//  (b) hace una copia del original.


