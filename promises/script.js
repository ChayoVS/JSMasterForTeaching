//Viene del tema de callbacks
// PROMESAS
// Promesa es un objeto que dentro tiene dos callbacks

//Primero la base de datos
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



const getUser = (id) => {
    const user = users.find(user=> user.id == id)
    return promise = new Promise((resolve, reject) => {
        if(!user) reject(`Doesn't exist a user with ${id}`)
        else resolve(user)
    })
}


const getEmail = (user) =>{
    const email = emails.find(email => email.id == user.id)
    return promise = new Promise((resolve, reject) => {
        if(!email) reject(`${user.name} hasn't email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })

}

//leer el contenido de las promesas 
// siempre se manejan then para resolverla y catch para indicar errores

// getUser(2)
// .then(user =>getEmail(user))
// .then(res => console.log(res))
// .catch(err=>console.log(err))


// Se simplifica más
getUser(2)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)
