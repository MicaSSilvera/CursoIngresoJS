/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1 = parseInt (txtIdNumeroUno.value);
	var numero2 = parseInt (txtIdNumeroDos.value);
	var resultado;
	resultado = numero1 + numero2;
	alert("El resultado de la suma es: " + resultado);
	
}

function restar()
{
	var numero1 = parseInt (txtIdNumeroUno.value);
	var numero2 = parseInt (txtIdNumeroDos.value);
	var resultado;
	resultado = numero1 - numero2;
	alert("El resultado de la resta es: " + resultado);
	
}

function multiplicar()
{ 
	var numero1 = parseInt (txtIdNumeroUno.value);
	var numero2 = parseInt (txtIdNumeroDos.value);
	var resultado;
	resultado = numero1 * numero2;
	alert("El resultado de la multiplicacion es: " + resultado);
	
}

function dividir()
{
	var numero1 = parseInt (txtIdNumeroUno.value);
	var numero2 = parseInt (txtIdNumeroDos.value);
	var resultado;
	resultado = numero1 / numero2;
	alert("El resultado de la division es: " + resultado);
	
}
