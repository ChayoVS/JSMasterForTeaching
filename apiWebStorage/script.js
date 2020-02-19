/* API WebStorage
        Los dos mecanismos en el almacenamiento web son los siguientes:

                sessionStorage mantiene un área de almacenamiento separada para 
                cada origen que está disponible mientras dure la sesión de la
                página (mientras el navegador esté abierto, incluyendo recargas
                de página y restablecimientos)

                localStorage hace lo mismo pero persiste incluso cuando el 
                navegador se cierra y se reabre.
        Ambos funcionan con clave:valor y tienen dos métodos fundametales setItem()
        para asignat una claev:valor y getItem() que recibe como parámetro la clave
        de la que queremos obtener el valor 
*/

const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // const person = {
    //     name: 'Dorian',
    //     email:'dorian@gmail.com'
    // }
    // sessionStorage.setItem('person', JSON.stringify(person))
    
    //Ejemplo guardando directamente key y value.
    // sessionStorage.setItem('name', 'Dorian')

    sessionStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML+= `<option>${form.key.value}</option>`

    form.reset()
    })

    keys.addEventListener('change', () => {
        document.getElementById('infoValue').textContent = 
        sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})

// borrando el storage
sessionStorage.clear()
//borrando 1 item con key
sessionStorage.removeItem('name')

// Todo se puede cambiar por localStorage 
