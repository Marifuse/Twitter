window.onload = function() {
  var boton = document.getElementById('click')[0];
  var texto = document.getElementById('Escritura')[0];
    boton.onclick = function() {
      if (texto.value == "") {
        alert("El campo está vacío");

      }
   }
}
