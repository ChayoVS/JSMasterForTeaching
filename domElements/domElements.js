/* 
document.getElementById('id') - Acceder a un elemento a través de su id
document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS
document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

/* const title = document.getElementById('title')
Modificar contenido de forma dinámica
title.textContent = 'DOM - Accediendo a nodos' */

/* const paragraph = document.querySelector('.paragraph')
descender desde el padre hasta el elemento al que queremos acceder
const span = document.getElementById('title').querySelector("span") */

const paragraphs = document.querySelectorAll('.paragraph')
console.log(paragraphs)

//esta convención aún da problemas en varios navegadores
//const paragraphsSpread = [...document.querySelectorAll('.paragraph')]
//mejor usar esta
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

paragraphs[0].style.color = 'red'

//un node list no es un array, así que esto no sirve
//paragraphs.map(p => p.style.color = 'green')

//paragraphsSpread.map(p => p.style.color = 'green')

paragraphsArray.map(p=>p.style.color='blue')
