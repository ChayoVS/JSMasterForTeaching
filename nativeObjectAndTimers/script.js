const button = document.getElementById('button')

/*
Objeto window -Es el objeto global, de él descienden los objetos:
    alert()
    prompt()
    confirm()
*/

// alert('Mensaje') = window.alert('mensaje')

// Esto hará que al hacer click en cualquier parte del documento se despliegue la información
// es útil para saber actividad de los usuarios
// addEventListener('click', (e) => {
//     console.log(e)
// })

// if(confirm('¿Acepta?')){
//     console.log('El usuario aceptó');
// }else{
//     console.log('El usuario no aceptó')
// }


/*
Objeto console -Es el objeto que contiene la consola del 
navegador
https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

// // la diferencia es que sale todo la información de los nodos del botón con dir
// console.log(button)
// console.dir(button)

// //Para indicar errores
// console.error('error') 

const person = {
    name: 'Dorian',
    age: 30,
    email: 'dorian@gmail.com'
}

// se observan las propiedades del objeto en forma de tabla.
// console.table(person)



/*
    Objeto location -Es el objeto que contiene la barra de
    direcciones
        https://developer.mozilla.org/es/docs/Web/API/Location
        location.href -Salta la url de la página actual
        location.protocol -Protocolo usado http, https...
        localion.host -Dominio de la página 
        location.pathname -Subdirectori dónde estamos
        location.hash -Muestra información de los #
        location.reload() -Recarga la página 
*/

// con location.href podemos tambíen redirigir a otras páginas


/*
    Objeto history  //historial de las páginas revisadas
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    back()   //nos regresa a una página anterios
    forward()  // nos regresa a una página adelante
    go(n|-n)  //indicar con los parámetros las páginas para adelantar o regresar

    length  // número de páginas visitadas

*/


/*

    Objeto Date
    https://developer.mozilla.org/es/docs/Web/Javascript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref_obj_date.asp

*/

// Para usar el objeto date hay que instanciarlo
// const date = new Date()

// //Las fechas siguen el calendario anglosajón, empieza a contar de 0 tanto días cómo meses
// // esto indica el día 0-6
// console.log(date.getDate)
// // día del mes
// console.log(date.getDay)


// console.log(date.getDate)
// //fecha  y hora exacta
// console.log(date)


/*
    Timers
        Timeout:
        https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

        setTimeout(() => {code}, delay-in-miliseconds) -Hace que se ejecute la 
        función después del delay. Si lo referenciamos mediante una            
        variable/constante podemos pararlo con clearTimeout(referencia)

        Interval:
        https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

        setInterval(() => {code}, delay-in-miliseconds) -Hace que se ejecute la
        función cada delay milisegundos. Si lo referenciamos mediante una 
        variable/constante podemos pararlo con clearInterval(referencia).
*/

// button.addEventListener('click', ()=> {
//     //setTimeout(saludar, 3000)     //función externa
//     setTimeout(()=> {
//         console.log('Hola')
//     }, 3000)
// })

// const saludar = () => {
//     console.log('Hola')
// }



// // Se detendrá la ejecución
// button.addEventListener('click', ()=> {
//     //setTimeout(saludar, 3000)     //función externa
//     const timeout = setTimeout(()=> {
//         console.log('Hola')
//     }, 3000)
//     clearTimeout(timeout)
// })


// //Paramos la ejecución con el botón 
// const timeout = setTimeout(()=> {
//     console.log('Adiós')
// }, 3000)

// button.addEventListener('click', ()=> {
//     clearTimeout(timeout)
// })


// const despedirse = () => {
//     console.log('adios')
// }

//Ejecuta por intervalos de 3 segundos de tiempo
// const interval = setInterval(despedirse, 3000)



// let cont = 0 

// const interval = setInterval(()=> {
//     console.log(cont)
//     cont++
// }, 2000)

// button.addEventListener('click', () => {
//     clearInterval(interval)
// })
