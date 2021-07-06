/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarDescuento()
{
	var importesueldo = parseInt(txtIdImporte.value);
	 var resultado = importesueldo - (importesueldo * 0.25);
	 txtIdResultado.value = resultado.toFixed(2);
}
