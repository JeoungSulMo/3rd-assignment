window.onload = function() {
	const app = document.querySelector("#app");
	const cardCss = document.querySelector(".card");
	const loading = document.createElement("p");
	loading.innerText = "Loading...";
	app.appendChild(loading);
	
	const body = document.querySelector("body");
	body.className += "container";
	
	

	function appStyle(app) {
		app.className += "row";
		app.style.padding="50px";
		app.style.display="flex";
		app.style.flexWrap="wrap";
		app.style.justifyContent="space-around";
	}


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
		card.className += "card col-md-6 col-sm-12";
		console.log(card);
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
			appStyle(app);
			
		// }
	}
	
	
	function init(){
		loadData();
	}
	
	init();
}
