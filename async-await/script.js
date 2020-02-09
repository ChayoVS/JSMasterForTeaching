// const getName = async () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve('Chayo')
//         }, 1500)
//     })
// }

// const sayHello = () => {
//     const name = getName()
//     return `Hello ${name}`
// }

// console.log(sayHello())

//Cómo tarda la respuesta, solo devuelve el objeto promesa y no lo que debe devolver
// entonces agregamos otro async y await, pero no se resuelve aún por lo que hay que 
// llamar a la función y ejecutar su método then()

// const getName = async () =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve('Chayo')
//         }, 1500)
//     })
// }

// const sayHello = async () => {
//     const name =  await getName()
//     return `Hello ${name}` 
// }

// sayHello().then(res => console.log(res))

// Las principales diferencias en async/await es que las funciones deben ser declaradas
// con async, lo cual hace que la función automaticamente retorne una promesa.
// Cuando llamamos a esta función debemos usar await,  para esperar la respuesta de la
// promesa



//Reescribiendo ejercicio anterior de promesas

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



const getUser =  async (id) => {
    const user = users.find(user=> user.id == id)
        if(!user) throw new Error(`Doesn't exist a user with ${id}`)
        else return user
}


const getEmail = async (user) =>{
    const email = emails.find(email => email.id == user.id)
        if(!email) throw new Error(`${user.name} hasn't email`)
        else return({
            id: user.id,
            name: user.name,
            email: email.email
        })
}

const getInfo= async () => {
    try{
    const user = await getUser(id)
    const res = await getEmail(user)
    return `${user.name} email is ${res.email}`
    } catch(error){
        console.log(error)
    }
}

getInfo(3).then(res=> console.log(res))
