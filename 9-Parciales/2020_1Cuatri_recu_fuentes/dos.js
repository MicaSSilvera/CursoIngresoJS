function mostrar()
{
  var respuesta = true;
  var cantidadMax = 0;
  var productoMax;
  var productoMax2;
  var precioMax = 0;
  var importeTotalBruto = 0;
  var importeTotalDescuento = 0;

  while(respuesta){

    console.log("PRODUCTOS")

    var producto;
    var productoValido = false;
    while(productoValido == false){
        producto = prompt("Ingrese producto [cal - arena - cemento]").toLowerCase();
        if (producto == "arena" || producto == "cal" || producto == "cemento") {
            productoValido = true;
        }
    }
    console.log("El producto ingresado " + producto);

    var cantidadUnidad = false;
    var cantidad;
    while(cantidadUnidad == false){
      cantidad = parseInt(prompt("Ingrese cantidad"));
      if (cantidad > 0){
        cantidadUnidad = true;
      }
    }
    console.log("La cantidad de bolsas es " + cantidad)


    var precioBolsa;
    var precioBolsasValido = false;
    while (precioBolsasValido == false){
      precioBolsa = parseInt(prompt("Cual es su precio ? "));
      if(precioBolsa > 0){
        precioBolsasValido = true
      }
    }
    console.log("El precio por bolsas es " + precioBolsa);

    var respuesta;
    var respuestaValida = false;
    while(respuestaValida == false){
      respuesta = prompt("Desea ingresar otro producto ? " ).toLowerCase();
      if(respuesta == "si" || respuesta == "no"){
        respuestaValida = true;
      }
    }
     
   if(respuesta == "no"){
      respuesta = false;
   }else{
       respuesta = true;
   }

  
  //PUNTO A
  var precioTotalBruto = precioBolsa * cantidad;
  importeTotalBruto = importeTotalBruto + precioTotalBruto;

  //PUNTO B
  var descuento = 0 ;

  if(cantidad > 30){
    descuento = (precioTotalBruto * 25 ) / 100;

  }else if (cantidad > 10){
     descuento = (precioTotalBruto * 15 ) / 100;
  }

  importeTotalDescuento = importeTotalDescuento + precioTotalBruto - descuento;

  //PUNTO D
  if(cantidad > cantidadMax){
    cantidadMax = cantidad;
    productoMax = producto;
  }

  //PRODUCTO F
  if(precioMax < precioBolsa){
    precioMax = precioBolsa;
    productoMax2 = producto;
  }



  }// FIN DEL WHILE ()


  alert("El importe a pagar total sin descuento es " + importeTotalBruto );
  alert("El precio total con descuento es " + importeTotalDescuento);
  alert("El producto con mas cantidad de bolsas es " + productoMax);
  alert("El producto mas caro es " + productoMax2 + " y su precio " + precioMax);

}//FIN DE LA FUNCTION()