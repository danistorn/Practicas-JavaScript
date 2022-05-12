
//LOGRADO !!!!!!!!!!


function descuentoPorCupones(precio, cupon) {    /*FUNCIOOOOOOOOOOOOOOOOOOOOOOOON. Los dos parametros los usaré en los dons "const"*/
    const porcentajeAPagar = 100 - cupon;
    const precioFinal = precio * porcentajeAPagar / 100;

    return Number(precioFinal);
}



const coupons = [
  {
      name: "super_promo",
      descuento: 15,
  },
  {
      name: "promo_mayo",
      descuento: 25,
  },
  {
      name: "primer_martes_del_mes",
      descuento: 30,
  },
]





/*Entonces... necesito la funcion del boton.*/ 

function onclickButtonCalcular()  {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;


    let inputResultado;
  
    const resultado = document.getElementById("inputResultado");
  

    coupons.forEach((couponCode) => {
      if (couponCode.name === couponValue) {
        inputResultado = descuentoPorCupones(priceValue, couponCode.descuento);
      }
    });

    if (inputResultado === undefined) {
      resultado.innerText = "el cupón ingresado no es valido"
    } else {
      resultado.innerText = `El precio con descuento es de: $${inputResultado} dolores`
    }

}





    

// const resultado = document.getElementById("inputResultado");

// let descuento;

    
//     switch(true) {
//       case couponValue === "super_promo":
//         descuento = 15;
//         inputResultado = descuentoPorCupones(priceValue, descuento);
//         resultado.innerText =`El precio con descuento es de: $${inputResultado} dolores`
//       break;
//       case couponValue === "promo_mayo":
//         descuento = 25;
//         inputResultado = descuentoPorCupones(priceValue, descuento);
//         resultado.innerText =`El precio con descuento es de: $${inputResultado} dolores`
//       break;
//       case couponValue === "primer_martes_del_mes":
//         descuento = 30;
//         inputResultado = descuentoPorCupones(priceValue, descuento);
//         resultado.innerText =`El precio con descuento es de: $${inputResultado} dolores`
//       break;
//       default:
//         resultado.innerText = "el cupón ingresado no es valido"
//     }

    