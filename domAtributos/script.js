// Atributos

// element.getAttribute('attribute')
// element.setAtributte('attribute', value)



// Clases 

// element.classList.add('class', 'class', ...)
// element.classList.remove('class', 'class', ...)
// element.classList.toggle('class' [,force])
// element.classList.contains('class')
// element.classList.replace('oldClass', newClass)

// Atributos directos 
// id 
// value

const title = document.getElementById('title');
const name = document.getElementById('name');

console.log(title)
console.log(name)



// console.log(name.getAttribute('type')); 
//el atributo type tiene como valor text
// también con id se accede


// Modifica el atributo, recibe 2 valores, el valor a modificar y por lo que se quiere modificar
name.setAttribute('type', 'number')