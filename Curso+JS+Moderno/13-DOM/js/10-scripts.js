const enlace = document.createElement('a');

//Agregandole el texto
enlace.textContent = 'Nuevo Enlace';

//añadiendo href
enlace.href = '#';

/* console.log(enlace); */

//seleccionar la nevegacion

const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace); appenchild agrega un hijo nuevo, pero al final
/*console.log(navegacion.children);  con esto sabemos cuantos elementos
hay y sus posiciones */
navegacion.insertBefore(enlace, navegacion.children[1]);



//crear un card de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//agregar la imagen

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid')


//crear el card 
const card = document.createElement('div');
card.classList.add('card');

//asignamos la imagen
card.appendChild(imagen);

//asignar info
card.appendChild(info);

//insertar en el html

const contenedor = document.querySelector('.hacer .contenedor-cards');
//contenedor.appendChild(card); se inserta al ultimo
contenedor.insertBefore(card, contenedor.children[0]);