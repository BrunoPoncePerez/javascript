window.onload = iniciar;

var tareas = [];/* creamos una variable fuera de la funcion, ahora tenemos
que agregarla */


function iniciar(){

    var btnAgregar = document.getElementById("btnAgregar");/* creamos la variable
    y traemos el elemento que queremos escuchar por medio de su id */
    btnAgregar.addEventListener("click", clickBtnAgregar)


}

function clickBtnAgregar(){
    /* necesitamos el valor del texto  */
    var txtarea = document.getElementById("txtexto");
    var tarea = txtexto.value;
    tareas.push(tarea);/*  de esta manera estamos guardando en ese arreglo */
    mostrarTareas();
}
/* todas las variables que se ejecutan en esa funcion mueren y desaparecen.
Para poder almacenar datos, tenemos que crear una variable, fuera de estas 
funciones*/

/* ahora creamos una funcion más para que se muestren las tareas */

function mostrarTareas(){
    var listado = document.getElementById("listado");
    var html = "";
    for(tarea of tareas)/* con esto mostramos todo lo que tiene el arreglo */{
        html += tarea + "<br>";
    }
    listado.innerHTML = html;/* aca cambiamos el contenido del html */
}