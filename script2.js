    document.getElementById('formulario').addEventListener('submit', function (e){
    e.preventDefault();
    //Guardo constantes
    const nombre = document.getElementById('nombre').value.trim();
    const edad = document.getElementById('edad').value.trim();
    const carrera = document.getElementById('carrera').value.trim();

    //Creo un elemento de la tabla
    const fila = document.createElement('tr');
    // adjunto los valores a la tabla
    const celdaNombre=document.createElement('td');
    celdaNombre.textContent=nombre;

    const celdaEdad=document.createElement('td');
    celdaEdad.textContent=edad;

    const celdaCarrera=document.createElement('td');
    celdaCarrera.textContent=carrera;

    const bot=document.createElement('button');
    bot.textContent='Eliminar';
    const celdaEli=document.createElement('td');
    celdaEli.appendChild(bot);

      // Agrego celdas a la fila
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaEdad);
    fila.appendChild(celdaCarrera);
    fila.appendChild(celdaEli);
    //agrego la fila a la tabla
    document.getElementById('tabla').appendChild(fila);
    //Limpio form
    document.getElementById('formulario').reset();
});

//Eliminación de filas
// Delegación de evento para botón eliminar
document.getElementById('tabla').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') //Verifica si el clic fue en un <button>:
    {
      const fila = e.target.closest('tr'); // busca la fila más cercana
      const confirmar = confirm("¿Estás seguro de que querés eliminar esta fila?"); //Confirm
      fila.remove(); // la elimina del DOM
    }
  });
