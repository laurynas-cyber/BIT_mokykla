function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// faktorial
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// random skaiciai
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min - 1) + min);
}

//unikalus skaicius masyve
function getUnique(array) {
  return [...new Set(array)]; //paskaityt apie Set ir new
}

const unique = getUnique([1, 1, 1, 1, 2, 2, 2, 3, 5, 8, 9, 99, 99, 0]);

console.log(unique);

// arguments naudojimas.
function sumAllElements() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;
}

let result = sumAllElements(1, 15, 4, 5, 5);

console.log(result);

// balsiu paieska

function getVowels(str) {
  const m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels("sky"));

// pirmas argumentas funkcija. antras ka nori padaryti { } skliaustuose?? ir sekundes po kiek laiko tai bus
setTimeout(function () {
  console.log("hello");
}, 3000);

// kas kiek laiko persijungines pakeitimai
setInterval((_) => {
  a.style.color = a.style.color == "red" ? "skyblue" : "red";
}, 1000);

// spausdus atliekami dalykai. Eventu vietoj click yra daugybe
sc_div.addEventListener("click", function () {
  userLabel_div.style.backgroundColor = "red";
  compLabel_div.style.backgroundColor = "red";
  game("s");
});


//Imgreaderis parvertina ji bianrini ir talpina i serverio public folderi duoda failui varda


const writeImage = (imageBase64) => {
  if (!imageBase64) {
    return null;
  }
  let type;
  let image;
  if (imageBase64.indexOf("data:image/png;base64,") === 0) {
    type = "png";
    image = Buffer.from(
      imageBase64.replace(/^data:image\/png;base64,/, ""),
      "base64"
    ); // Buffer pavercia faila i bianrini data
  } else if (imageBase64.indexOf("data:image/jpeg;base64,") === 0) {
    type = "jpg";
    image = Buffer.from(
      imageBase64.replace(/^data:image\/jpeg;base64,/, ""),
      "base64"
    );
  } else {
    res.status(500).send("Bad image format");
    return;
  }
  const filename = md5(uuidv4()) + "." + type; //md uuida darom tam kam nesidubliuodu pavadinimai ir neowerritintu failo
  fs.writeFileSync("public/images/" + filename, image);
  return filename;
};