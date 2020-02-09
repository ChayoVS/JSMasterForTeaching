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
*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi 

console.log(regEx.test(text))

// se obtiene lo mismo con, pero hay cosas más complejas que
// los métodos de string no pueden hacer: 
console.log(text.includes('Lorem'))

