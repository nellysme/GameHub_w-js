const container = document.querySelector(".results");

const url ="https://api.noroff.dev/api/v1/gamehub";


async function fetchGames(){

	const response = await fetch(url);
	const results = await response.json();
	
	const games = results;

	

	

	

	

	for (let i = 1; i !=5; i++) {
		

		container.innerHTML += `<div class="card">
		
								<a href="details.html?id=${games.id}">
								
								<img class="image"src="${games[i].image}"/>
								<h1 class="card-title">${games[i].title}</h1>
								<h4 class="free-title">Price ${games[i].price}</h4>
								<h3 class="genre-title">${games[i].genre}</h3>
								<div class="add-to-cart"><p>ADD</p></div>
								</a>
								</div>`						
	}
	

	
}

fetchGames();

fetch("products.json")

.then(function(response){
	return response.json();
})

.then(function(data){
	localStorage.setItem("products", JSON.stringify(data));
	if(!localStorage.getItem("cart")){
	localStorage.setItem("cart", "[]");
	}

});

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

function addItemToCart(productId){

	let product = products.find(function(product){
		return product.id == productID;
	});

	if(cart.lenght == 0){
		cart.push(product);
		
	}else{
		let res = cart.find(element => element.id == productId);

		if(res === undefined){
			cart.push(product);
		}

	}

	localStorage.setItem("cart", JSON.stringify(cart));

}

addItemToCart(1);