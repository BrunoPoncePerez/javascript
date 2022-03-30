window.onload = iniciar;

function  iniciar(){
    /* El boton agregar escucha el click */
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar);
    
    
    var btnBorrar = document.getElementById("btnBorrar");
    btnBorrar.addEventListener("click", clickBtnBorrar);
    mostrarNotas();
}

function clickBtnBorrar(){
localStorage.clear();
mostrarNotas();

}

function clickBtnAgregar(){
    /* traemos txtnotas */
    var txtNota = document.getElementById("txtNota");

    /* para guardar un arreglo en un localstorage creamos un arreglo... */
   var notas = [];
   if(localStorage.notas){
       notas = JSON.parse(localStorage.notas);
    }

   notas.push(txtNota.value); /* ahora esto guardamos en el local storage */
   
   localStorage.notas = JSON.stringify(notas);/* esto transforma el arreglo
   en texto y lo guarda */

   /* queda asignado en el localstorage */
    //localStorage.nota = txtNota.value;

     /* al actualizar, se pierde todo lo que hemos escrito en la nota, para 
    evitar eso utilizamos locastorage... */

    /* renderiza la nota*/
    mostrarNotas();
}


function mostrarNotas(){
/* trae el divnotas*/
    var divNotas = document.getElementById("divNotas");
    /*  y le asigna las notas desde el localstorage  */
    /*var notas = JSON.parse(localStorage.nota);  esto revierte el arreglo 
    convertido en string, cambia de string a arreglo */
    var notas = [];
    if(localStorage.notas){
        notas = JSON.parse(localStorage.notas);
     }


    html = "";
    for(var nota of notas){
      html += nota + "<br>";
    }

    /* ahora necesitamos traer el arreglo a esta funcion, por lo tanto creamos
    una variable */

   divNotas.innerHTML = html;
}

/* en el local storage solo podemos guardar string, numeros o booleanos,
pero, si queremos guardar un arreglo se nos complica un poco el asunto.
Para poder guardar un arreglo dentro del localstorage utilizamos JSON.stringify...*/



//paso a paso

/* 
1) apenas inicia el programa llama a la funcion mostrarNotas...
2)en la funcion mostrarNotas, traemos el divNotas que creamos afuera
para guardar las cosas...
3)creamos un arreglo que se llama "notas" y aqui preguntamos: ¿existen
notas dentro del localstorage? si existen las guardamos dentro de 
notas(aca agregamos un parse ya que todo lo que se guarda en el localstorage
es string, numeros y booleanos y tenemos que convertirlo).
4)despues creamos una variable html que es un string vacio y lo vamos
llenando con unas de las notas que hay en ese arreglo y una
vez que tengo mi html lo muestro dentro del divnotas.

*/








