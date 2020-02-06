const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')


// con esto podemos observar el valor de la tecla presionada
// input.addEventListener('keyup', ()=> {
//     console.log(input.value);
// })


// información del tipo de evento, en este caso keyup
// input.addEventListener('keyup', (e)=> {
//     console.log(e)
// })


// toda la información de los eventos, al poner solo el addEvent.. toma la referencia de su componente padre que es window
// addEventListener('keyup', (e)=> {
//     console.log(e)
// })

// alert es un método de window
// window.alert() es lo mismo que un alert()


//despliega el valor de cada tecla
// input.addEventListener('keyup', (e) => {
//     console.log(e.key)
// })


// accedemos a nodos más específicos
// input.addEventListener('keyup', () => {
//     console.log(e.explicitOriginalTarget.attributes[0].nodeValue)
// })


// Objeto evento (e) target muy útil para profundizar en API's y valores
// Recordar target ya que hace referencia al punto donde se origina el evento

// toda la información de target, muestra las propiedades, tiene mucha información
// es muy utilizado
// button.addEventListener('click', (e)=>{
//     console.log(e.target)
// })



// Saber en que botón se hace click

// const gallery = document.getElementById('gallery')

// elegir varios elementos con un solo evento
// gallery.addEventListener('click', (e)=> {
//     console.log(e.target.textContent)
// })


// gallery.addEventListener('click', (e)=> {
//     e.target.classList.add('red')
// })


// método preventDefault

// Evita un evento hasta que se le indique otra cosa


const link = document.getElementById('link')

// evitamos que nos envíe a la página de google, se usa en forms, cuando se trabaja de forma asíncrona

link.addEventListener('click', (e) =>{
    e.preventDefault()
})


// se pueden forzar los Eventos
button.addEventListener('click', ()=> {
    input.value= 'has hecho click'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('El formulario se ha enviado')
})

button.click()

// se fuerza el envío del form
// form.submit()

