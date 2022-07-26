const URL = '../temple/json/temples.json';
const cards = document.querySelector('.temples');

async function getTemples() {
	let response = await fetch(URL);
	if (response.ok) {
		let data = await response.json();
		buildTemplesCards(data);
	} else {
		throw Error(response.statusText);
	}
}

function buildTemplesCards(data) {
    data.temples.forEach(temple => {
		let card = document.createElement('section');
		let h2 = document.createElement('h2');
		let p = document.createElement('p');
		let button = document.createElement('button');
		let img = document.createElement('img');
        let numLikes = Number(window.localStorage.getItem(`${temple.key}likes`));
	
		h2.innerHTML = `${temple.name}`;
		p.innerHTML = `Address: ${temple.address}<br>Phone Number: ${temple.phone}<br>Email: ${temple.email}<br>This Temple have been liked ${numLikes} times`;
        button.innerHTML = 'Like this Temple';
        button.setAttribute('id', `${temple.key}likes`);
		img.setAttribute('src', temple.image);
		img.setAttribute('alt', `Picture of ${temple.name}`);
		img.setAttribute('loading', 'lazy');


		card.append(h2);
		card.appendChild(p);
		card.append(button);
		card.append(img);

		cards.append(card);

        const like = document.querySelector(`#${temple.key}likes`);
        like.addEventListener("click", () => {
            numLikes++;
            localStorage.setItem(`${temple.key}likes`, numLikes);
        });
	});
}

getTemples();

const gridbutton = document.querySelector("#cards");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".temples");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}