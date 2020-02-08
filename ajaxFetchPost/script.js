/*
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro.
        fetch(url, {
            method: 'POST',
            body: Los datos que envíamos. Si es un objeto hay que convertirlo
            con JSON(stringify),
            headers: {
                cabeceras de información sobre lo que estamos enviando 
                https://developer.mozilla.org/es/docs/Web/HTTP/Headers
            }
        })
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {

    const newPost = {
        title: 'A new post',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        userId: 1
    }
    //Enviar objetos: Objeto con datos escritos, convertir el objeto a formato JSON para que la API lo interprete
    // console.log(newPost)
    // console.log(JSON.stringify(newPost))
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => res.json())
    .then(data => console.log(data))
})
