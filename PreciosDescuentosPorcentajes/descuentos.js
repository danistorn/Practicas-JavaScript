/*Primero ponemos en limpio todo lo que esta en juego:

- Tenemos el precio original: 120 (precioOriginal)
Ese es el 100%. 
- El descuento es del: 15% (porcentajeDescuento)

- Del 100% se va a sacar el 15%: 100 - descuento. En este caso me daria por ejemplo el 85%. El 85% del precio original es lo que tengo que pagar. (porcentajeAPagar)

- El precio final: (precioOrigianl * porcentajeAPagar) /100    ...lo dividimos por 100 para que me de el porcentaje.
*/ 




/*Las declaramos para que la funcion funcione sin importar cual sea el precio original y el porcentaje de descuento.*/

// const precioOriginal = 120;
// const porcentajeDescuento = 18;


function calcularPrecioConDescuento (precio, descuento){
    const porcentajeAPagar = 100 - descuento;
    const precioFinal = precio * porcentajeAPagar / 100;

    return precioFinal;
}

function onclickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioFinal = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioFinal;
}


/* ///   ARRAY DE STRINGS   /// */

console.log({
    precioOriginal,
    porcentajeDescuento,
    porcentajeAPagar,
    precioFinal,
});


/* ///   ARRAY DE OBJETOS   /// */

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];



let descuento; /* Tenemos varios descuentos de acuerdo al cupon que se utilice. El valor de "descuento" va a depender de eso.  */




/*Con SWITCH*/ 

function onclickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value
    
    const inputDiscount = document.getElementsById("inputCoupon");
    const couponValue = inputDiscount.value;

    
 switch(couponValue) { /* Voy a validar ese valor (el que ingresó el usuario. Si coincide o no con uno de los cupones de nuestra empresa */ 
    case coupon[0]:  /*Si el caso 0 coincide con ese couponValue que ingresó el usuario, ocurrirá eso otro.*/
      resultado.innerText;  /*Éste no tiene que ser igual al "discount de los arrays "*/ 
    break;
    case coupon[1]: 
      resultado.innerText;
    break;
    case coupon[2]: 
      resultado.innerText;
    break;
    default: porcentaje_de_descuento = "Este cupón no es valido" 

  }
}




/*Con IF */

if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
 } else if (couponValue === "JuanDC_es_Batman") {       /*Escribe demasiado (cada letra del valor). Con Switch solo tengo que indicar su posicionamiento dentro del array y listo.*/
    descuento = 15;
 } else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento = 30;
 } else if (couponValue === "es_un_secreto") {
    descuento = 25;
 }



