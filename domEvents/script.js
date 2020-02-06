// Eventos

// Un evento es cualquiero cosa que sucede en nuestro documento. Por ejemplo
// -El contenido se ha leído
// -El contenido se ha cargado
// -El usuario mueve el ratón, pulsa una tecla, cierra ventana, etc.

// Element.addEventListener('event', callback)

// callback función anónima que se dispara cuando se ejecuta el evento

const button = document.getElementById('button')
const box = document.getElementById('box')
const input = document.getElementById('input')

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



// Se usa para mover un elemento con el mouse
// box.addEventListener('mousedown', () => {
//     console.log('Has pulsado en la caja')
// })

// box.addEventListener('mouseup', () => {
//     console.log('Has soltado el botón izquerdo en la caja')
// })


// box.addEventListener('mousemove', () => {
//     console.log('Estás moviendo el ratón en la caja')
// })


// input.addEventListener('keydown', () => {
//     console.log('has pulsado una tecla')
// })

// input.addEventListener('keyup', () => {
//     console.log('has soltado una tecla')
// })

// input.addEventListener('keypress', () => {
//     console.log('estás pulsando una tecla')
// })

