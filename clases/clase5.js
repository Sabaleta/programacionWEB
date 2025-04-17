
/* DOM: document object model */
//El DOM es una representación del documento HTML como un 
// árbol de nodos. Cada elemento (etiqueta), texto, atributo, etc., es un nodo.





/* Selección de elementos */
document.getElementById("mi-id");
document.getElementsByClassName("mi-clase");
document.querySelector("div");
document.querySelectorAll("p");

/* Crear y modificar elementos */
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Hola mundo!";
document.body.appendChild(nuevoParrafo);  // lo agrega al final del <body>

nuevoParrafo.setAttribute("id", "parrafo1");
nuevoParrafo.removeAttribute("id");

/*Eliminar elementos */
document.body.removeChild(nuevoParrafo);

/* Eventos */
const boton = document.querySelector("button");
boton.addEventListener("click", () => {
  alert("¡Hiciste clic!");
});



