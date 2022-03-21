var operandoa;
var operandob;
var operacion;

//variables
var igual = document.getElementById("igual");
var clear = document.getElementById("clear");
var sumar = document.getElementById("sumar");
var restar = document.getElementById("restar");
var multiplicar = document.getElementById("multiplicar");
var dividir = document.getElementById("dividir");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById("cero");
var display = document.getElementById("display");

//agregar al display cada numero al hacer click
cero.addEventListener("click", function () {
  display.textContent = display.textContent + "0";
});

uno.addEventListener("click", function () {
  display.textContent = display.textContent + "1";
});

dos.addEventListener("click", function () {
  display.textContent = display.textContent + "2";
});

tres.addEventListener("click", function () {
  display.textContent = display.textContent + "3";
});

cuatro.addEventListener("click", function () {
  display.textContent = display.textContent + "4";
});

cinco.addEventListener("click", function () {
  display.textContent = display.textContent + "5";
});

seis.addEventListener("click", function () {
  display.textContent = display.textContent + "6";
});

siete.addEventListener("click", function () {
  display.textContent = display.textContent + "7";
});

ocho.addEventListener("click", function () {
  display.textContent = display.textContent + "8";
});

nueve.addEventListener("click", function () {
  display.textContent = display.textContent + "9";
});

clear.addEventListener("click", function () {
  resetear();
});
//Aqui reseteo todo con C
function resetear(){
  display.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}

//Aqui empiezan las operaciones
sumar.addEventListener("click", function () {
  operandoa = display.textContent;
  operacion = "+";
  limpiar();
});

restar.addEventListener("click", function () {
  operandoa = display.textContent;
  operacion = "-";
  limpiar();
});

multiplicar.addEventListener("click", function () {
  operandoa = display.textContent;
  operacion = "*";
  limpiar();
});


dividir.addEventListener("click", function () {
  operandoa = display.textContent;
  operacion = "/";
  limpiar();
});

//definicion de funcion limpiar
function limpiar(){
  display.textContent = "";
}
//boton igual
igual.addEventListener("click", function () {
  operandob = display.textContent;
  resolver();
});

//Aqui defino que hace la funcion resolver para cada operación
function resolver(){

  var total = 0;

  if(operacion == "+"){

    total = parseFloat(operandoa) + parseFloat(operandob);
    resetear();
    display.textContent = total;
  }

  else if(operacion == "-"){

    total = parseFloat(operandoa) - parseFloat(operandob);
    resetear();
    display.textContent = total;

  }

  else if(operacion == "*"){

    total = parseFloat(operandoa) * parseFloat(operandob);
    resetear();
    display.textContent = total;

  }

  else{
    total = parseFloat(operandoa) / parseFloat(operandob);
    resetear();
    display.textContent = total;
  
  }
}




// aqui comienza el contador de palabras

var mayuscula = document.getElementById("mayuscula");
var minuscula = document.getElementById("minuscula");
var contarC = document.getElementById("contarC");
var textArea = document.getElementById("textArea");
var displayC = document.getElementById("displayC");
var espacio;

//boton mayuscula
mayuscula.addEventListener("click", function () {
  espacio = textArea.value;
  textArea.value = espacio.toUpperCase();
});

//boton minuscula
minuscula.addEventListener("click", function () {
  espacio = textArea.value;
  textArea.value = espacio.toLowerCase();
});

//boton contar caracteres
contarC.addEventListener("click", function () {
  espacio = textArea.value.length;
  displayC.innerHTML = "El numero de caracteres es: " + espacio;
});
