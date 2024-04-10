// selektinam elementus 
const valio = document.querySelector(".valio div");
const H3du = document.querySelector("h3 + h3");

//Nodelistas masyvo brolis. neturi jokiu metodu. bet turi forEach
const animals = document.querySelectorAll(".animals span");

console.log(animals); 

animals.forEach((el) => {
  console.log(el.innerText);
});

//jeigu Nodelista reikia padaryti i masyva
const animalArray = [...animals];

// valio viduj innerHtaml sukurie tag viduje elementa
valio.innerHTML = "<b>888</b>";

//elemento viduj paselektinam ir ir pakeiciam jo text
const h2Get = document.querySelector("h2 + h2");
h2Get.innerText = "Pakeistas";

