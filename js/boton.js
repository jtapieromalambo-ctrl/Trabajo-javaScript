// Espera a que el contenido cargue
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona el botón por su id
  const boton = document.getElementById("btnMensaje");

  // Agrega un evento al botón
  boton.addEventListener("click", function() {
    alert("bienvenido al curso práctico de javascript 🎉");
  });
});
