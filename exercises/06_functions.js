// 6. Funciones

// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la 
// función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
// b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
// no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
// c) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
// En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function sumar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        alert("Uno de los valores no es un número. No se puede resolver");
        return NaN;
    }
    if(num1 - Math.floor(num1) !== 0){
        alert("El primer número no es entero. Vamos a redondearlo");
        num1 = Math.round(num1);
    }    
    if(num2 - Math.floor(num2) !== 0){
        alert("El segundo número no es entero. Vamos a redondearlo");
        num2 = Math.round(num2);
    }
    return suma = num1 + num2;
}

var random1 = Math.ceil(Math.random()*20);
var random2 = Math.ceil(Math.random()*20);
console.log("Suma de " + random1 + " + " + random2 + " = " + sumar(random1,random2));