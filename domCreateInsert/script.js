// Dom - Crear e insertar elementos

// Crear un elemento: document.createElement(elemet)
// Escribir texto en un elemento: element.textContent = texto
// Escribir HTML en un elemento: element.innerHTMl = código HTML

// Añadir un elemento al DOM: parent.appendChild(element)
//Siempre se necesita al padre 

// Fragmentos de código: document.createDocumentFragment()

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')


// Crear un elemento 

// const itemList = document.createElement('li')
// itemList.textContent= 'Lunes'

// daysList.appendChild(itemList)
// console.log(itemList)

// necesitamos meter parte del texto en un span para el h1
title.innerHTML = 'DOM - <span> Crear e insertar elementos I</span>'


// // Ingresar un arreglo entero 
const fragment = document.createDocumentFragment()

// for (const day of days) {
//     const itemList = document.createElement('li')
//     itemList.textContent= day
//     fragment.appendChild(itemList)
// }

// console.log(fragment)

// daysList.appendChild(fragment)

// con lo anterior se ahorran recursos de navegación


for (const day of days){
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

selectDays.appendChild(fragment);

// si se cambia el array, se inserta en automático
