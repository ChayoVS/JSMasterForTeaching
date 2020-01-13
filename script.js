//String y Math métodos y propiedades. 
let palabra = 'Hola Mundo';


//Propiedades length devuelve longitud de la cadena
// console.log(palabra.length);


//Métodos. Devuelven una cadena nueva, cadena original no se modifica.
//toUpperCase() -> Devuelve la cadena a mayúsculas
// console.log(palabra.toUpperCase());


//guardar el valor anterior 
// let palabraMayus= palabra.toUpperCase();
// console.log(palabraMayus);


//toLowerCase() -> Devuelve a minúsculas
// console.log(palabra.toLowerCase())


//indexOf(string) -> Devuelve la posición  en la que se encuentra el 
//string, si no lo encuentra devuelve -1
// console.log(palabra.indexOf('a'));


//replace(valor a buscar, valor nuevo) -> Remplaza el fragmento de la 
//cadena que le digamos y pone el valor nuevo 
//console.log(palabra.replace('Mundo', 'Youtube'));


//substring(inicio [,fin]) el fin es opcional -> Extrae los caracteres 
//desde el inicio hasta el fin (final no se incluye)
//si no incluye fin extrae hasta el último caracter.
//console.log(palabra.substring(3));
//console.log(palabra.substring(3, 7));


//slice (inicio [,fin]) Igual que el substring pero admite valores 
//negativos, si ponemos valores negativos empezará desde atrás 
//si no se incluye fin extrae hasta el último caracter
//(2, -4) Cuenta en el tercer caracter y los 4 últimos no los considera
//console.log(palabra.slice(-3));
//console.log(palabra.slice(0, -2));


//trim() -> Elimina espacios al inicio y al final de la cadena
//let cadena = '   Hola Youtube, estamos trabajando con cadenas  ';
//console.log(cadena.trim());
//Evita errores en cadenas de texto de formulario.


//startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza        
//con ese valor. Devuelve true o false
// console.log(palabra.startsWith('H'));   devuelve true
// console.log(palabra.startsWith('h'));   devuelve false
// console.log(palabra.startsWith('M', 5)) devuelve true


//endsWith(valor [,longitud]) -> Sirve para saber si la cadena termina 
//con ese valor. Devuelve true o false.
// console.log(palabra.endsWith('o'));
// console.log(palabra.endsWith('a', 4));
// console.log(palabra.endsWith('n', 8));
// console.log(palabra.endsWith('Mundo'));


//includes(valor [,inicio]) -> Igual que indexOf() pero devuelve true   
// o false

//repeat(valor) -> Repite el string el número de veces que le indiquemos
// let cadena2 = 'Hola';
// console.log(cadena2.repeat(3));
// console.log('r'.repeat(10));


//Template strings

// let nombre = 'Juan';
// let apellido = 'Gómez';
// let edad = 20; 

// console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
// console.log(`Hola ${nombre} ${apellido}. El año que viene, tendrás ${edad + 1} años.`);

//Objeto Math 
//Objeto estático. Tenemos que usar su nombre para utilizarlo.


//Propiedades
//Pi
// console.log(Math.PI);
//constante de euler 
// console.log(Math.E);


//Métodos 
//Math.abs(x) Develve valor absoluto de x
//Math.ceil(x) Devuelve el entero más pequeño mayor o igual que un número
//Math.floor(x) Devuelve el entero más grande menor o igual que un número
//Math.pow(x, y) Devuelve la potencia de x elevado a y 
//Math.random() Genera un número pseudoaleatorio entre 0 y 1
//Math.round(x) Devuelve el valor de un número redondeado al entero más cercano
//Math.sign(x) Devuelve el singo de x, positivo, negativo o cero
//Math.sqr(x) Deveulve raíz cuadrada de x

//Devuelve un número aleatorio entre 0 y 100 redondeado
//console.log(Math.round(Math.random()*100));
//número aleatorio entre dos números
//console.log(Math.random()*(max-min)+min)

