window.onload = function() {
	const app = document.querySelector("#app");
	const loading = document.createElement("p");
	loading.innerText = "Loading...";
	app.appendChild(loading);
	
	
	function appStyle(app) {
		app.classList.add("row");
		const opt = {
			padding: "50px",
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "space-around",
		}
		Object.assign(app.style, opt);
	}



	function makeMovieList(object){
		app.removeChild(loading);

		for(i=0;i<20;i++){
		const title = document.createElement("p");
		const img = document.createElement("img");
		const desc = document.createElement("p");
		desc.classList.add("content");
		title.classList.add("title");
		const movieTitle = object.data.movies[i].title_long;
		const movieImg = object.data.movies[i].medium_cover_image;
		const movieContent = object.data.movies[i].description_full;
		title.innerText = `${movieTitle}`;
		img.src = `${movieImg}`;
		desc.innerText = `${movieContent}`;
		const card = document.createElement("div");
		card.className += "col-md-6 col-sm-12";
		const cardIn = document.createElement("div");
		cardIn.className += "movie";
		const wrapper1 = document.createElement("div");
		wrapper1.classList.add("movieCol1");
		const wrapper2 = document.createElement("div");
		wrapper2.classList.add("movieCol2");
		wrapper1.append(img);
		wrapper2.append(title, desc);
		cardIn.appendChild(wrapper1);
		cardIn.appendChild(wrapper2);
		app.appendChild(card);
		card.appendChild(cardIn);
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
