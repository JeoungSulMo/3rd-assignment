window.onload = function() {
	const app = document.querySelector("#app");
	const loading = document.createElement("p");
	loading.innerText = "Loading...";
	app.appendChild(loading);
		

	function makeMovieList(object){
		app.removeChild(loading);
		for(i=0;i<20;i++){
		const title = document.createElement("p");
		const img = document.createElement("img");
		const desc = document.createElement("p");
		const movieTitle = object.data.movies[i].title_long;
		const movieImg = object.data.movies[i].medium_cover_image;
		const movieContent = object.data.movies[i].description_full;
		title.innerText = `${movieTitle}`;
		img.src = `${movieImg}`;
		desc.innerText = `${movieContent}`;
		const card = document.createElement("div");
		card.append(img, title, desc);
		
		app.appendChild(card);	
		}
		
	}
	function fetching(){
		fetch(`https://yts.lt/api/v2/list_movies.json?quality=3D`).then(function(response){
			return response.json()
			}).then(function(json){
				const movieData = json;
				console.log(json);
				makeMovieList(movieData);
			});		
	}

	function loadData(){
		// for(i=0 ; i<20; i++){
			 
			fetching();
			
		// }
	}
	
	
	function init(){
		loadData();
	}
	
	init();
}
