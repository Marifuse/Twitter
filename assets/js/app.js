//Función conteo y cambio de colores en positivo (falta negativo).
function conteo () {
  var max = "140";
	var cadena = document.getElementById("Escritura").value;
	var longitud = cadena.length;

		 if(longitud <= max) {
		          document.getElementById("contador").value = max-longitud;
		 } else {
		          document.getElementById("Escritura").value = cadena.substr(0, max);
	   }
     if (longitud >= 120 && longitud < 130) {
       document.getElementById('contador').style.color = "green";
     }
     else if (longitud >= 130 && longitud < 141) {
       document.getElementById('contador').style.color = "orange";
     }
     else if (longitud > 140) {
       document.getElementById('contador').style.color = "red";
     } else {
       document.getElementById('contador').style.color = "black";
     }
 }
//Evento Click Button y generación de un nuevo div con el Tweet
window.onload = function() {
  var boton = document.getElementsByName('Tweet')[0];
  var texto = document.getElementById('Escritura');
  var historial = document.getElementsByName('linea')
    boton.onclick = function() {
      if (texto.value === "" || texto.value > 140) {
        document.getElementById('click1').disabled = false;
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
