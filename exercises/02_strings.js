var string1 = "hola, me llamo Fabricio";
var stringReducido = string1.substring(0,5);
console.log("Primeros 5 caracteres de la variable: " + stringReducido);

var stringMayus = string1.substring(0,1).toUpperCase() + string1.substring(1);
console.log("Caracteres de la variable con primera letra en mayus: " + stringMayus);

var posEspacioBlanco = string1.indexOf(" ");
console.log("Ubicación del primer espacio en blanco: " + posEspacioBlanco);