const cargarPeliculas = async () => {
  try {
    const respuesta = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=57d688e2ef917753fb4c8a45bbb9125c"
    );

    if (respuesta.status === 200) {
      console.log(respuesta);
      const datos = await respuesta.json();
      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas +=
        
        `
        <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
        <div/>
        <h3 class="titulo">${pelicula.title}</h3>`;
      });

      document.getElementById("contenedor").innerHTML = peliculas;
    } else if (respuesta.status === 401) {
      console.log("La llave esta mal");
    } else if (respuesta.status === 404) {
      console.log("La pelicula que buscas no existe");
    } else {
      console.log("Hubo un error y no sabemos que sucedio");
    }
  } catch (error) {
    console.log(error);
  }
};

cargarPeliculas();
