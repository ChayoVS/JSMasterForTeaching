
// const capitalize = (s, arr) => {

//     let newArr = s.split('');
//     arr.map((i) => {

//     })

// }

// console.log(capitalize('hola'))

// console.log(capitalize('rosario', [2, 4, 6]))


// const meses = ['Enero', 'Marzo', 'Abril', 'Junio'];
// meses.splice(1, 0, 'Febrero');

// console.log(meses)

// meses.splice(4, 0, 'Mayo')
// console.log(meses)

// const differenceInAges = (ages) => {
//     const maxAge = Math.max(...ages);
//     const minAge = Math.min(...ages);
//     return [minAge, maxAge, maxAge-minAge]
// }
// console.log(differenceInAges([20, 40, 90, 6]))



// const index= (array, n) => {
//     return array.length > n ? Math.pow(array[n], n) : -1
// }
//   console.log(index([2, 3, 4], 2))


// const removeEveryOther = array => {
//     return array.filter((_, i) => i % 2 === 0)
// }
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'hi', 'hi2']))



// const twoOldestAges = (ages) => {
//     ages.sort((a, b) => a-b)
//     return ages.slice(-2)
// }

// console.log(twoOldestAges([34, 17, 28, 6, 64]))


// const findAll = (arr, n) => {
//     return arr.filter(i => n === i)
// }
// console.log(findAll([6, 9, 3, 4, 3, 82, 11, 3], 3))


// const findAll = (array, n) => {
//     const result = [];
//     array.forEach((value, index) => {
//       if(value === n){
//         result.push(index)
//       }
//     })
//     return result 
// }
// console.log(findAll([6, 9, 3, 4, 3, 82, 11, 3], 3))

//Mi solución
// const strCount = (str, letter) => {  
//     let count = 0;   
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === letter)
//         count++;
//     }  
//     return count;  
//   }

//solución corta 
// const strCount = (string, letter) => string.split(letter).length - 1



// const arrayPlusArray = (arr1, arr2) => {
//     let newArr = [...arr1, ...arr2]
//     return newArr.reduce((a, b) => a+b)
// }

// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))



// Promedios de una clase

const alumnos = [[5, 8, 6], [2, 5, 7], [8, 9, 10]];

const promedios = alumnos.map((alumno) => {
    let suma = alumno.reduce((a, b) => a+b);
    return suma/alumnos.length;
})

console.log(promedios)