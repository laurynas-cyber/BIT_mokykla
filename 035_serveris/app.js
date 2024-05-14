console.log("API");

window.addEventListener("load", (_) => {
  const ul = document.querySelector(".users");

  //   fetch("https://jsonplaceholder.typicode.com/users") instaliuotoja funkcija jse
  //     .then((response) => response.json())
  //     .then((users) => {
  //       console.log(users);
  //       let usersLi = "";

  //       users.forEach((u) => {
  //         usersLi += "<li>" + u.name + "</li>";
  //       });

  //       ul.innerHTML = usersLi;
  //     });

  axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
    //axiosiui JSONint neriekia jis protingas kad pats issiaiskintu
    console.log(response.data); //axiosas daug visko atiduota, ir jeigu mes norime isitraukti ko reikia reikia kreiptis i jo res.data
    let usersLi = "";

    response.data.forEach((u) => {
      usersLi += "<li>" + u.company.catchPhrase + "</li>";
    });

    ul.innerHTML = usersLi;
  });
});
