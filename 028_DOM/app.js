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

  testas.classList.add("back"); // prideda klase prie testo

  testas.classList.add("test");

  console.log(testas.classList.contains("test")); // tikrina ar turi
  console.log(testas.classList.contains("back"));

  setInterval((_) => {
    testas.classList.toggle("back"); //jeigu nera back ji ideda jeigu yra isema
  }, 1000);

  const top = document.querySelector(".top");
  const top2 = document.querySelector(".top2");
  // top.innerHTML = "<h1>labas</h1>";

  // kitas html modifakvimo budas

  const h1 = document.createElement("h1"); //sukuriam h1

  const text = document.createTextNode("Labas"); // sukuriam teksta
  const text2 = document.createTextNode("ate");
  h1.appendChild(text); //priskiriam h1 teksta

  console.log(h1);

  top.appendChild(h1);

  //elementas top bus tuscias nes tekstas bus priskirtas tik vienam

  top2.remove(); //istrina elementa

  top2.appendChild(h1);

  const ul = document.createElement("ul");

  const body = document.querySelector("body");

  body.appendChild(ul);

  animals.forEach((a, ind) => {
    let textas = document.createTextNode("" + animals[ind].animal + "");
    // console.log(textas);
    let li = document.createElement("li");
    li.appendChild(textas);
    li.style.color = a.color;
    ul.appendChild(li);
  });
});
