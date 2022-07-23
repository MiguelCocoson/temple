let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

document.querySelector(
	"#lastmodified"
).textContent = `${document.lastModified}`;

function toggleMenu() {
	document.getElementById('primaryNav').classList.toggle('open');
	document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;