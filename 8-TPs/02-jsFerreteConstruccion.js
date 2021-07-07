/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseInt(txtIdLargo.value);
    var ancho = parseInt(txtIdAncho.value);
    var perimetro = ((largo*2) + (ancho *2))*3;
    alert("La cantidad de alambre es: " + perimetro);
    

}
function Circulo () 
{
	var radio = parseInt(txtIdRadio.value);
    var perimetro = (2*3.14*radio)*3;
    alert("La cantidad de alambre es: " + perimetro);
}
function Materiales () 
{
	var largo = parseInt(txtIdLargo.value);
    var ancho = parseInt(txtIdAncho.value);
    var area = largo * ancho;
    var cemento = (area*2)/1;
    var cal = (area*3)/1;
    alert("se necesitan comprar : " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}