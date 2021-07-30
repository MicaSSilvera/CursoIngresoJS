function mostrar(){
    var contador = 0;
    var promedio = 0;
    var alturaMin = 99999999;
    var sexoMin;
    var alturaMax = 0;
    var cantidadMujeres = 0;

    while(contador < 5){
        contador ++;
        console.log("JUGADOR " + contador);

        var altura;
        var alturaValida = false;
        while(alturaValida == false){
            altura =  parseInt(prompt("Ingrese altura en centimetros [ 0 - 250]"));
            if(altura > 0 && altura <= 250){
                alturaValida = true;
            }
            
        } 
        console.log("La altura es " + altura);
    
        var sexo;
        var sexoValido = false;
        while(sexoValido == false){
            sexo = prompt("Ingrese sexo [con inicial F o M]").toLowerCase();
            if(sexo == "f" || sexo == "m" ){
            sexoValido = true;
            }
            
        } 
        console.log("El sexo es " + sexo);

        //PUNTO A
        promedio = promedio + altura;

        //PUNTO B
        if (altura < alturaMin){
            alturaMin = altura
            sexoMin = sexo;
        }

        //PUNTO C
        if (sexo == "f" && altura > 190){
            cantidadMujeres++;
        }


    }//FIN WHILE()
        alert("El promedio de altura es: " + promedio / 5);
        alert("La altura minima es: " + alturaMin + " y el sexo es: " + sexoMin);
        alert("La cantidad de mujeres que superan los 190 cm es: " + cantidadMujeres);

}//FIN FUNCION MOSTRAR()
