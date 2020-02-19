// A lot of Problems 
// Practice, practice 


// const simpleArraySum = (arr) => {
//     let cont = 0 
//     for(let index of arr){
//         cont += index
//     }  
//     return cont
// }

// console.log(simpleArraySum([5, 3, 7, 5]))


// contador debe ser manipulado por mi 


// const matrix = [[1, 2, 3],
//                 [4, 5, 6],
//                 [7, 8, 9]]

// console.log(matrix [2] [0])

// const diagonalDifference = (arr) => {
//     let sum1 = (arr[0][0]) + (arr[1][1]) + (arr[2][2])
//     let sum2 = (arr[0][2]) + (arr[1][1]) + (arr[2][0])
//     return Math.abs(sum3 = sum1 - sum2)
// }

// let result = diagonalDifference(matrix)

// Recorrer una matriz 

// for(let i = 0; i<matrix.length; i++){
//     console.log([i])
// }

// matrix.forEach((index) => {
//  console.log(index)
// })

// for(index of matrix){
//     console.log(index)
// }
// Hacer lo mismo con otras matrices



// const squareDigits= (num) => {
//    const arrayOfNumbers= Array.from(String(num), Number)
//     const squareNumbers =  arrayOfNumbers.map(number => number* number)
//     const arrayToNumber = squareNumbers.join('')
//     return +arrayToNumber 
// }
// console.log(squareDigits(9119))


// let summation = (num) => {
//     let sum = 0
//     for(let i = 0; i<=num; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(summation(8))


// const validatePIN = (pin) =>  {
//     return /^(\d{4}|\d{6})$/.test(pin)
//    }
// console.log(validatePIN(a78059))


let numberByNumber = n => {
    let cont = 0;
    for(let i = 1; i<=n; i++){
        cont += i  
    }
    return cont
}
console.log(numberByNumber(6))

