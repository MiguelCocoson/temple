let date = new Date();
let year = date.getFullYear();
document.getElementById('year').innerHTML = year;

document.querySelector(
	"#lastmodified"
).textContent = `${document.lastModified}`;