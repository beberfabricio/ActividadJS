// 1. Variables y Operadores

// a) Crear dos variables de tipo String y concatenarlas guardando el resultado 
// en una 3er variable. (utilizar concat)
// b) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad
// de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

var string1 = "Hola! Este es el ejercicio de variables";
var string2 = "de la asignatura Lenguajes de Programación";
var string3 = string1.concat(" ",string2);
console.log(string3);

var cantCaracteres = (string1.length + string2.length);
console.log("Cantidad de caracteres de las variables anteriores: " + cantCaracteres);