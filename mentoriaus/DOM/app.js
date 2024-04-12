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
  console.log(count, substr, reset, add);

  
});
