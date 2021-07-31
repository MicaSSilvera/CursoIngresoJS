
function mostrar()
{
	var contador = 0;
	var precioJabonesMax = 0;
	var precioJabones;
	var cantidadMax = 0;
	var cantidadProductos = 0;
	var fabricanteMax;
	var promedio;
	var fabricante;
	var cantidadTotal = 0;



	while(contador < 5){
		contador++
		console.log("Productos " + contador);

		var producto;
		var productoValido = false;
		while(productoValido == false){
			producto = prompt("Ingrese el producto");
			if(producto == "barbijo" || producto == "jabon" || producto == "alcohol"){
				productoValido = true;
			}	
		}
		console.log("El producto seleccionado es " + producto)

		var precio;
		var precioValido = false;
		while(precioValido == false){
			precio = parseInt(prompt("Ingrese precio"));
			if(precio >= 100 && precio <= 300){
				precioValido = true;
			}
				
		}
		console.log("El precio es: " + precio);

		var cantidad;
		var cantidadValida = false;
		while(cantidadValida == false){
			cantidad = parseInt(prompt("Ingrse cantidad"));
			if( cantidad < 1000 && cantidad > 0){
				cantidadValida = true;
			}
		}
		console.log("La cantidad de unidades es " + cantidad );

		var marca;
		var marcaValida = false;
		while( marcaValida == false){
			marca = prompt("Marca deseada");
			if(marca == "espadol" || marca == "pinguino"){
				marcaValida = true;
			}
		}
		console.log("La marca es " + marca);

		var respuesta;
		var respuestaValida = false;
         while(respuestaValida == false ){
             respuesta = prompt("Desea ingresar otro producto?").toUpperCase();
           if(respuesta == "SI" || respuesta == "NO"){
                   respuestaValida = true;
            }
         }

          if(respuesta == "NO"){
             respuesta = false;
          }else{
              respuesta = true;
         }


	}// FIN DEL WHILE

	    //PUNTO A
	   if( precioJabonesMax < precioJabones){
		precioJabonesMax = precioJabones;
		cantidadMax = cantidad;
		fabricanteMax = fabricante;
	   }

	    //PUNTO B
	    cantidadProductos = cantidadProductos + cantidad;
	    promedio = cantidadProductos + producto;

	     //PUNTO C
	    if (producto == "barbijo"){
		cantidadTotal= cantidadTotal + cantidad;
      	}
	


     	alert("El precio de los jobones mas caros es " + precioJabonesMax + ", la cantidad es " + cantidadMax + " y el fabricante " + fabricanteMax);
	    alert("La cantidad de productos es " + cantidadMax + " y el promedio " + promedio);
	    alert("La cantidad total de barbijos es " + cantidadTotal);

}//FIN DE LA FUNCTION
