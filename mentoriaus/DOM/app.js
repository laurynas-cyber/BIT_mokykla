function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", (_) => {
  const count = document.querySelector(".count");
  const substr = document.querySelector("button");
  const reset = document.querySelector("button + button");
  const add = document.querySelector(".add");
  const buttons = document.querySelector(".buttons");

  buttons.addEventListener("click", function (e) {
    if (e.target.classList.contains("add")) {
      count.innerHTML++;
      setColor();
    } else if (e.target.classList.contains("substract")) {
      count.innerHTML--;
      setColor();
    } else if (e.target.classList.contains("reset")) {
      count.innerHTML = 0;
      setColor();
    }
  });
  //kitas sprendimas
  //   substr.addEventListener("click", (e) => {
  //     // count.innerText = count.innerText - 1;
  //     count.innerHTML--;
  //   });
  //   add.addEventListener("click", (e) => {
  //     // count.innerText = count.innerText - 0 + 1;
  //     count.innerHTML++;
  //   });
  //   reset.addEventListener("click", (e) => {
  //     count.innerText = 0;
  //   });

  const setColor = () => {
    if (count.innerHTML > 0) {
      count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
      count.style.color = "red";
    } else count.style.color = "white";
  };
});
