

//Media Aritmética Ponderada: Se una cuando no le da la misma importancia a todos los valores. 
//Osea nos permite definir el peso, la importancia o relevancia de cada elemento en nuestro conjunto de n°.
//Ej notas en una asignatura: quizá el examen vale el 60%, las tareas un 30% y asistencia a clase un 10% 
// 
//M.A Ponderada: (nota.area * el porcentaje) + (nota.area * el porcentaje) + (nota.area * el porcentaje)
//Luego de DIVIDE por la suma de los pedod (osea de todos los creditos).

const lista = [
    {area: "examen", importancia: 60, nota: 8},
    {area: "tareas", importancia: 30, nota: 9},
    {area: "asistencia", importancia: 10, nota: 6},
]


// Cómo empezar??? como tengo que pasar por cada elemento de la lista 
//Como que tengo que MULTIPLICAR NOTA CON IMPORTANCIA y voy a obtener varios resultados (los producto
//de varias multiplicaciones) uso el método .map

// const notasConImportancia = lista.map(
//     function (elemento) {
//         return elemento["importancia"] * elemento["nota"];
//     }
// );


// const notasConImportancia = lista.map(
//     function (elemento) { return elemento.importancia * elemento.nota;}  //Qué pongo de parámetro en la función? EL NOMBRE QUE QUIERA. Va a representar cada elemento del array (cada { })
// );


const notasConImportancia = lista.map( elem => elem.nota * elem.importancia );


//SUMO LOS PRODUCTOS. Como el resultado será uno sólo (la suma de todo) Uso la función .reduce
const sumaDeProductos = notasConImportancia.reduce( (acc, elem) => acc + elem, 0 );

//SUMO TODOS LOS PESOS (OSEA LAS "IMPORTANCIAS"). Pero para eso primero tengo que crear un nuevo arreglo
//que contenga únicamente los "importania". Para eso uso un .map (map crea otro array)

const importancias = lista.map( elem => elem.importancia );

//Es lo mismo que escribir:
// const importancias = lista.map (function (elem) {
//     return elem.importancia;
// });

//Ahora sí, a ese array de "importancias" los puedo sumar con reduce()
const SumaDeImportancias = importancias.reduce( (acc, elem) => acc += elem ); 


//Para seguir con la M.A Ponderada hago la divición entre ambas sumas.

const MAPonderada =  sumaDeProductos / SumaDeImportancias;