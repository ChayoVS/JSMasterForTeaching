//Se utiliza cuando una condición será true o false. al igual que if.
//Su ejecución puede tenr una o varias sentencias, en este caso irán 
//separadas por comas y entre parantésis.

//(condición) ? true:false

//(condición) ? 
// (primera sentencia,
// segunda setencia)
//  :
// (primera sentencia,
// segunda sentencia)

let num = 2;

//con una sola sentencia
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

//con dos o más sentoncias
(num % 2 == 0) ? 
    (
        console.log(`${num} es par`),
        console.log(`hola`)
    )
     : 
    (
        console.log(`${num} es impar`),
        console.log(`adios`)
    )

