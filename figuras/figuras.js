// Código del cuadrado

console.group("Cuadrado");
//const ladoCuadrado = 5; /*Serán  cm*/ 
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


//const perimetroCuadrado = ladoCuadrado * 4;  /*Acá calculamos*/ 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");  /*Acá ya no hacemos ningun calculo, solo concatenamos*/



function perimetroCuadrado(lado) {
    return lado * 4;
}

//perimetroCuadrado(2);     ← ésto lo escribimos en la consola de la web.





//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");





function areaCuadrado(lado){
    return lado * lado;
}
// areaCuadrado(5);    ← ésto lo escribimos en la consola de la web.



console.groupEnd();

// Código del triángulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
 

console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo  /*Sería el lado3*/ 
    + "cm" 
);

//console.log("La altura del triangulo es de = " + alturaTriangulo + "cm");

//const perimetroTriangulo =  ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perímetro del triangulo es de = " + perimetroTriangulo + "cm" )


//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

function areaTriangulo (base, altura){
    return base * altura /2;
}


//console.log("el área del triangulo es de: " + areaTriangulo + "cm^2")


console.groupEnd();


// Código del círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("el radio del circulo es de: " + radioCirculo + "cm")

// Diametro
//const diametroCirculo =  radioCirculo * 2
//console.log("el diametro del circulo es de: " + diametroCirculo + "cm")

function diametroCirculo (radio){
    return radio * 2
}

// PI
const PI = Math.PI;   /*Puedo escribir manualmente el numero pi (3.1415) o usar el OBJETO Math de JS. (los que siguen con punto son OBJETOS) */
console.log("PI es: " + PI);

// Circunferencia
//const perimetroCirculo = diametroCirculo * PI;
//console.log("el perímetro del circulo es: " + perimetroCirculo + "cm")


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
     
// Área
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("el radio del circulo es de: " + areaCirculo + "cm^2")


function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();






















// Aquí interactuamos con el HTML  ///////////////////////////////////////////////////////////////////////////////////////////////


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); // ésto nos va a permitir obtener ese elemento html desde javascript.
    const value = input.value; // Pero no queremos TODA la etiqueta inpuCuadrado, queremos solo su valor. Por eso llamamos al "input" (lo que guardamos en esa variable) y llamamos a su propiedad "value" para obtener el valor.

    const perimetro = perimetroCuadrado (value);
    alert(perimetro);
}



function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado"); // ésto nos va a permitir obtener ese elemento html desde javascript.
    const value = input.value; // Pero no queremos TODA la etiqueta inpuCuadrado, queremos solo su valor. Por eso llamamos al "input" (lo que guardamos en esa variable) y llamamos a su propiedad "value" para obtener el valor.

    const area = areaCuadrado (value);
    alert(area);
}

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function perimetroTriangulo(ladoA, ladoB, base){
    return ladoA + ladoB + base
   }
   
   

function calcularPerimetroTriangulo() {
    const inputA = document.getElementById("InputTrianguloA");
    const inputB = document.getElementById("InputTrianguloB");
    const inputBase = document.getElementById("InputTrianguloBase"); // ésto nos va a permitir obtener ese elemento html desde javascript.
    const value = input.value; // Pero no queremos TODA la etiqueta inpuCuadrado, queremos solo su valor. Por eso llamamos al "input" (lo que guardamos en esa variable) y llamamos a su propiedad "value" para obtener el valor.

    const perimetro = perimetroTriangulo (value);
    alert(perimetro);
}

function calcularAreaTriangulo() {

}




function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");            // ésto nos va a permitir obtener ese elemento html desde javascript.
    const value = input.value;                                      // Pero no queremos TODA la etiqueta inpuCuadrado, queremos solo su valor. Por eso llamamos al "input" (lo que guardamos en esa variable) y llamamos a su propiedad "value" para obtener el valor.

    const area = areaTriangulo (value);
    alert(area);
}






