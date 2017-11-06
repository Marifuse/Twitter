//Evento Click Button y generación de un nuevo div con el Tweet
window.onload = function() {
  var boton = document.getElementsByName('Tweet')[0];
  var texto = document.getElementById('Escritura');
  var historial = document.getElementsByName('linea')
    boton.onclick = function() {
      if (texto.value == "") {
        alert("El campo está vacío");
      } else {
        var cuadroTweet = document.createElement("div");
        cuadroTweet.classList.add("respuesta");
        var fecha = document.createElement("span");
        var tweet = document.createElement("p");
        cuadroTweet.appendChild(fecha);
        cuadroTweet.appendChild(tweet);
        cuadroTweet.className = "cuadro3"
        fecha.textContent = new Date();
        tweet.textContent = texto.value;
        document.body.appendChild(cuadroTweet);
        }
    }
}
