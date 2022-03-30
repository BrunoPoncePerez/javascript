const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

/* .map te crea un arreglo nuevo */

/* carrito.map( function(p){
console.log(`${p.nombre} - Precio: ${p.precio}`)
}) */
const nuevoArreglo =carrito.map( function(p){
return `${p.nombre} - Precio: ${p.precio}`
})

/*  y forEach no */

/* carrito.forEach( function(p){
console.log(`${p.nombre} - Precio: ${p.precio}`)
}) */
const nuevoArreglo2 = carrito.forEach( function(p){
    return `${p.nombre} - Precio: ${p.precio}`
    })

    console.log(nuevoArreglo)
    console.log(nuevoArreglo2)
