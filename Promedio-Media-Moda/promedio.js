
/*Primero planteamos la lista sobre la que vamos a trbajar. Un array, en este caso, de números.*/
// const lista = [
//     100,    /*posicion 0 */
//     200,    /*posicion 1 */
//     500,    /*posicion 2 */
// ];


/*Lo siguiente que necesitamos es establecer como se calcula el promedio.
Sería una variable que representa la suma (sumalista1), DIVIDIDO la cantidad de elementos. Osea el largo de esa lista1. O SEA "lista1.lenght" " */
/*La media aritmética es la suma de todos ellos (100+200+500) dividido la cantidad que son, osea 3.
Para eso voy a necesitar un ciclo for.*/


// let sumaLista = 0; /*Aquí guardaré la suma de todos mis elementos. En este caso será 800*/ 


/*CICLO FOR. Siempre empieza igualando la variable que será la suma, igualandola a cero. Se parte de ahí.
Y hasta donde se llega? hasta donde esa variable sea menor a el largo de la lista.
Luego se le suma uno a esa variable. Esto es estandard del bucle for para que no sea un bicle infinito.  */


/*Paso por paso ocurrirá esto:
 En la primer vualta sumaLista1 va a ser cero. Lo igualo a sumaLista (de vuelta 0) + 100 (porque en la lista, en la posicion 0 está el 100)
Siguiente vuelta, la posicion pasa a ser 1 (osea lista1[posicion] pasa a ser 200). sumaLista1 ahora es 100 (lo que nos dió antes) más 200 nos da 300
Etc.

ES DECIR, el primer suma lista (el que esta igualado al resto) es el que capta el resultado. Y el que esta dentro de la ecuacion sumando tiene el valor del que se va almacenando afuera.  
 */



// for (let posicion=0; posicion < lista.lenght; posicion++) {
//         sumaLista = sumaLista + lista[posicion];       
//     }
/*Acá, sumalista1 será igual al valor que tenía antes sumalista1 + lista1[i]   */


// const promedioLista = sumaLista / lista.lenght;   


// Cuando trabajamos con arrays, podemos irterar con "for" o también con MÉTODOS que tienen los arrays.

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

