// Atributos

// element.getAttribute('attribute')
// element.setAtributte('attribute', value)



// Clases 

// element.classList.add('class', 'class', ...) añadir clases
// element.classList.remove('class', 'class', ...) remover clases
// element.classList.toggle('class' [,force]) para menús de móviles
// element.classList.contains('class') devuelve true o false si tiene la clase o no
// element.classList.replace('oldClass', newClass) Reemplaza la clase

// Atributos directos 
// id 
// value

const title = document.getElementById('title');
const name = document.getElementById('name');




// console.log(name.getAttribute('type')); 
//el atributo type tiene como valor text
// también con id se accede


// Modifica el atributo, recibe 2 valores, el valor a modificar y por lo que se quiere modificar
// name.setAttribute('type', 'number')


// title.classList.add('main-title');
// title.classList.remove('main-title')
// if(title.classList.contains('title')) console.log('title tiene la clase title')
// else console.log('No tiene la clase title')

// title.classList.replace('title', 'main-title');

// console.log(title)
// console.log(name)

// console.log(title.innerHTML) // recoge las etiquetas dentro del text
// console.log(title.textContent) // este no recoge las etiquetas, sólo texto
// console.log(title.id)

// // el value sirve para recoger datos de formulario
// console.log(name.value.length)
