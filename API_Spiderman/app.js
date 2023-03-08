const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8e89f6ed78msh5315b7f9344a579p1d91c6jsncdd0224ea088",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
  },
};

fetch(
  "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr",
  options
)
  .then((response) => response.json())
  .then((data) => {
	//console.log(data)
    const arrayMovies = data.d
	//recorreremos el arreglo
	arrayMovies.map((element)=>{
		//ya tenemos el elemento, ahora capturaremos el titulo de la pelicula

		//console.log(element);
		const title = element.l
		const image = element.i.imageUrl
		const cast = element.s

		const poster = `
		<div>
			<img src="${image}"/>
			<h2>${title}</h2>
			<small>${cast}</small>
		</div>
		`
		document.getElementById("container").innerHTML += poster
	})

  })
  .catch((err) => {
    console.error(err);
  });
