const acc = document.querySelectorAll(".aciordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const desc = this.nextElementSibling; //sekantis einantis nextElementSibling

    console.log();
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px"; //scrollHeight - patikrina elemento auskti
    }
  });
}

// console.log("lol");
