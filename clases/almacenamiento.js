console.log('hola')
let nombreUsuario=document.getElementeById('Guardar nombre').addEventListener
('Click', function() {
    let nombreUsuario=document.getElementById('nombre').value
    console.log(nombreUsuario)
    localStorage.setItem('nombreLocal',nombreUsuario)
})
window.addEventListener('load',
function(){
    document.getElementById('nombre').value =
    localStorage.getItem('nombreLocal')
})

localStorage.removeItem('nombreLocal')
localStorage.clear()

console.log(JSON.stringify(usuario))
let usuarioJsoneado = JSON.stringify(usuario)
let usuarioParseado = JSON.parse(usuarioJsoneado)
console.log(usuarioParseado.edad)
console.log(usuarioParseado)
/* Buscar valor de dólares en página mediante API */
console.log(fetch('https://dolarapi.com/v1/dolares'))

/* API es una Interfaz de Programación de Aplicaciones */
/* https://grid.layoutit.com/ */


