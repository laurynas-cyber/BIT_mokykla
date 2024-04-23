window.addEventListener("load", (_) => {
  const animal1 = "Antis";

  const animalSvoris = 200;
  const animal3 = {
    a: "Antis",
    w: 200,
  };

  const zoo = document.querySelector(".zoo");

  zoo.dataset.a1 = animal1; //padeda animal i zoo div

  const readAnimal1 = zoo.dataset.a1;

  console.log(readAnimal1, typeof readAnimal1);

  zoo.dataset.a2 = animalSvoris;
  zoo.dataset.a3 = JSON.stringify(animal3);
  const readAnimal2 = parseFloat(zoo.dataset.a2);
  const readAnimal3 = JSON.parse(zoo.dataset.a3);
  console.log(readAnimal2, typeof readAnimal2);
  console.log(readAnimal3, typeof readAnimal3, readAnimal3.w);

  //JSON java script objekt notation aprasymas. taisykliu rinkys kaip objekta paversti i stringa ir is stringo i objekt. jeigu to nedarysim gausim suplota objekta

  const h1 = document.querySelector("h1");
  const addInput = document.querySelector("input.add");
  const addButton = document.querySelector("button.add");
  const delButton = document.querySelector("button.del");
  if (localStorage.getItem("myH1") !== null) {
    h1.innerText = localStorage.getItem("myH1"); //visada rodys ka irasai i inputa, gali refreshinti. jeigu nera gausim null
    //null reiskia yra objektas bet dar neaisku koks. null simbolizuoja objekto nebuvima
  }

  console.log(JSON.parse(localStorage.getItem("arr1")));

  console.log(JSON.parse(localStorage.getItem("d2")));

  addButton.addEventListener("click", (_) => {
    const addValue = addInput.value;
    console.log(addValue);
    localStorage.setItem("arr", [1, 2, 3]);
    localStorage.setItem("arr1", JSON.stringify([1, 2, 3]));
    localStorage.setItem("myH1", addValue); //local storage key:myH1 (susikurti paciam) addValue bus reiksme ne kintamasis ir tai bus stringas
    const d = 400;
    localStorage.setItem("d", d);

    localStorage.setItem("d2", JSON.stringify(d));
    h1.innerText = addValue;
  });

  delButton.addEventListener("click", (_) => {
    localStorage.removeItem("myH1"); //local storage istrina itema.
    h1.innerText = "---";
  });

  const color = document.querySelector(".color");
  if (localStorage.getItem("color") !== null) {
    color.value = localStorage.getItem("color");
  }
  color.addEventListener("change", (_) => {
    localStorage.setItem("color", color.value);
  });

  let from = 10;

  let timerId;

  const h5 = document.querySelector("h5");
  const timergo = document.querySelector(".timer");
  h5.innerText = from;
  timergo.addEventListener("click", (_) => {
    clearInterval(timerId);
    timerId = setInterval((_) => {
      from--;
      h5.innerText = from;
    }, 1000);
  });
});
