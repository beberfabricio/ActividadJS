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