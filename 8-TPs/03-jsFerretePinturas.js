/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura = parseInt(txtIdTemperatura.value);
    var resultado = (temperatura-32)*0.5566;
    alert(temperatura + " Fahrenheit son " + resultado + " centigrados");
}

function CentigradosFahrenheit ()

{
	var temperatura = parseInt(txtIdTemperatura.value);
    var resultado = (temperatura * (9/5))+32;
    alert(temperatura + " centigrados son " + resultado + " Fahrenheit");s
}
