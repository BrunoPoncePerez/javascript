const reproductor = {

    cancion: '',

    reproducir: () => console.log(`Reproduciendo cancion...`),
   
    pausar: () => console.log('Pausando'),
    
    borrar: () => console.log('Borrando cancion'),
    
    crearPlaylist: Nombre => console.log(`Creando playlist: ${Nombre}`),
     
    reproducirPlaylist: Nombre => console.log(`Reprocuciendo Playlist: ${Nombre}`),
   

    /* una forma de agregar valores */
    set nuevaCancion(cancion){

        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
     

    /* obtiene los valores que le habiamos proporcionado */
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }


  }



  /* como utilizamos set y get */
  reproductor.nuevaCancion = 'Enamorada';
  reproductor.obtenerCancion;


  
  
  reproductor.reproducir();
  reproductor.pausar();
  reproductor.borrar();
  reproductor.crearPlaylist('Rock');
  reproductor.crearPlaylist('Salsa');
  reproductor.crearPlaylist('Rap');
  reproductor.reproducirPlaylist('Rock');
  console.log(reproductor);
  