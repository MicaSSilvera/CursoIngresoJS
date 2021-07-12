function mostrar()
{
    var numero1 = parseInt(prompt("Dame un numero"));
    var numero2 = parseInt(prompt("otro numero"));
    
    if (numero1 == numero2) {
        alert("Los numeros son iguales: " + numero1 + " y " + numero2);
    } else if (numero1 > numero2) {
        var resultadoresta = numero1 - numero2;

        if (resultadoresta > 10) {
            alert("El resultado de la resta es: " + resultadoresta + " y supero a 10 ");
        }else{
            alert("El resultado de la resta es: " + resultadoresta);
        }
       
    } else if (numero1 < numero2) {
        var resultadosuma = numero1 + numero2;
        alert("El resultado de la suma es: " + resultadosuma);
    } 

}
