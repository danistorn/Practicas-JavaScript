function calcularMediaAritmetica(lista) { 
    let sumaLista = 0;
    for (let posicion=0; posicion < lista.length; posicion++) {    
        sumaLista = sumaLista + lista[posicion];       
    }

    // const sumaLista = lista.reduce(
    //     function (valorAcumulado = 0, nuevoElemento) {
    //         return valorAcumulado + nuevoElemento;
    //     }
    // );

    const promedioLista = sumaLista / lista.length;   

    return promedioLista;
}





/*La Mediana es basicamente el elementos que está justo en la mitad de una lista. O, si es una lista par, los dos elementos de la mitad, dividido 2. */

const lista = [
    100,
    200,
    500,
    400000000,
];



const mitadLista = parseInt(lista.length / 2);



/*Si la lista resulto ser true, osea par...*/


let mediana;

if (esPar(lista.length)) {      /*En éste if llamo a la función "esPar()" y le envi como parametro el largo de la lista. Es ese numero el que va a analizar si es par o no. */
    const elemento1 = lista[mitadLista - 1];  /*Si es par necesitamos DOS elementos de la lista. Y a la suma de éstos dividirla por dos.*/
    const elemento2 = lista[mitadLista]; /*ESTE RAZONAMIENTO VIEJO ESTA MAL: con el [] marco la posicion: el elemento del medio de la lista (que parseIn 1 hizo que sea el primero de los dos) + 1, osea el siguiente elemento. Y con lista[] agarro el NÚMERO que esta en esa posicion. TENGO QUE RECORDAR que en los arrays se emieza a contar de cero, por eso para enocntrar la mitad no busco los elementos mitad y mitad +1 sino mitad -1 y mitad. */

    // const promedioElementos1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    // mediana = promedioElementos1y2;
    
    mediana = (elemento1 + elemento2) / 2;


}   else {
    mediana = lista[mitadLista];
}


function esPar(numero) {      /*Esta función debe devolvernos true si la lista es par o false si es impar. */
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}
