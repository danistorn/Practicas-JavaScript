/*Esto es un Array desordenado*/ 
const lista = [
     1,
     2,
     3,
     1,
     2,
     3,
     4,
     2,
     2,
     2,
     1
]


/* Moda es el número que más se repite. */
/*Cuántas veces aparece cada elemento?*/
/*Supongo que tendria que haber un contador y un "ciclo for/for loop". Y cada vez que se repite un número sumarle 1 a ese contador.*/ 
//NOTA: Ahora sé que existe el método de arrays .sort que puedo usar en vez del "ciclo for" para ordenar. Mucho más facil y rápido. 

//
//Forma que usó el profe:
//Convirtió el array en un objeto (para contar las veces en que aparecia cada elemento en un array)
// Luego convirtió ese objeto en un array de arrays para ordenarlos y asi encontrar el elemento que más se repetía. Osea la moda.
//


/*Vamos a transformar ese Array en un objeto */
/*No vamos a escribir a mano cuantas veces aparece un elemento. 
Vamos a recorrer todos los elementos del array (con el metodo .map) e ir viendo si se repiten.
Para eso vamos a crear un objeto vacío y vamos a ir llenandolo   */

const listaCount = {};   /*Éste es un objeto vacío. Lo voy a ir llenando con el metodo .map */



lista.map(       /*Como parámetro map recibe una función. */
     function (elemento) { 
          if (listaCount[elemento]) {        /*Acá creé el objeto. Lo llamé "listaCount". En cada iteración pasa por un elemento a la vez. */
             listaCount [elemento] += 1;   /*Si por ese ya pasé, ese elemento erá igual a 1 Y le sumaré otro 1. Luego si vuelvo a pasar el elemento sería igual a 2 Y le sumo otro 1, y así. */  
          } else {
               listaCount[elemento] = 1;    /*Si nunca había pasado por ese número, simplemente queda como igual a 1. Osea: que solo aparece 1 vez. */ 
          }             
     }
);


/*Ahora ése objeto que creé (el listaCount) lo vuelvo a convertir en un array, 
para así aplicarle el método .sort (un método de arrays, que sólo puedo aplicar a arrays, no a objetos) */
/*El método Object.entries() convierte el objeto que le ingrese, en un array.*/

const listaArray = Object.entries(listaCount).sort(  /*OBJECT CON MAYUSCULA. Ahora aplico el .sort para ordenar el array de menor a mayor. */
   function (valorAcumulado, valorNuevo) {   
     return valorAcumulado[1] - valorNuevo[1]; 
   }  
); 


const moda = listaArray[listaArray.length -1];  
/*Le resto 1 porque en un array se cuenta el cero. 
Entonces le quito uno para que me de la cantidad real. */