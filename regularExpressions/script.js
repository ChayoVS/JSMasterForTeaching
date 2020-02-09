/*
    Bases de Expresiones Regulares:
        Son una secuencia de caracteres que forma un patrón de búsqueda, 
        principalmente utilizada para la búsqueda de patrones de cadenas
        de caracteres u operaciones de sustituciones.

    Página útil: https://regex101.com/

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
        establecemos un rango. [a-z] Todas las letras minúsculas. Tabla ASCII.

        -Mezcla entre rangos y listas: Podemos unir los dos anteriores en 
        una sola expresión. [0-5ou] Serían números del 0 al 5, la letra "o" 
        y la letra "u"

        -Cadenas completas: Para establecer una cadena completa debe ir 
        entre paréntesis, si queremos más palabras irán separadas por un 
        pipe. (lorem|amet) es válida la palabra "lorem" y la palabra "amet"
        *Cuida los espacios porque cuentan.

    Delimitadores:
        ^ Antes de este símbolo no puede haber nada
        $ después de este símbolo no puede haber nada

    Cantidad:
        -llaves: Lo que está antes tiene que aparecer la cantidad exacta de 
        veces. Hay 3 combinaciones posibles. 
        {n} Se tiene que repetir n veces
        {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
        {n,} Se tiene que repetir cómo mínimo n veces y sin máximo
        ^[a-zA-Z]{1,3}@{1}$
    
        -asterisco: lo que está antes del asterisco puede estar, puede no 
        estar y se puede repetir 
        -interrogación: lo que está antes de la interrogación puede no estar,
        pero si está solo puede aparecer una vez.
        .*@.*\..*

        -interrogación: lo que está antes de la interrogación puede no estar,
        pero si está, solo puede aparecer una vez.
        ^[ae]?$

        -operador más: lo que está antes del + tiene que estar una vez como 
        mínimo. 
        A-[0-9]+
    
    Caracteres:
        \s coincide con el caracter de espacio, entre ellos incluidos espacio, 
        tab, salto de página, salto de línea y retorno de carro
        ^[a-zA-Z]+\s[a-zA-Z]+$

        \S coincide con todo menos los caracteres de espacio 
        ^\S{5}$

        \d: Coincide con un carácter de número. Equivalente a 
        [0-9] ^\d{5}$

        \D: Coincide con cualquier carácter no numérico. Equivalente a 
        [^0-9] ^\D{5}$

        \w: Coincide con cualquier carácter alfanumérico, incluyendo el guión bajo. 
        Equivalente a [A-Za-z0-9_] ^\w+@$

        \W: Coincide con todo menos caracteres de palabra. ^\W+$

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
