// Cómo funciona la web? 

// -> Petición a través del protocolo HTTP

// <- Respuesta (HTML, CSS, JS...)


// Cuándo usamos AJAX

// Se hace la petición pero sólo solicitamos ciertos datos y cuándo llegan los guardamos en 
// un objeto y trabajamos con él

// <- {data} AJAX <- Respuesta(data)

// AJAX es asíncrono 

// Protocolo HTTP 
//https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto

// Códigos de estado de respuesta HTTP
// https://developer.mozilla.org/es/docs/Web/HTTP/Status


const button = document.getElementById('button')



button.addEventListener('click', ()=> {
    // Verificando dónde podemos utilizarlo
    let xhr
    if(window.XMLHttpRequest) xhr= new XMLHttpRequest()
    else xhr= new ActiveXObject('Microsoft.XMLHTTP')
    
    //método open, abrimos la petición
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    //Le indicamos que hacer con los datos
    xhr.addEventListener('load', (data) => {
        //Cambiamos el tipo de data a JSON
        const dataJSON = (JSON.parse(data.target.response))

        //recorremos cada uno de los usuarios
        const list = document.getElementById('list')
        for(const userInfo of dataJSON){
            const listItem = document.createElement('li')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            list.appendChild(listItem)
        }
    })

    //enviar petición 
    xhr.send()
})

