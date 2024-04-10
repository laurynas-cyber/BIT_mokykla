console.log(document);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", (_) => {
  //kodas

  //   console.log("welcome");

  //   let body = document.querySelector("body"); // h1
  //   body.innerHTML = "<h2>Dom 2</h2>"; //sukurti body elemntui h1. InnerHtml jo viduje sukure.

  //   //   rand(0, 1) ? (body.innerHTML = "<h2>Atsitiktinai</h2>") : false;
  //   //arba
  //   body.innerHTML = rand(0, 1) ? "<h1>Atsitiktinai</h1>" : "<h2>Dom 2</h2>";

  //   const H1 = document.querySelector("body h1");
  //   const H2 = document.querySelector("body h2");

  //   if (body.innerHTML == "<h1>Atsitiktinai</h1>") {
  //     H1.innerHTML = "<span>Valio</span>";
  //   } else H2.innerHTML = "<span>Valio</span>";

  // if(document.querySelector("h1") {}) // kitas uzrasymas

  const animals = document.querySelectorAll(".animals span");

  console.log(animals); //Nodelistas masyvo brolis. neturi jokiu metodu. bet turi forEach

  animals.forEach((el) => {
    console.log(el.innerText);
  });

  const animalArray = [...animals];

  console.log(animalArray);

  animals.forEach((a) => {
    if (a.innerText == "zuikis") {
      a.innerText = "Bunny";
    }
  });

  const H1 = document.querySelector("h1");

  H1.style.color = "skyblue";
  H1.style.fontSize = "52px"; //jeigu bruksnys vietoj bruksnio raso camelCase is didzsios raides S

  //   setInterval((_) => {
  //     H1.style.color = H1.style.color == "skyblue" ? "crimson" : "skyblue";
  //   }, 1000);

  //   const blueRed = (_) => {
  //     if (H1.style.color == "skyblue") {
  //       H1.style.color = "crimson";
  //     } else {
  //       H1.style.color == "skyblue";
  //     }
  //   };

  //   setInterval(blueRed, 100);

  const Bin = document.querySelector(".bin");

  let divs = "";

  for (let i = 0; i < 20; i++) {
    divs += "<div></div>";
  }

  Bin.innerHTML = divs;

  const balls = document.querySelectorAll(".bin div");

  const BallGo = (_) => {
    balls.forEach((b) => {
      b.style.top = rand(0, 450) + "px";
      b.style.left = rand(0, 450) + "px";
    }); // padaryt kad sustotu
  };

  setInterval(BallGo, 500);
});
