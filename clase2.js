/* Definición de variables */
let numero = 10
/* Datatypes: 
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object */

/* console.log(): Para imprimir mensajes y valores en la consola en JavaScript */
console.log(numero)

/*Constante: establece variables que no pueden cambiar */
const apodo = 'sabe'

/* Array */
let array = [1,2,3,4]
const variadito = [1, 'asd', True]
const Matriz = [[1,2,3],[4,5,6]]
/* Modificación de valores en el array: puedo modificar
 los valores de un array, lo que no puedo es reescribir la 
 variable.*/
array.push(5)

/* Objetos */
let mejorProfesor =
{
  nombre: 'Esteban',
  apellido: 'Piazza',
  edad: 32,
  profesor: true,
  alumno: false,
  cumplirAnios: function()
  {
    this.edad=this.edad+1
  }
  }
/* Array de objetos literales*/
let usersConversation = [
    {
      id: 1,
      user_name: "Paul",
      send: "02/03/2023",
      send_by: "alex@email.com",
      received: "03/03/2023",
      viewed: true,
      message: "Hola Paul, ¿Cómo estás?",
    },
    {
      id: 2,
      user_name: "Alex",
      send: "03/03/2023",
      send_by: "paul@email.com",
      received: "04/03/2023",
      viewed: false,
      message: "Hola Alex, muy bien gracias y tú",
    },
  ];
//asd
/* Acceso a objetos de array */

/* Operadores:
or: ||
and: && */
console.log(1||2)
console.log(1&&2)
/*Valores con valor false */
    // if(false)
    // if(null)
    // if(undefined)
    // if(NaN)
    // if(0)
    // if(-0)
    // if(0n)
    // if(-0n)
    // if("")
    // if('') 
    // if(` `)

/* Operadores matemáticos:
a + b
a - b
a/b
a%b (resto) 
a*b
a**b
*/

/* operaciones (hace cosas falopa):
console.log('11'+1)= '111'
console.log('11'-1)= '10'
*/ 

//Operadores aritméticos
// 1>2 : false
// 1>=2 : false
// 1!=2 (distinto debil): true
// 1 == '1' (igual debil) : true
// 1 === '1' (igual fuerte) : false 

// *Parseo de datos (cambiar tipos de datos)*
// Number() : cambia a número
// parseInt() : cambia a numero y redondea para abajo
// parseFloat() : cambia a numero y redondea para arriba
// typeof() : nos dice que tipo de dato es
// String(x) o x.toString : cambiar un dato a string
// x.toFixed(n) : recorta a 'n' decimales

