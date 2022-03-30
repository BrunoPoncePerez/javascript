//creamos variables
const carrito = document.querySelector('#carrito');

const contenedorCarritto = document.querySelector('#lista-carrito tbody');
/* en este contenedor se almacenan los elementos que seleccionamos
 para que se añadan al carrito */

const vaciarCarritobtn = document.querySelector('vaciar-carrito');
/* este boton limpia y vacia todo el carrito */

const listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];

//creamos un listeners

cargarEventListeners();
function cargarEventListeners()  {
//Cuando agregas un curso presionando "Agregar al carrito"
listaCursos.addEventListener('click', agregarCurso)
};

//funciones

function agregarCurso(e){
    e.preventDefault();
     
    if(e.target.classList.contains('agregar-carrito')){

    const cursoSeleccionado = e.target.parentElement.parentElement;
    leeDatosCurso(cursoSeleccionado);
    }

}

/* lee el contenido del html al que le dimos click
y extrae la informacion del curso */

function leeDatosCurso(curso) {
//console.log(curso);

//creamos un objeto con el contenido del curso actual

const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}


}

//agrega elementos al arreglo de carrito

articulosCarrito = [...articulosCarrito, infoCurso];
 console.log(articulosCarrito);
