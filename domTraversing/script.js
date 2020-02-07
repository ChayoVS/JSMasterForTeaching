// Recorrer el DOM (DOM Traversing)

/*
    Padre -parent (Nodo del que desciende)
        -parentNode -Devuelve el nodo padre (que puede no ser un elemento)
        -parentElement -Devuelve el nodo elemento padre

        NOTA 
        Los nodos del tipo Document y DocumentFragment nunca van a tener un 
        elemento padre, parentNode devolverá null siempre

    Hijos - child (Nodo que desciende de un padre)
        -childNodes -Devuelve todos los nodos hijos
        -children -Devuelve todos los nodos elementos hijos
        -firstChild -Devuelve el primer nodo hijo
        -firstElementChild -Devuelve el primer nodo elemento hijo
        -lastChild -Devuelve el primer nodo hijo
        -lastElementChild -Devuelve el último nodo elemento hijo
        -hasChildNodes() -Devuelve true si el nodo tiene hijos y false
        si no los tiene
    
    Hermanos -siblings (Nodo al mismo nivel)
        -nextSibling -Devuelve el siguiente nodo hermano
        -nextElementSibling
        -previousSibling
        -previousElementSibling

// Método recién creado, se está testesando al 2019
    Cercano 
        -closest(selector) -Selecciona el nodo más cercano que cumpla
        con el selector.
*/

const parent = document.getElementById('parent')

// console.log(parent.parentNode); 
//Su padre sería nav, junto con parentElement devuelven lo mismo


//sería null ya que document es el nodo máximo padre
// console.log(document.parentNode)

//podemos llegar a niveles más altos 
// console.log(parent.parentNode.parentNode.parentNode); 


// console.log(parent.childNodes)

// Más habitual
// console.log(parent.children[2])
// console.log(parent.firstChild)
// console.log(parent.firstElementChild)
// console.log(parent.lastChild)
// console.log(parent.lastElementChild)

// console.log(parent.hasChildNodes())
// console.log(parent.firstChild.hasChildNodes())

