function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const animals = [
  { animal: "Racoon", color: "skyblue" },
  { animal: "Fox", color: "orange" },
  { animal: "Wolf", color: "gray" },
  { animal: "Rabbit", color: "pink" },
];

window.addEventListener("load", (_) => {
  const testas = document.querySelector(".test");

  testas.insertAdjacentHTML("afterbegin", "<ul></ul>");
  const Ul = document.querySelector("ul");

  for (let i = 0; i < animals.length; i++) {
    console.log(animals[i].animal);
    Ul.innerHTML += `<li>${animals[i].animal} </li>`;
  }

  console.log(testas);

  const allLi = document.querySelectorAll("ul li");

  allLi.forEach((a, ind) => {
    a.style.color = `${animals[ind].color}`;
  });
});
