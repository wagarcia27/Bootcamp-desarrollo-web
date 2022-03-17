/* 3) El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado
Ej: numero ingresado = 5

*
***
*****
*******
*********
*******
*****
***
* 

*/

var numeroPiramide = parseInt(prompt("Ingrese numero para crear piramide"));
var caracter;
var i;
var repeticion;
var numeroPiramide = numeroPiramide + numeroPiramide;

if (numeroPiramide > 0) {
  // lo hara 5 veces
  for (i = 1; i <= numeroPiramide; i = i + 2) {
    caracter = "";
    // el numero de astericos que hace en cada repeticion
    for (repeticion = 0; repeticion < i; repeticion++) {
      caracter = caracter + "*";
    }
    console.log(caracter);
  }

  // lo hara 5 veces
  for (i = numeroPiramide - 2; i > 1; i = i - 2) {
    caracter = "";
    // el numero de astericos que hace en cada repeticion
    for (repeticion = 1; repeticion < i; repeticion++) {
      caracter = caracter + "*";
    }
    console.log(caracter);
  }
} else {

  alert("Debe ser un numero mayor que 0, vuelva a intentarlo")

}
