/*
Silvera Britez Micaela DIV E
e/s eje 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var dividiendo = parseInt(txtIdNumeroDividendo);
	var divisor = parseInt(txtIdNumeroDivisor.value);
	var resto;
	resto = dividiendo % divisor;
	alert("El resultado del resto es " + resto); 
}
