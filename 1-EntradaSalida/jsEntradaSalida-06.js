/*
Silvera Britez Micaela
E/S eje 6 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	var numero1 = parseInt(numero1);
	var numero2 = parseInt(numero2);
	var resultado;
	resultado = numero1 + numero2;

	alert("La suma de los dos numeros es " + resultado);
}

