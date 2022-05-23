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