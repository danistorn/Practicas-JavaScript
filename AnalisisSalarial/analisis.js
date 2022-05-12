
//Helpers

    /*La MEDIANA es: el número del medio? O, en caso de ser par, la suma de los dos del medio dividido 2  */
    /*O SEA primero tengo que saber si esa lista que tengo es par o no. Osea si su modulo es cero o hay resto. */

    // function esPar(largoDeLista){
    //   if (largoDeLista % 2 === 0) {
    //      return true;
    //   } else {
    //      return false;
    //   }
    // };



    /*Se puede simplificar así. Esos true y false ya nos lo esta dando por defecto ese paréntesis. */
function esPar(largoDeLista){      /*Este es un IF/ELSE de true/false */
    return (largoDeLista % 2 === 0);
};



//Calculadora de mediana
function medianaSalarios (lista) {  
    const mitad = parseInt(lista.length / 2); /*Para la MEDIANA se va a necesitar la mitad. Usamos parseInt por si nos da con decimales (osea si se trata de una lista impar) */
                                              /*Lo que buscaremos es el número que esta POSICIONADO en la mitad: lista[mitad] */
    if (esPar(lista.length)) {  /*Si esa funcion da true... */      /*Si se trata de un IF/ELSE de true/salse, se puede poner "if esa funcion,...., else..." porque esa primera parte ya va a significar "si esa funcion es true... " */
        const elemento1 = lista[mitad -1 ];
        const elemento2 = lista[mitad];

        const mediana = (elemento1 + elemento2) / 2; /*Hay que sumarlas y dividirlas por dos */
        return mediana;
    } else  {
        /*Si es impar, hay que dividir */
        const mediana = lista[mitad]; /*con "listad[mitad]" estamos diciendo "quiero el ELEMENTO que se encuentra en esa posicion de la lista" Si era una lista de 11 y la mitad es 5,5 (5 usando parseInt) entonces el numero/elemento que se encuentra en esa posicion de la lista es la mediana"  */ 
        return mediana;
    }
}





// Mediana General
const salariosArg = argentina.map(personita => personita.salary );   /*Que quiero que me devuelva? que quiero guardar en "salariosArg"? PUES EL SALARIO. Entonces... ESCRIBO EL SALARIO!!! (el perteneciente a CADA elemento. y cada elemento lo bautizamos con ese nombre "personita") */

    // const salariosArg = argentina.map(
    //     function (personita) {
    //         return personita.salary;
    //     }
    // );

    /*Recordar que para calcular la MEDIANA etc, los datos tiene que estar ordenados. Asi que los ordeno! */

const salariosArgOrdenados = salariosArg.sort( (a, b) => a - b );

    // const salariosArgOrdenados = salariosArg.sort( 
    //     function (a, b) {
    //         return a - b; 
    //     }
    //  );



const medianaGeneralArg = medianaSalarios(salariosArgOrdenados);


// Mediana del top 10%
    /* De nuestro array de SaladiosOrdenados tenemos que sacar las últimas posiciones (ya que esta de menor a mayor)
    Lo que represente el 10% */

    //Queremos empezar nuestra cuenta en el 90% (porque queremos los ultimos 10)


    //100_____salariosArgOrdenados.length
    //90 ______ ?? = 90 * eso / 100 

const spliceStart = ( salariosArgOrdenados.length * 90) / 100 ; //Empiezo en el 90%
const spliceCount = salariosArgOrdenados.length - spliceStart; //Al 100% del array (todo su largo) le quito los primeros 90%


const salariosArgTop10 = salariosArgOrdenados.splice( spliceStart, spliceCount);

const medianaTop10Arg = medianaSalarios(salariosArgTop10);


console.log({
    medianaGeneralArg,
    medianaTop10Arg,
});