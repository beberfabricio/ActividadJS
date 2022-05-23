// 4. If Else

// a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
// si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5”
// y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]
// b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
//      - “Menor” si la edad es menor a 18
//      - “Mayor” si la edad es mayor o igual a 18 Y menor que 65
//      - “Jubilado” si la edad es mayor o igual que 65.

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