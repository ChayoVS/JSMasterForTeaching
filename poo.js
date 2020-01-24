// Conceptos fundamentales:

//Clase
//Herencia 
//Objeto
//Método
//Evento, entre otros.

//Si queríamos crear dos objetos persona se vería algo así:
// const persona = {
//     nombre: 'Juan',
//     apellido: 'García',
//     edad: 27
// }

// const persona2 = {
//     nombre: 'Marta',
//     apellido: 'Pérez',
//     edad: 35
// }
// Ahora se utiliza una clase, que es una plantilla que sirve cómo molde para crear objetos
// Cuando creamos un objeto, a esa acción se le denomina INSTANCIAR un objeto
// Necesitamos una función constructora. Se tiene que llamar constructor y se ejecuta cada vez que creemos un objeto.

// class Persona{
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre
//         this.apellido = apellido
//         this.edad = edad
//     }
// };
//this hace referencia al objeto que creamos
// nombre del objeto = nombre del parámetro 
// apellido del objeto = apellido del parámetro
// edad del objeto = edad del parámetro

// Se le pueden asignar propiedades que no haya en los parámetros, pero siempre utilizando this para      
// refereniciar al objeto
// this.datos = `${nombre} ${apellido} ${edad}`;

// // Los objetos pueden tener funciones asociadas a él. En ese caso se les denomina métodos.

// saludar(){
//     return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
// }

// // Para crear un objeto utilizando la clase o plantilla se hace con la palabra reservada new y el nombre de la clase que 
// // queremos utilizar

// const juan = new Persona('Juan', 'García', 23);

// // Una vez instanciado el objeto podemos acceder a sus propiedades y métodos utilizando la nomenclatura del punto o 
// // buscando su propiedad en el objeto
// juan.nombre
// juan.apellido
// juan.edad
// Juan.datos
// juan.saludar()

// juan['nombre']
// juan['apellido']
// juan['edad']
// juan['datos']
// juan['saludar']()

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

// se puede usar nombre porque está dentro de la función, no afuera y aquí se le llama argumento
        this.datos = `Me llamo ${nombre} ${apellido} y tengo ${edad} años`
    }
    saludar(){
        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años`
    }
};

const rosario = new Persona('Rosario', 'Vazquez', 29);
const marta = new Persona('Marta', 'García', 35);

console.log(rosario);
console.log(rosario.saludar());
