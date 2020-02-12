// str.charAt(índice)
// un índice entero entre 0 y 1 menos que la longitud de la cadena, si no 
// se proporciona ningún índice chartAt() utilizará 0
// const miCadena= 'You say goodbye'
// console.log(miCadena.charAt(2))  // devuelve u


// String.charCodeAt()
// devuelve un número indicando el valor unicode del carácter en el 
// índice proporcionado.


//String.fromCharCode(num1, ..., numN) 
//método estático que devuelve una cadena creada mediante el uso de una 
//secuencia de valores Unicode especificada.


// str.concat(cadena2, cadena3...)
// concatena dos o más cadenas, no cambia las cadenas existentes, retorna
// una nueva cadena.


// str.includes(palabra o frase a buscar[, posición])
// determina si una cadena de texto puede ser encontrada dentro de otra 
// cadena de texto, retornando true o false según corresponda. Se recomienda
// cómo posición 0 para que busque en toda la cadena de texto.


// str.trimEnd()
// Elimina los espacios al final de una cadena


// str.trim()
// Una nueva cadena que representa la cadena de llamada sin espacios en blanco 
// de ambos extremos.


// str.toLowerCase()
// devuelve el valor en minúsculas de la cadena.


// str.toUpperCase()
// método devuelve el valor convertido en mayúsculas de la cadena.


// str.repeat(conteo)
//construye y devuelve una nueva cadena que contiene el número especificado 
// de copias de la cadena en la cual fue llamada, concatenados.
// 'abc'.repeat(-1);   // RangeError
// 'abc'.repeat(0);    // ''
// 'abc'.repeat(1);    // 'abc'
// 'abc'.repeat(2);    // 'abcabc'
// 'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
// 'abc'.repeat(1/0);  // RangeError


// str.substring(indiceA[, indíce B])
// método devuelve un subconjunto de un objeto String.
// asume una función print ya definida
// let cualquierCadena = "Mozilla";
// // Muestra "Moz"
// print(cualquierCadena.substring(0,3));
// print(cualquierCadena.substring(3,0));

// // Muestra "lla"
// print(cualquierCadena.substring(4,7));
// print(cualquierCadena.substring(7,4));

// // Muestra "Mozill"
// print(cualquierCadena.substring(0,6));
// print(cualquierCadena.substring(6,0));

// // Muestra "Mozilla"
// print(cualquierCadena.substring(0,7));
// print(cualquierCadena.substring(0,10));

// substring extrae caracteres desde indiceA hasta indiceB sin incluirlo. 
// En particular:

// Si indiceA es igual a indiceB, substring devuelve una cadena vacía.
// Si se omite el indiceB, substring extrae caracteres hasta el final de la cadena.
// Si el argumento es menor que 0 o es NaN, se trata como si fuese 0.
// Si el argumento es mayor que nombreCadena.length, se trata como si fuese nombreCadena.length.
// Si indiceA es mayor que indiceB, entonces el efecto de substring es como si los dos 
// argumentos se intercambiasen; por ejemplo, cadena.substring(1, 0) == cadena.substring(0, 1).


// str.slice(inicioTrozo[, finTrozo])
// Extrae una sección de una cadena y devuelve una cadena nueva.
// let cadena1 = "La mañana se nos echa encima.";
// let cadena2 = cadena1.slice(3, -2);
// console.log(cadena2); 
// devuleve: mañana se nos echa encim
// El siguiente ejemplo usa slice() con índices negativos.
// var cad = "La mañana se nos echa encima.";
// cad.slice(-3);     // retorna 'ma.'
// cad.slice(-3, -1); // retorna 'ma'
// cad.slice(0, -1);  // retorna 'La mañana se nos echa encima'


// str.split([separador][,limite])
// separador
// Especifica el carácter a usar para la separación de la cadena. El separador es tratado como 
// una cadena o como una expresión regular. Si se omite el separador, el array devuelto contendrá 
// un sólo elemento con la cadena completa.
// limite
// Opcional. Entero que especifica un límite sobre el número de divisiones a realizar. El método 
// split() todavía se divide en todas las concordancias del separador, pero divide la matriz 
// devuelta en la cantidad de elementos impuesta por el limite.


// str.lastIndexOf(valorBusqueda[, indiceDesde])
// valorBusqueda
// Una cadena que representa el valor que se desea buscar.
// indiceDesde
// La localización dentro de la cadena que realiza la llamada desde donde comenzará la búsqueda. 
// Puede ser cualquier entero entre 0 y la longitud de la cadena. El valor predeterminado es la 
// longitud de la cadena.

