// 3. Arrays

// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
//  "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).
// e) Invertir el orden del array (utilizar reverse).
// f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copiaArray = array.slice(array.indexOf("Mayo"),array.indexOf("Noviembre") + 1);

console.log("Mes 5 del arreglo: " + array[5] + ". Mes 11: " + array[11]);

console.table(array.sort());

array.unshift('nuevo primer mes');
array.push('nuevo ultimo mes')
console.table(array);

array.shift();
array.pop();
console.table(array);

console.table(array.reverse());

console.log("Arreglo en string: " + array.join(" - "));

console.table(copiaArray);