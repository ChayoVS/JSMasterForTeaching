// Insertar y eliminar elementos II
/*
    parent.insertBefore(newElement, referenceElement) -Insertar un elemento
    antes del elemento de referencia

    SOPORTE TOTAL 
    parent.insertAdjancentElement(position, element)
    parent.insertAdjancentHTML(position, HTML)
    parent.insertAdjancentText(position, text)


    positions:
    beforebeing -Antes de que empiece (hermano anterior)
    afterbeing -Después de que empiece (primer hijo)
    beforeend -Antes de que acabe (último hijo)
    afterend -Después de que acabe(hermano siguiente)

    parent.replaceChild(newChild, oldChild) -Remplaza un hijo 
    por otro

*/

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = 'Soy el elemento nuevo'

// list.appendChild(newElement)
// list.insertBefore(newElement, list.children[1])

// list.insertAdjacentElement('beforebegin', newElement)


// list.children[0].insertAdjacentElement('beforebegin', newElement)
// Son lo mismo las dos expresiones
// list.insertAdjacentElement('afterbegin', newElement)


// list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
// list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')


// list.replaceChild(newElement, list.children[1])


/*
    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like

    positions: 
        parent-before() -Antes de que empiece (hermano anterior)
        parent.prepend() -Después de que empiece (primer hijo)
        parent.append() -Antes de que acabe (último hijo)
        parent.after() -después de que acabe (hermano siguiente)

        child.replaceWith(newChild)

    Clonar y eliminar elementos
        element.cloneNode(true|false) -Clona el nodo. Si le pasamos true
        clona todo el elemento con los hijos, si le pasamos false clona
        todo el elemento sin hijos
        element.remove() -Elimina el nodo del DOM
        element.removeChild(child) -Elimina el nodo hijo del DOM 
*/


// list.before(newElement)
// list.children[0].before(newElement)
// list.prepend(newElement)
// list.append(newElement)

// list.children[0].replaceWith(newElement)

//Clonando elementos
// list.after(list.cloneNode(true))
// list.remove()
// list.removeChild(list.children[1])
