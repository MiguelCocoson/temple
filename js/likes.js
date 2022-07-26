const like = document.querySelector("#like");

like.addEventListener("click", () => {
    numLikes++;
});

localStorage.setItem("visits-ls", numVisits);

const frequency = document.querySelector(".daily");

let frequencyd = Number(window.localStorage.getItem("frequency"));
frequency.textContent = Math.round(numVisits / frequencyd);


let lastvisit = window.localStorage.getItem("lastvisit");

localStorage.setItem('frequency', frequencyd)