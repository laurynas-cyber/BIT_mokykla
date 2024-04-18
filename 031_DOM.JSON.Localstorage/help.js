event.stopPropagation();

document.querySelector("button.ra").addEventListener("click", (_) => {
  document.querySelectorAll('[type="radio"]').forEach((c) => {
    if (c.checked) {
      console.log(c.value);
    }
  });
});

document.querySelector("button.select").addEventListener("click", (_) => {
  const value = document.querySelector("select").value; //su selekt ir options
  console.log(value);
});

const testas = document.querySelector(".test");

testas.insertAdjacentHTML("afterbegin", "<ul></ul>");

testas.classList.add("test");

console.log(testas.classList.contains("test"));

setInterval((_) => {
  testas.classList.toggle("back"); //jeigu nera back ji ideda jeigu yra isema
}, 1000);

const top = document.querySelector(".top");

const h1 = document.createElement("h1"); //sukuriam h1

const text = document.createTextNode("Labas"); // sukuriam teksta

h1.appendChild(text); //priskiriam h1 teksta

top.appendChild(h1);

//elementas top bus tuscias nes tekstas bus priskirtas tik vienam

top2.remove(); //istrina elementa

top2.appendChild(h1);
