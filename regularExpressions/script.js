/*
    Bases de Expresiones Regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda, 
        principalmente utilizada para la búsqueda de patrones de cadenas
        de caracteres u operaciones de sustituciones.

    sintaxis:
        /patron/
    
    Banderas: 
        i: ignore case. No diferencia entre mayúsculas y minúsculas
        g: global. Busca de forma global, es decir, no se para después
        de la primera coincidencia.

    Comodines: 
        -Sustitución: Define un comodín dentro del patrón: el símnolo 
        es el "."

        -Listado de caracteres válidos: entre corchetes se pone una 
        lista de los caracteres válidos. [aeiou] Con esto cogeríamos 
        todas las vocales.

        -Rangos: Entre corchetes si ponesmos un guión entre dos caracteres
        establecemos un rango. [a-z] Todas las letras minúsculas.

        -Mezcla entre rangos y listas: Podemos unir los dos anteriores en 
        una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" 
        y la letra "u"

        -Cadenas completas: Para establecer una cadena completa debe ir 
        entre paréntesis, si queremos más palabras irán separadas por un 
        pipe. (lorem|amet) es válida la palabra "lorem" y la palabra "amet"
        *Cuida los espacios porque cuentan
*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi 
const regEx2 = new RegExp('lorem', 'gi')
const regEx3 = new RegExp('/lorem/', 'gi')
// las tres son la misma expresión regular :) 


console.log(regEx.test(text))

// se obtiene lo mismo con, pero hay cosas más complejas que
// los métodos de string no pueden hacer: 
console.log(text.includes('Lorem'))


/*
        se usa el punto(s) para indicar espacios que pueden ser caracteres
        desconocidos entre ciertas letras por ejemplo una imagen jpg:
        / foto....jpg/g  a esto si queremos que un punto sea punto se usa
        \ escapar un caracter que quiere decir que eso se trate cómo el 
        carécter que significa, en el ejemplo anterior podemos observar 
        que para las extensiones se usa un punto quedaría más correcto: 
        foto....\.jpg 

        [abc] con esto toma todos los caracteres entre corchetes y esos son 
        automaticamente válidos, números [123] = 1, 2 y 3, para que sea 
        cadena completa sería entre paréntesis (12)

*/
