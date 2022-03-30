const reproductor = {
  reproducir: function(){
      console.log(`Reproduciendo cancion...`);
  },
  pausar: function(){
      console.log('Pausando');
  },
  borrar: function(){
      console.log('Borrando cancion');
  },
  crearPlaylist: function(Nombre){
      console.log(`Creando playlist: ${Nombre}`);
  }, 
  reproducirPlaylist: function(Nombre){
      console.log(`Reprocuciendo Playlist: ${Nombre}`)
  }
 

}


reproductor.reproducir();
reproductor.pausar();
reproductor.borrar();
reproductor.crearPlaylist('Rock');
reproductor.crearPlaylist('Salsa');
reproductor.crearPlaylist('Rap');
reproductor.reproducirPlaylist('Rock');
console.log(reproductor);
