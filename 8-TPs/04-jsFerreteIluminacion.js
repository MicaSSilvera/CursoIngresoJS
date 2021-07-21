/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () {
    
    var cantidadlamparas = parseInt(txtIdCantidad.value);
    var precioLampara = 35;
    var resultadofinal;
    var resultado; 
    
    var descuento = calcularDescuento(cantidadlamparas, precioLampara)

     resultado = cantidadlamparas * precioLampara;
     resultadofinal = resultado - descuento;
     txtIdprecioDescuento.value = resultadofinal;
     
     if (resultadofinal > 120){
         var impuesto = ((resultadofinal)*10) / 100;
        resultadofinal = resultadofinal + impuesto
        txtIdprecioDescuento.value = resultadofinal;
        alert("Usted pago " + impuesto +  " de IIBB." );
     }
}

function calcularDescuento(cantidadlamparas, precioLampara){
    var marca = Marca.value;
    var descuento;
    switch (cantidadlamparas){
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz" ){
                descuento = ((cantidadlamparas * precioLampara) * 15)/100;
            }else if (marca == "FelipeLamparas" ){
                descuento = ((cantidadlamparas * precioLampara) * 10)/100;
            }else{
                descuento = ((cantidadlamparas * precioLampara) * 5)/100;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas" ){
                descuento = ((cantidadlamparas * precioLampara) * 25)/100;
            }else{
                descuento = ((cantidadlamparas * precioLampara) * 20)/100;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz" ){
                descuento = ((cantidadlamparas * precioLampara) * 40)/100;
            }else{
                descuento = ((cantidadlamparas * precioLampara) * 30)/100;
            }
            break;
        default:
            descuento = ((cantidadlamparas * precioLampara) * 50)/100;
            break;
     }
     return descuento;
}