


// function altura(ladoA, ladoB, base){
//     let ladoA;
//     let ladoB;
//     let base;
//     if(ladoA === ladoB && ladoA != base){
//         alert('isoceles')
//         const altura = Math.sqrt(ladoA**2 - base**2/ 4)
//         console.log(altura)
//     }
//     else{
//         alert('Éste triangulo no existe')
//     }
// }


/*FUNCION DE TRIANGULO ORIGINAL.*/ 
/*Primero creo la funcion que recibirá los datos que el usuario ingresó. Lo que miden los lados y la base. */ 


function alturaTrianguloIsosceles(ladoA, ladoB, base) {  /*acá los parámetros son los mismos que los del archivo html. */
    const input = document.getElementsById ("InputTriangulo");
    const value = input.value;

    const altura= alturaTriangulo (value);
    if (ladoA != ladoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        alturaTrianguloIsosceles()        // ...
    }
}

/*Si no es isósceles (si no se cumple esa condicion), saldrá error. 
Si sí es isosceles, correrá la fución para calcular la altura... */




/*FUNCION DE ALTURA. Triangulo GRANDE vs Triangulo Chico. */ 
/* Ahora escribimos la funcion que calcula altura.
"LADO" en mayuscuals es el triangulo grande. "lado" en minuscula es el triangulo chico */ 



 
//   function alturaTrianguloIsosceles(LADOA, LADOB, BASE) {    /*Acá aunque hable de los mismos parametros, los llamamos distinto para remarcar que son los del triangulo grande y diferenciarlos del triangulo chico. */
//     if (LADOA != LADOB) {
//         console.error("Los lados a y b no son iguales");
//     } else {
//         const ladoB = BASE / 2;
//         const base = LADOA;

//         const ladoBCuadrado = ladoB * ladoB;
//         const baseCuadrado = base * base;

//         const ladoA = Math.sqrt(baseCuadrado - ladoBCuadrado);

//         const ALTURA = ladoA;
//         return ALTURA;
//     }
// }



function alturaTrianguloIsosceles(LADOA, LADOB, BASE) {  
    if (LADOA != LADOB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const ladoB = LADOB; 
        const base = BASE /2;

        const ladoBCuadrado = ladoB * ladoB;
        const baseCuadrado = base * base;

        const ladoA = Math.sqrt(ladoBCuadrado - baseCuadrado);  /* Primero planteo esta formula, despues establezco las igualdades de arriba que necesito*/

        const ALTURA = ladoA;
        return ALTURA;
    }
}