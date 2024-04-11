console.log("welcome to Dom3");

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", (_) => {
  let animals = document.querySelectorAll(".test ul li");
  animals.forEach((el) => {
    console.log(el.innerText);
  });
  //   const NewAnimal = (document.querySelector(".test ul").innerHTML +=
  //     "<li>Beaver</li>");
  //   const ul = document.querySelector(".test ul");
  //   ul.innerHTML += "<li>Beaver</li>"; // brangus dejimas
  const Lastli = document.querySelector(".test ul li:last-child"); // pigesnis
  Lastli.insertAdjacentHTML("afterend", "<li>Wolf</>");
  animals = document.querySelectorAll(".test ul li");
  animals.forEach((el, ind) => {
    if (ind % 2 == 0) {
      el.style.color = "blue";
    }
    if (ind % 2 != 0) {
      el.style.fontSize = "40px";
    }
  });

  animals.forEach((a, i) => {
    if (i == 0 || i == 2) {
      a.innerText += "----*";
    }
  });
});
