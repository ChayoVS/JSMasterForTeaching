// Eventos

// Un evento es cualquiero cosa que sucede en nuestro documento. Por ejemplo
// -El contenido se ha leído
// -El contenido se ha cargado
// -El usuario mueve el ratón, pulsa una tecla, cierra ventana, etc.

// Element.addEventListener('event', callback)

// callback función anónima que se dispara cuando se ejecuta el evento

const button = document.getElementById('button')
const box = document.getElementById('box')


// button.addEventListener('click', () => {
//     console.log('CLICK')
// } )


// // la forma correcta es con hover
// box.addEventListener('mouseenter', ()=> {
//     box.style.background = "green"
// })

// box.addEventListener('mouseleave', ()=> {
//     box.style.background = "red"
// })



// Con Replace es la forma más correcta 
// box.addEventListener('mouseenter', ()=> {
//     box.classList.replace('red', 'green')
// })

// box.addEventListener('mouseleave', ()=> {
//     box.classList.replace('green', 'red')
// })




