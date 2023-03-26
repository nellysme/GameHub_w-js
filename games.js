const container = document.querySelector(".game-results");

const url ="https://api.noroff.dev/api/v1/gamehub";


async function fetchGames(){

	const response = await fetch(url);
	const results = await response.json();
	
	const games = results;

	console.log(results);

	

	

	

	for (let i = 0; i !=20; i++) {
		

		container.innerHTML += `<div class="card">
		
								<a href="details.html?id=${games.id}">
								
								<img class="image"src="${games[i].image}"/>
								<h1 class="card-title">${games[i].title}</h1>
								<h4 class="free-title">Price ${games[i].price}</h4>
								<h3 class="genre-title">${games[i].genre}</h3>
								</a>
								</div>`						
	}
	

	
}

fetchGames();