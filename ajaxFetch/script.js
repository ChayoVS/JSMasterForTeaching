/*
    Fetch API
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    Tambipen provee un método global fetch() que proporciona una forma fácil y lógica de obtener recusos de forma 
    asíncrona por la red.
    Está basado en promesas, por lo cual tiene un response y un reject internos.
        Response tiene varios métodos
        arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el 
        contenido del archivo.
        blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el 
        contenido y se va a trabajar con el archivo directamente.
        clone(): Crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una 
        variable diferente.
        formData(): Se utiliza para leer los objetos formData
        json(): Convierte los archivos json en un objeto de JavaScript
        text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8

    
        Remplazo de XMLHttpRequest, no funciona con ciertos navegadores
*/

const button = document.getElementById('button')
button.addEventListener('click', () => {
    //Preguntar si soporta fetch el navegador
    // if(window.fetch != undefined) console.log('Fetch OK')
    // else console.log('Fetch not Works')

    //res = response = respuesta
    fetch('https://jsonplaceholder.typicode.com/users')
    //comprobando respuesta
    .then(res =>res.ok ? Promise.resolve(res) : Promise.reject(res))
    //Usando el método json
    .then(res =>res.json())
    //Mostrando la respuesta de solo el arreglo de objetos
    // .then(res=> console.log(res))
    
    .then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for(const userInfo of res){
            const listItem = document.createElement('li')
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }) 
})
