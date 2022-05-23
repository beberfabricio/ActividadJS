var diasHabiles = ["lunes","martes","miercoles","jueves","viernes"];

for (var i=0; i < diasHabiles.length; i++) {
    alert(diasHabiles[i]);
}

for (var i=0; i < diasHabiles.length; i++) {
    alert("Día modificado: " + diasHabiles[i].substring(0,1).toUpperCase() + diasHabiles[i].substring(1));
}

var arrayBucle = [];
for (var i=0; i < 10; i++) {
    arrayBucle[i] = i;
}
console.log("Cantidad de elementos dentro del array: " + arrayBucle.length);
console.log("Estos son: " + arrayBucle);