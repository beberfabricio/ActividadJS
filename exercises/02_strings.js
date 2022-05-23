// 2. Strings

// a) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string 
// con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
//  la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva 
//  variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
// c) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var string1 = "hola, me llamo Fabricio";
var stringReducido = string1.substring(0,5);
console.log("Primeros 5 caracteres de la variable: " + stringReducido);

var stringMayus = string1.substring(0,1).toUpperCase() + string1.substring(1);
console.log("Caracteres de la variable con primera letra en mayus: " + stringMayus);

var posEspacioBlanco = string1.indexOf(" ");
console.log("Ubicación del primer espacio en blanco: " + posEspacioBlanco);