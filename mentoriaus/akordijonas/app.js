const acc = document.querySelectorAll(".aciordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const desc = this.nextElementSibling; //sekantis einantis nextElementSibling

    if (desc.style.maxHeight) {
      desc.style.maxHeight = null; // nustato i defoltine padeti. (default padetis csse)
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px"; //scrollHeight - patikrina elemento auskti
    }
  });
}


