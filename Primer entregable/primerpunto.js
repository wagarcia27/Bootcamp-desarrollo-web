/*1) Dado el array = [1,2,3,4,5,6]

	- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla. OK

	- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla. OK

	- Mostrar todos los elementos dentro de un array sumándole uno a cada uno. OK

	- Generar una copia de un array pero con todos los elementos incrementado en 12.

	- Calcular el promedio de la copia
*/

// COPIAR Y CORRER TODO EL CODIGO DE AQUI HACIA ABAJO, SE VISUALIZARA EN console.LOG

// primer ejercicio
var vector = [1, 2, 3, 4, 5, 6];
i = 0;
while(i < 6 ){

console.log(vector[i]);
i = i + 1;
}

// segundo ejercicio
var vector = [1, 2, 3, 4, 5, 6];
var i;
for (i = 0; i < 6; i++){

console.log(vector[i]);

}

// Tercer ejercicio
var vector = [1, 2, 3, 4, 5, 6];
var i;

for (i = 0; i < 6; i++){
vector[i] = 1 + vector[i];
}
console.log(vector);

// cuarto ejercicio cambiar + o * segun corresponda
var vector = [1, 2, 3, 4, 5, 6];
var i;
var vectorCopia = [];

for (i = 0; i < 6; i++){
vectorCopia[i] = vector[i] + 12;
}
console.log(vectorCopia);

// quinto ejercicio
var vectorCopia = [13, 14, 15, 16, 17, 18];

for (var i = 1; i < 6; i++) {
  vectorCopia[i] = vectorCopia[i] + vectorCopia[i - 1];
}
console.log("El promedio de la copia es " + vectorCopia[5] / 6);