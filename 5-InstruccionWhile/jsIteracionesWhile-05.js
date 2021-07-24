/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo;
	console.log("sexo: " + sexo);
	while (!(sexo == "m" || sexo == "f")){
	    sexo = prompt("ingrese el sexo");	
	}
	txtIdSexo.value = sexo;
	
}//FIN DE L