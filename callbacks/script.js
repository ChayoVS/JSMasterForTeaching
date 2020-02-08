// CALLBACKS

// Función que se ejecuta a través de otra función 
// No son asíncronas

// const getUser = (id, cb) => {
//     const user = {
//         name: 'Dorian',
//         id: id
//     }
//     if(id==2) cb('User not exist')
//     else cb(null, user)
// }

// getUser(1, (err, user)=> {
//     if(err) return console.log(err)
//     console.log(`User name is ${user.name}`)
// })

const users = [
    {
        id: 1, 
        name: 'Dorian'
    },
    {
        id: 2,
        name: 'Laura'
    }, 
    {
        id: 3, 
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1, 
        email: 'dorian@gmail.com'
    },
    {
        id: 2, 
        email: 'laura@gmail.com'
    }
]

// Caso tenemos una pequeña base de datos, aquí se va a elegir un usuario y con esa 
// respuesta del usuario se va a solicitar el email, el id 3 va a fallar a propósito 

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id)
    if(!user) cb(`Doesn't exist a user with id ${id}`)
    else cb(null, user)
}

//recuperar el email del usuario
const getEmail = (user, cb) => {
    const email= emails.find(email=> email.id === user.id)
    if(!email) cb(`${user.name} hasn't email`)
    else cb(null, {
        id: user.id,
        name: user.name,
        email: email.email
    })
}

//nos devuelve todos los usuarios del 1 al 2 correctamente excepto el 3 
getUser(3, (err, user) => {
    if(err) return console.log(err)
    getEmail(user, (err, res) => {
        if(err) return console.log(err)
        console.log(res)
    })
})


//se pueden complicar los callbacks y llegamos a un callback hell
// en base a esto llegaron las promesas
