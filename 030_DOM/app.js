console.log("hi");

const obj = {
  smartAnimal32: "Fox",
  funnyAnimal88: "Racoon",
  bigAnimal105: "Wolf",
};

const vz = document.querySelector("a");

vz.addEventListener("click", (e) => {
  e.preventDefault(); //jeigu tagas submit, button, a turi mygtuko veikima tai preventDefault sustabdo ta veikima
  console.log("valio");
});

document.querySelector("button.select").addEventListener("click", (_) => {
  const value = document.querySelector("select").value;
  console.log(value);
});

document.querySelector("button.cb").addEventListener("click", (_) => {
  document.querySelectorAll('[type="checkbox"]').forEach((c) => {
    if (c.checked) {
      // su chekboxu savybe checked
      console.log(c.value);
    }
  });
});

document.querySelector("button.ra").addEventListener("click", (_) => {
  document.querySelectorAll('[type="radio"]').forEach((c) => {
    if (c.checked) {
      // su chekboxu savybe checked
      console.log(c.value);
    }
  });
});
