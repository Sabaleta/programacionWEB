// Objetivo: Crear un formulario de 
// contacto con los campos: Nombre, Email, Comentario.
//  Al presionar “Enviar”, validar:

//1- Que ninguno esté vacío.

//2- Que el email tenga formato válido (usá regex).

//3- Si hay errores, mostrarlos debajo de cada campo.

//4- Si todo está bien, mostrar los datos en consola y limpiar el formulario.
document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se envíe el formulario
  
    // Inputs: importo variables a Js
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const comentario = document.getElementById("comentario").value.trim();
  
    // Elementos de error
    const errorNombre = document.getElementById("error-nombre");
    const errorEmail = document.getElementById("error-email");
    const errorComentario = document.getElementById("error-comentario");
  
    // Reset de errores: vacía mensajes antes de validar para evitar que queden
    //residuos de viejas validaciones
    errorNombre.textContent = "";
    errorEmail.textContent = "";
    errorComentario.textContent = "";
  
    let valido = true;
  
    // Validaciones
    if (nombre === "") {
      errorNombre.textContent = "El nombre es obligatorio.";
      valido = false;
    }
  // /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) esto es una expresión regular de validación
  //de email.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorEmail.textContent = "Email inválido.";
      valido = false;
    }
  
    if (comentario === "") {
      errorComentario.textContent = "El comentario no puede estar vacío.";
      valido = false;
    }
  
    if (valido) {
      console.log("Formulario válido:");
      console.log({ nombre, email, comentario });
  
      // Limpiar campos
      document.getElementById("form-contacto").reset();
      alert("Formulario enviado con éxito ✅");
    }
  });