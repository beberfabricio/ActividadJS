var numAleatorio = Math.random();
if (numAleatorio >= 0.5) {
    alert("Greather than 0,5");
} else {
    alert("Lower than 0,5");
}

var age = Math.ceil(Math.random()*100);
if (age < 18) {
    alert("Menor");
} else if (age >= 18 && age <= 65) {
    alert("Mayor");
} else {
    alert("Jubilado");
} 