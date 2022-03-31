
//Escribo todo mi codigo dentro de la funcion
$(document).ready(function(){

//document.getElementById("boton");
$("#boton");
//document.getElementsByClassName("texto");

var a = $(".texto").html(); //document.getElementsByClassName("texto").innerHTML
var b = $(".texto").text(); //document.getElementsByClassName("texto").innetText

//$("myForm : input");

console.log(a);
console.log(b);
});

//boton.addEventListener(function(){});

$("#boton").click(function(){

alert("hiciste click");

var inp = $("#nombre").val();

$('#div').append('<h3>' + inp + '</h3>');
$(".texto").css("color", "blue");
$(".texto").css("margin-left", "30px"); 
//O podemos hacer esto igual a lo de arriba $(".texto").css("color", "blue").css("margin-left", "30px"); 

$("#nombre").val("no señor")

$("#lore").fadeOut(1000);
});

