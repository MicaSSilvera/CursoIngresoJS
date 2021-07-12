function mostrar()
{
    var precio = parseInt(prompt("Ingrese precio"));
    var porcentaje = parseInt(prompt("Ingrese porcentaje de descuento"));
    var resultado = (precio * porcentaje)/ 100;
    resultado = precio - resultado;
    elPrecioFinal.value = resultado;



}
