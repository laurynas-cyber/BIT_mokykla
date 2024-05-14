const button = document.querySelector("button");
const p = document.querySelector("p");
const url = "https://api.chucknorris.io/jokes/random";

function getJoke() {
  fetch(url).then((res) =>
    res.json().then((data) => (p.innerHTML = data.value))
  );
}

button.addEventListener("click", getJoke);


// https://www.thecocktaildb.com/api.php