/*
EJERCICIO



Se le solicita al usuario que ingrse:
- Nombre, Apellido, Email y Telefono
- Fecha
- Productos (cantidad, nombre del producto y precio)

Cuando haga click en "Generar factura": 
- mostrar todos los datos (ordenados), calculando el total a pagar
variable = variable + "<br>" + dato_input
 */

var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var email = document.getElementById("email");
var telefono = document.getElementById("telefono");
var fecha = document.getElementById("fecha");
var cantidad = document.getElementById("cantidad");
var nombreP = document.getElementById("nombreP");
var precio = document.getElementById("precio");
var imprimir = document.getElementById("imprimir");
var h3 = document.getElementById("h3");
var agregar = document.getElementById("agregar");

var primero = document.getElementById("11");
var segundo = document.getElementById("12");
var tercero = document.getElementById("13");
var cuarto = document.getElementById("14");
var quinto = document.getElementById("21");
var sexto = document.getElementById("22");
var septimo = document.getElementById("23");
var octavo = document.getElementById("24");


var espacio = "";

agregar.addEventListener("click", function () {
    
    /* espacio = espacio + "<br>" + nombreP.value + " " + precio.value + " " + cantidad.value;
    localStorage.setItem("dato5", espacio);
    nombreP.value = "";
    precio.value = "";
    cantidad.value = ""; */
    
    espacio = espacio + nombreP.value;
    localStorage.setItem("dato5", espacio);
    nombreP.value = "";
    primero.innerText = localStorage.getItem("dato5", espacio);

    espacio = espacio + nombreP.value;
    localStorage.setItem("dato6", espacio);
    nombreP.value = "";
    quinto.innerText = localStorage.getItem("dato6", espacio);

   /*  primero.innerText = espacio + nombreP.value;
    nombreP.value = "";
    segundo.innerText = espacio + precio.value;
    precio.value = "";
    tercero.innerText = espacio + cantidad.value;
    cantidad.value = "";
    cuarto.innerText = segundo.innerText * tercero.innerText; */

});

/* agregar.addEventListener("click", function () {

    quinto.innerText = espacio + nombreP.value;
    nombreP.value = "";
    sexto.innerText = espacio + precio.value;
    precio.value = "";
    septimo.innerText = espacio + cantidad.value;
    cantidad.value = "";
    octavo.innerText = sexto.innerText * septimo.innerText;

}); */



var nombre2 = "";
var apellido2 = "";
var email2 = "";
var telefono2 = "";
var fecha2 = "";

imprimir.addEventListener("click", function () {
    
    nombre2 = nombre2 +"<br>" + nombre.value;
    localStorage.setItem("dato", nombre2);
    
  
    apellido2 = apellido2 + apellido.value;
    localStorage.setItem("dato1", apellido2);

    email2 = email2 + email.value;
    localStorage.setItem("dato2", email2);

    telefono2 = telefono2 + telefono.value;
    localStorage.setItem("dato3", telefono2);

    fecha2 = fecha2 + fecha.value;
    localStorage.setItem("dato4", fecha2);
    
});




imprimir.addEventListener("click", function () {
  h3.innerHTML = "Sr/a" + localStorage.getItem("dato") + " " + localStorage.getItem("dato1") + "<br>" +
   "Correo:" + " " + localStorage.getItem("dato2") + "<br>" + "Telefono:" + " " +
    localStorage.getItem("dato3") + "<br>" + "Fecha:" + " " + localStorage.getItem("dato4") + "<br>" +
     "<br>" + "Productos:" + "<br>";
});



