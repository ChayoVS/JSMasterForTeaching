//Objeto
// Son estructuras de datos que representan propiedades, valores y acciones que puede realizar el objeto.
// Todos los objetos tienen propiedades o atributos y comportamientos o acciones representados por pares de
// clave(key): valor(value)

// const computer = {
//     screenSize: 17,
//     model: 'MacBook Pro'
// }

// Para acceder a las propiedades y acciones del objeto se utiliza la nomenclatura del punto 

// const person = {
//     name: 'Juan',
//     age: 35,
//     sons: ['Laura', 'Diego']
// }

// console.log(person.name);
// console.log(person['name']);
// console.log(person.age);
// console.log(person.sons[0]);
// console.log(person.sons[1]);

//Buscando las claves
//Para recorrer objetos de muchos datos se puede utilizar
// for(const key in person){
//     console.log(key);
// }

//Imprimir los valores
// for(const key in person){
//     console.log(person[key]);
// }

//recorrer el array de sons y sacar nombres
//for(const son of person.sons){
//     console.log(son)
// }

// console.log(`Hola ${person.name}. Tienes ${person.age} años 
// y tus hijos se llaman ${person.sons.join(' y ')}`);