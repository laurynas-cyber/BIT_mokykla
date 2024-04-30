// selektinam elementus
const valio = document.querySelector(".valio div");
const H3du = document.querySelector("h3 + h3");
document.querySelectorAll(".animals span");
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

//stilius
H1.style.fontSize = "52px"; //jeigu bruksnys vietoj bruksnio raso camelCase is didzsios raides S

//pridedi i sarasa https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
const ul = document.querySelector(".test ul");
ul.innerHTML += "<li>Beaver</li>"; // brangus dejimas
const Lastli = document.querySelector(".test ul li:last-child"); // pigesnis
Lastli.insertAdjacentHTML("afterend", "<li>Wolf</>");

// kitas html modifakvimo budas

const top = document.querySelector(".top"); //surandam elementa

const h1 = document.createElement("h1"); //sukuriam h1

const text = document.createTextNode("Labas"); // sukuriam teksta

h1.appendChild(text); //priskiriam h1 teksta.

top.appendChild(h1); //elementui priskiriam h1 taga su tekstu. append child prideda prie elemento pabaigos

//elementas tas tekstas bus priskirtas tik vienam elementui. antra teksta sukurti reikia atskirai.

top2.remove(); //istrina elementa

i1.value; //paiima inputo reiskme
//
parent.addEventListener("click", (_) => {
  parent.style.backgroundColor = "red"; // pakeis tiktai vienam
});

child.addEventListener("click", (event) => {
  event.stopPropagation(); // sustabdo bublinima
  child.style.backgroundColor = "yellow"; //evento bublinimas. nusidazys abu. reikia stabdyti bubblinima stopPropogation()
});

//jeigu tagas submit, button, a turi mygtuko veikima tai preventDefault sustabdo ta veikima
const vz = document.querySelector("a");

vz.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("valio");
});

input.setAttribute("type", "checkbox"); //prideda atributa

btn.closest(".--modal").style.display = "none"; //artimiausias esanti elementas --modal
