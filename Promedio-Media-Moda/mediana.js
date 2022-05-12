/* Mediana: Dada una lista, el numero que esta en el medio. Si la lista es par, los dos numeros del medio dividido dos (osea el promedio/media aritmetica)*/


//Traer inputs del .html a un array en el .js
// function onclickButtonCalcularMediana(){
//     var arrayInput = new Array();
//     let inputNumerosValues = document.getElementsByClassName("inputNumeros"),
//     elementValues = [].map.call(inputNumerosValues, function(datos){
//             arrayInput.push(datos.value);
//     })
// };


//Lo mismo puede ser hecho con un for loop:
// function onclickButtonCalcularMediana(){
//     var arrayInput = new Array();
//     let inputNumerosValues = document.getElementsByClassName("inputNumeros"),
//     for(let i = 0; i < inputNumerosValues.length; i++){
//         arrayInput.push(inputNumerosValues[i].value);
//     }    
// };







/*No me da un resultado con número. Me da si o no. true or false. */
/*Éste "numero" vendria a ser lo largo de la lista. Pregunta si la lista es par o impar. */





function onclickButtonCalcularMediana(){
    let array = [];

    let inputNumeros = document.getElementsByClassName("inputNumeros");     /*Me traigo los inputs que ingresó el usuario */
    const objetoLleno = array.push(inputNumeros.value);      /* El VALOR de esos inputs los meto en el array */
    
    const arrayOrdenado = Object.entries(objetoLleno).sort( (elem1, elem2) =>  elem1 - elem2 );
    
    // arrayOrdenado = arrayLleno.sort( (elem1, elem2) =>  elem1 - elem2 );   /*Ese array (que ahora esta lleno) lo ordeno de menor a mayor */
    
    let mediana = calcularMediana(arrayOrdenado);

    const inputResultado = document.getElementById("inputResultado");
    inputResultado.innerText = "La mediana es de: " + mediana;

    
};




//Cómo ordenar
// const listaOrdenada = lista.sort( (elem1, elem2) => {return elem1 - elem2} )
// O por devolver sólo un valor:
// const listaOrdenada = lista.sort( (elem1, elem2) => elem1 - elem2 )


function calcularMediana(arrayOrdenado){
    function esPar(arrayOrdenado) {
        if (arrayOrdenado.length % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }


    let mediana = 0;

    if (esPar(arrayOrdenado.length)) {
        const elemento1 = arrayOrdenado[arrayOrdenado.length /2 - 1];   /*Ese lo tendria que haber resumido en un mitadLista*/
        const elemento2 = arrayOrdenado [arrayOrdenado.length / 2];
    
        mediana = (elemento1 + elemento2) / 2;
        return mediana;   
    } else {
        mediana = arrayOrdenado[arrayOrdenado.length / 2];  /*Lo de adentro de los corchetes es "mitadLista" */
        // return inputRresultado(mediana);
        return mediana;
    }
    
};   















function calcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


function CalcularMediana(lista1) {
    const listaOrdenada = lista1.sort(function(primerElemento, segundoElemento){
        return primerElemento - segundoElemento;
    });
    const mitadLista1 = parseInt(listaOrdenada.length / 2);

        function esPar(numerito){
            if (numerito % 2===0){
                return true;     
            } else {
                return false;
            }
    }

    let mediana;

    if (esPar(lista1.length)){
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1];;
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
    
        mediana = promedioElemento1y2;
        return mediana;
    
    } else {
        mediana = listaOrdenada[mitadLista1];
        return mediana;
    }   

}















// const coupons = [
//     {
//         name: "JuanDC_es_Batman",
//         discount: 15,
//     },
//     {
//         name: "pero_no_le_digas_a_nadie",
//         discount: 30,
//     },
//     {
//         name: "es_un_secreto",
//         discount: 25,
//     },
// ];

// function calcularPrecioConDescuento(precio, descuento){
//     const porcentajeDelPrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;
  
//     return precioConDescuento;
  
//   }















// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
   
//     const inputCoupon = document.getElementById("inputCoupon");
//     const couponValue = inputCoupon.value;

    
 
    
    

//     const isCouponValueValid = function (coupon) {
//      return coupon.name === couponValue;
//  };
 
//  const userCoupon = coupons.find(isCouponValueValid);
 
//  if (!userCoupon) {
//      alert("El cupón " + couponValue + " no es válido");
//  } else {
//      const descuento = userCoupon.discount;
//      const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
 
//      const resultP = document.getElementById("ResultP");
//      resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
//  }

// }













// function onclickButtonCalcularMediana(){
//     let array = [];

//     let inputNumeros = document.getElementsByClassName("inputNumeros");     
//     const objetoLleno = array.push(inputNumeros.value);    

//     const arrayOrdenado = Object.entries(objetoLleno).sort( (elem1, elem2) =>  elem1 - elem2 );

//     let mediana = calcularMediana(arrayOrdenado);

//     const inputResultado = document.getElementById("inputResultado");
//     inputResultado.innerText = "La mediana es de: " + mediana;

    
// };





// function calcularMediana(arrayOrdenado){
//     function esPar(arrayOrdenado) {
//         return (arrayOrdenado.length % 2 == 0);
//     };


//     let mediana = 0;

//     if (esPar(arrayOrdenado.length)) {
//         const elemento1 = arrayOrdenado[arrayOrdenado.length /2 - 1];   /*Ese lo tendria que haber resumido en un mitadLista*/
//         const elemento2 = arrayOrdenado [arrayOrdenado.length / 2];
    
//         mediana = (elemento1 + elemento2) / 2;
            
//     } else {
//         mediana = arrayOrdenado[arrayOrdenado.length / 2];  /*Lo de adentro de los corchetes es "mitadLista" */

//     }
    
// };   





























function onclickButtonCalcularMediana(){
    let array = [];

    let inputNumeros = document.getElementsByClassName("inputNumeros"); 
    const objetoLleno = array.push(inputNumeros.value);      
    
    const arrayOrdenado = Object.entries(objetoLleno).sort( (elem1, elem2) =>  elem1 - elem2 );
        
    let mediana = calcularMediana(arrayOrdenado);

    const inputResultado = document.getElementById("inputResultado");
    inputResultado.innerText = "La mediana es de: " + mediana;

    
};





function calcularMediana(arrayOrdenado){
    function esPar(arrayOrdenado) {
        if (arrayOrdenado.length % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }


    let mediana = 0;

    if (esPar(arrayOrdenado.length)) {
        const elemento1 = arrayOrdenado[arrayOrdenado.length /2 - 1];
        const elemento2 = arrayOrdenado [arrayOrdenado.length / 2];
    
        mediana = (elemento1 + elemento2) / 2;
        return mediana;   
    } else {
        mediana = arrayOrdenado[arrayOrdenado.length / 2];  
        return mediana;
    }
    
};   


