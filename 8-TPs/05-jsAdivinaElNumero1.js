/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numerosecreto;
var contador = 0;

function comenzar(){
   
  numerosecreto = random(1,100);
   txtIdNumero.value = "";
   txtIdIntentos.value = "0";
   contador = 0;
   console.log("NUMERO ALEATORIO: " + numerosecreto)  
}

function random(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

function verificar(){
  
  var numeroUsuario = parseInt(txtIdNumero.value);
  contador++;
  txtIdIntentos.value = contador;
  
  if (numeroUsuario == numerosecreto){
    alert("Usted es un ganador!!! y en solo " + contador  +" intentos.");
  
  }else if (numerosecreto > numeroUsuario){
    alert("falta...");
  
  }else{
    alert("se paso");
  }
  
}