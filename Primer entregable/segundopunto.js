/* 2) Dado un número ingresado por el usuario, crear la serie de Fibonacci.
Ej: si se ingresa 7, se debe mostrar 1 1 2 3 5 8 13 */

var numeroFibonacci = parseInt(prompt("Digite un numero para calcular la serie de Fibonacci"));
var vectorFibonacci = [];

vectorFibonacci[0] = 1;
vectorFibonacci[1] = 1;

if (numeroFibonacci > 0) {

  for (var i = 2; i < numeroFibonacci; i++) {
    vectorFibonacci[i] = vectorFibonacci[i - 2] + vectorFibonacci[i - 1];
  }
  console.log(vectorFibonacci);
} else {
  alert("Debe ser un numero positivo mayor a 0");
}