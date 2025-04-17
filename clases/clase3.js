/*
funciones en python: def sumar (a,b)
*/

// función expresada: Js es un lenguaje copilado:
// (el copilador lee todo el código y luego lo ejecuta)
console.log(sumar(2,3))

function sumar (a,b){
    return a+b
}
//No hace expresar la función antes de invocarla

// Otro método: función declarada.
// Acá si hay que hacerlo cronológicamente
let restar = function (a,b){
    return a-b;
}

// Otro método: función flecha
let masCien = a => a + 100;

// otro ejemplo
function duplicar(a){
    numero= Number(a)
    numero = numero*2
    return numero
}
/***********************************/
function dejarPasar (edad, acompaniado){
    if (edad >= 18 || acompaniado === true){
            return ('Puede pasar')
    }else if (acompaniado === false){
        return ('No puede pasar')
    }else{
        return ('Como dice tu mama, aca hay un error')
    }
}
console.log(dejarPasar(17,true))
console.log(dejarPasar(18,false))
console.log(dejarPasar(17,false))
console.log(dejarPasar(17,19))

// Funciones flecha del if

// Operador ternario: comprime el if.
let edad= 19
let acompaniado = true
let resultado = edad>18 || acompaniado ===true ? 'Puede Pasar' : 'No puede pasar';
console.log(resultado)

/*********************************/

let x=100
// variable iteradora; condicion; variación
for (let i=0; i<101 ; i++){
    console.log(i)
}

/* for con arrays */
//Notar uqe puedo usar de vuelta la i porque es una variable
//local.
let NUMEROS = [1,2,3,4,5]
for (let i=0; i<NUMEROS.length;i++){
    console.log(NUMEROS[i]+1)
}

/*************************** */

// Buscador en el array (también está de forma nativa)
function encontrarValor (array,valor){
    for ( let i=0; i< array.length; i++){
        if (valor === array[i]){
            return i
        }else{
            return -1
        }
    }
}

// Callback


//Llamo librería prompt-sync
const prompt = require('prompt-sync')();

const name = prompt('what is your name?');
