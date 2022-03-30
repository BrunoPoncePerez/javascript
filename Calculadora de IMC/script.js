/* Si escribimos codigo JS que interactue con el codigo
HTML, es recomendable que haya cargado totalmente la pagina,
puede darse el caso de que el codigo JS se ejecute
primero sin que nuestra pagina termine de cargarse, 
entonces lo solucionamos de la siguiente manera*/

window.onload = iniciar; /* con esto indicamos que cuando
haya cargado completamente la pagina web, llame a la funcion
iniciar */
function iniciar(){
/* lo primero que haremos es que se haga algo cuando
le demos click al boton calcular */

var btnCalcular = document.getElementById("btnCalcular"); /* con esto, llamamos a un elemento html y 
lo guardamos en una variable, aca lo buscamos por el id y le ponemos 
el mismo nombre a la variable para evitar confuciones */

/* (2...) */
btnCalcular.addEventListener("click", clickBtnCalcular); /* esto escucha cuando
haces click en el boton de calcular, le pasamos lo que va a escuchar y el parametro
 */
}


function clickBtnCalcular(){
    /* aca basicamente colocamos todo el codigo que se va a ejecutar
cuando hagamos click en el boton calcular */
/*alert("click");  (1)... */
var txtPeso = document.getElementById("txtPeso");
var peso = txtPeso.value;
var txtAltura= document.getElementById("txtAltura");
var altura = txtAltura.value;

var imc = peso / (altura * altura);
alert("Su IMC es: " + Math.round(imc));/* con math.round redondeamos el
resultado calculado */
}


















