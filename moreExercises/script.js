// Utilizando un bucle, mostrar la suma y la media de los números introducidos 
// hasta introducir un número negativo y ahí mostrar el resultado

// let suma = 0
// let contador = 0 

// do{
//     var numero =parseInt(prompt('Introduce números hasta que metas uno negativo', 0))

//     if(isNaN(numero)){
//         numero = 0
//     }else if(numero >= 0){
//         suma=suma + numero
//         contador++
//     }
//     console.log(suma)
//     console.log(contador)
// }while(numero >= 0)

// alert(`La suma de todos los números es: ${suma}`)
// alert('La media de todos los números es:' + (suma/contador))



// hacer un programa que muestre todos los números comprendidos entre dos números
// introducidos por el usuario
// const num1 = parseInt(prompt('Introduce un número', 0 ))
// const num2 = parseInt(prompt('Introduce otro número', 0))
// document.write(`<h1>De ${num1} a ${num2} están estos números</h1>`)
// for(let i = num1; i<=num2; i++){
//     document.write(`<h2>${i}</h2>`)
// }


//Mostrar todos los números impares entre 2 números introducidos con el teclado.
// const num1 = parseInt(prompt('Introduce un número', 0 ))
// const num2 = parseInt(prompt('Introduce otro número', 0))
// document.write(`<h1>De ${num1} a ${num2} están estos números impares</h1>`)
// for(let i = num1; i<=num2; i++){
//     if(i%2){
//         document.write(`<h2>${i} es impar</h2>`)
//     }
// }




// // Tabla multiplicar de un número introducido en pantalla
// const number = parseInt(prompt('¿De qué número quieres la tabla?'))
// for(let i = 1; i<=10; i++){
//     document.write(`${i}*${number}= ${i*number} <br>`)
// }
// // Tablas de multiplicar del 1-10
// for(let c = 1; c<=10; c++){
//     document.write(`<h1>Tabla del ${c}</h1>`)
// for(let i = 1; i<=10; i++){
//     document.write(`${i}*${c}= ${i*c} <br>`)
// }
// }




//Obtener divisores de un número
// const number = parseInt(prompt('Introduce un número', 0))
// for(let i = 1; i<=number; i++){
//     if(number%i === 0){
//         console.log('Divisor: ' + i)
//     }
// }



// const betterThanAverage= (classPoints, yourPoints) => {
//     let sum = 0
//     for(index of classPoints){
//     sum += index
//     }
//     let average = sum/classPoints.length
//     if (average < yourPoints){
//         return true
//     }else if(average > yourPoints){
//         return false
//     }
//     }
// console.log(betterThanAverage([1,2,3,4,5], 4))



// const noBoringZeros = n => {
//     while(n%10===0 && n!=0){n/=10;}
//     return n
// }

// console.log(noBoringZeros(3045000))
// // analizando

// // siempre que residuo de n entre 10 sea igual a 0 
// // y n no es 0 
// console.log(30450%10)
// console.log(1!=0)
// console.log(30450/10)




// CALCULADORA
// Pida dos números pantalla
// Si metemos uno mal que lo vuelva a pedir
// En el cuerpo de la página, en una alerta y por consola el resultado
// de sumar, restar, multiplicar y dividir esas dos cifras

// let num1 = parseInt(prompt('Introduce un número', 0 ))
// let num2 = parseInt(prompt('Introduce otro número', 0))

// while(num1 <0 || num2<0 || isNaN(num1) || isNaN(num2)){
//     num1 = parseInt(prompt('Introduce un número', 0 ))
//     num2 = parseInt(prompt('Introduce otro número', 0))
// }

// let result = alert(`La suma es: ${num1 + num2} 
//               la resta es: ${num1 - num2} 
//               la multiplicación es: ${num1 * num2} 
//               la división es ${num1/num2}`)

