// Arreglos

// Un arreglo es un tipo de dato que permite almacenar un conjunto de
// datos, es preferible que los datos sean del mismo tipo, aunque no
// es una regla.

// let fruits = ['Manzana', "Plátano"]

// //Se accede a sus elementos por medio de índices
// console.log(fruits[0])


// //Obtener la longitud del arreglo
// console.log(fruits.length)


// // Con esto obtienes el último elemento, se puede modificar para regresar el penúltimo 
// // antepenúltimo y así sucesivamente
// const last = fruits[fruits.length -1]
// console.log(last)




// Convertir una cadena de texto en arreglo 
// let str = '1 2 3 4 5'
// let arr = str.split(' ')
// console.log(arr)
// console.log(Array.isArray(arr))


// let newArr = [1, 2, 3, 4 , 5]
// console.log(Array.isArray(newArr))



//Podemos recorrer un arreglo con un for y dar condiciones 
// let names = ['Ana', 'Miguel', 'Rosita', 'Juan']

// for(let i = 0 ; i< names.length; i++){
//     if(names[i] === 'Miguel'){
//         continue //se salta el nombre y continua
//         //break  //termina el bucle de manera abrupta y se queda hasta la condición
//     }
//     console.log(names[i])
// }

//Recorrer arrays más fácil:

//forEach: se le pasa de parámetro el nombre que tomará cada elemento de la lista
// lo negativo es que no se puede utilizar break ni continue, se debe verificar 
// para que se quiere utilizar
// names.forEach(name=> console.log(name))

//for in  itera sobre los modificadores de array y se usa para iterar sobre las 
// propiedades de un objeto, el primer elemento entre () es el nombre que 
//le damos a los elementos del arreglo y el segundo es el nombre del arreglo.
// let oldCar = {
//     make: 'Toyota',
//     model: 'Tercel',
//     year: '1996'
// }
// for(let key in oldCar){
//     console.log(`${key}: ${oldCar[key]}`)
// }

// Se puede utilizar también para iterar sobre los índices de un string o array
// let str = 'Turn the page';
// for (let index in str) {
//   console.log(`Index of ${str[index]}: ${index}`);
// }



//for of se usa más para iterar sobre los valores de un arreglo
let animals = ['hen', 'pig', 'sheep', 'rabbit']
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob']
for(let animal of animals){
    //Random name for our animal
    let nameIdx = Math.floor(Math.random() * names.length)
    console.log(`${names[nameIdx]} the ${animal}`)
}


