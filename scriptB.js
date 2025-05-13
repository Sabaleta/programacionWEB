
// Función para agregar valor del form a lista
document.getElementById('formulario').addEventListener('submit', function (e){
    e.preventDefault();
    //obtengo el nombre y la lista.
    const nombre= document.getElementById('nombre').value.trim()
    const lista=document.getElementById('lista')
    //Creo elemento de la lista y guardo el nuevo nombre ahí
    const nuevoItem=document.createElement('li')
    nuevoItem.textContent=nombre
    //Appendeo el nuevo item a la lista
    lista.appendChild(nuevoItem)
})