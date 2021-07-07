/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1 = parseInt(txtIdPrecioUno.value);
    var precio2 = parseInt(txtIdPrecioDos.value);
    var precio3 = parseInt(txtIdPrecioTres.value);
    var resultado;
    resultado = precio1 + precio2 + precio3;
    alert("El resultado de la suma es: " + resultado);
}
function Promedio () 
{
	var precio1 = parseInt(txtIdPrecioUno.value);
    var precio2 = parseInt(txtIdPrecioDos.value);
    var precio3 = parseInt(txtIdPrecioTres.value);
    var resultado;
    resultado = (precio1 + precio2 + precio3)/3;
    alert("El resultado del promedio es: " + resultado.toFixed(2));
}
function PrecioFinal () 
{
	
	var precio1 = parseInt(txtIdPrecioUno.value);
    var precio2 = parseInt(txtIdPrecioDos.value);
    var precio3 = parseInt(txtIdPrecioTres.value);
    var resultado;
    resultado = (precio1 + precio2 + precio3)*1.21;
    alert("El precio final es: " + resultado);
	
}