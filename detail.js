const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://api.noroff.dev/api/v1/gamehub/2ace4e1d-cad7-4d35-8d59-6c9ac3e3eaf8";

async function fetchGame() {

    const response = await fetch(url);
    const details = await response.json();


    createHtml(details);

    function createHtml(details) {
        detailContainer.innerHTML = `<h1>${details.title}</h1>
                                    <img class="image"src="${details.image}"/>
                                    <p>${details.description}</p>
                                    <h2>${details.price}</h2>
                                    `;
                                    
    }
}

fetchGame();

