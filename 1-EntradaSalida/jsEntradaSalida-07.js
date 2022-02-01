/*
Silvera Britez Micaela DIV E
e/s eje 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	var resultadoSuma;
	resultadoSuma = numeroUno + numeroDos;
	alert("El resultado de la suma es " + resultadoSuma);
}

function restar()
{
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	var resultadoResta;
	resultadoResta = numeroUno - numeroDos;
	alert("El resultado de la resta es " + resultadoResta);
	
}

function multiplicar()
{ 
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	var resultadoMultiplicacion;
	resultadoMultiplicacion = numeroUno * numeroDos;
	alert("El resultado de la multiplicacion es " + resultadoMultiplicacion);
}

function dividir()
{
	var numeroUno = txtIdNumeroUno.value;
	var numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	var resultadoDivision;
	resultadoDivision = numeroUno / numeroDos;
	alert("El resultado de la division es " + resultadoDivision);
}
	


