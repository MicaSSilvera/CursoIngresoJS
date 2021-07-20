/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
   
	switch (contador){
		case 1:
			alert("usted es un Psíquico");
			break;
		case 2:
			alert("excelente percepción");
			break;
		case 3:
			alert("Esto es suerte");
			break;
		case 4:
			alert("Excelente técnica");
			break;
		case 5:
			alert("usted está en la media");
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alert("falta técnica");
			break;
		default: 
			alert("afortunado en el amor!!");
			break;
	}
  
  }else if (numerosecreto > numeroUsuario){
    alert("falta...");
  
  }else{
    alert("se paso");
  }
  
}