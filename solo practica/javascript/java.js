/*var bot = document.getElementById("boton");

bot.addEventListener("click", function () {
  var num = 3;
  console.log(
    "Hiciste click en el boton jeje y de paso te coloco mi numero favorito " +
      num
  );
});
*/
//otro ejemplo

/* 
var btn = document.getElementById("buton");
var input = document.getElementById("input");

btn.addEventListener("click", function () {
  var asd = input.value;
 alert(asd)
});
*/

var btn = document.getElementById("buton");
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

btn.addEventListener("click", function () {
  var num1 = input1.value;
  var num1 = parseFloat(num1)
  var num2 = input2.value;
  var num2 = parseFloat(num2)
  
 alert(num1 + num2)

 input1.value = "";
 input2.value = "";

});
