// const calculator = (num1, num2) => {
//     console.log(`Suma = ${num1+num2}`)
//     console.log(`Resta = ${num1-num2}`)
//     console.log(`Multiplicación = ${num1*num2}`)
//     console.log(`División = ${num1/num2}`)
//     console.log(`*********************************`)
// }

// //Invocando  la función en otra 
// for(let i = 1; i<=10; i++){
//     console.log(i)
//     calculator(i, 8)
// }


// más de spread  
// se puede pasar cómo parámetro
// const fruitList = (fruit1, fruit2, ...rest) => {
//     console.log(`Fruta 1: ${fruit1}`)
//     console.log(`Fruta 2: ${fruit2}`)
//     console.log(rest)
// }

// fruitList('Naranja', 'Fresa', 'Manzana', 'Sandía', 'Pera', 'Melón', 'Durazno')




//  callback
// let sum = (num1, num2, sumAndShow, sumForTwo) =>{
//     let add = num1 + num2
//     sumAndShow(add)
//     sumForTwo(add)
//     return add
// }

// sum(5, 7, dato =>{
//     console.log(`La suma es: ${dato}`)
// },
// dato =>{
//     console.log(`La suma por dos es: ${dato*2}`)
// })





//Construyendo botones 
// let i = 1;
// let body = document.getElementsByTagName("body")[0];

// for (i; i <= 20; i++) {
//   let button = document.createElement("button");
//   button.innerHTML = 'Button '+i;
//   body.appendChild(button);
//   button.addEventListener ("click", function() {
//     alert(this.innerHTML);
//   });
// }





// 1.pida 6 númerospor pantalla y los meta en array
// 2. mostrar el array (todos lo elementos) en página y consola
// 3. Ordenar el array y mostrarlo
// 4. Invertir el orden y mostrarlo
// 5. Mostrar cuántos elemetos tiene el array
// 6. Búsqueda de un valor introducido por el usuario, encuentra y el índice.

// let numbers = new Array(6)
let numbers = []
for(let i = 0; i<= 5; i++){
    // numbers[i]= parseInt(prompt('Introduce un número', 0))
    numbers.push(parseInt(prompt('Introduce un número', 0)))
}
//Mostrar el array por consola
console.log(numbers)

// Mostrar en la página
document.write(`<h1> Contenido del array</h1>`)
numbers.forEach((number, index) => {
    document.write(`<strong> ${number} </strong><br/>`)
})

//ordenar 
numbers.sort()
