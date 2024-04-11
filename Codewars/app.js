// if (!/^(\d+ )+\d+$/gi.test(sequence)) return 1;
// /[^\d\s]/.test(sequence) ? 1 : (sequence.match(/\d+/g)
// sequence.replace(/\s/g, ',')
// const regex = /[A-Z]/g;

//your string skaiciai turi tureti eiliskuma. grazina trukstama skaiciu code here https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript
function findMissingNumber(sequence) {
  let v = sequence.split(" ");
  let max = Math.max(...v);
  let min = Math.min(...v);
  let sum = 0;
  v.sort();

  if (sequence == "" || sequence == " ") return 0;
  if (v[0] != 1) return 1;
  for (let index = 0; index < v.length; index++) {
    let bool1 = v[index] - 0 >= 0;
    let bool2 = v[index] - 0 <= 0;
    if (bool1 == false && bool2 == false) return 1;
  }

  for (let i = 1; i <= v.length; i++) {
    sum = sum + parseInt(v[i - 1]);
    if (!v.includes(i.toString())) {
      return i;
    }
  }

  let realSum = 0;
  for (let i = max; i > 0; --i) {
    realSum = realSum + i;
  }

  if (realSum - sum == 0) {
    return 0;
  }
}

//surassti vidurine raide zody https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  let max = s.length;
  let middle = Math.floor(max / 2);
  if (max % 2 == 0) {
    return s[middle - 1] + s[middle];
  } else return s[middle];
}

console.log(getMiddle("test"));
console.clear();
//https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
  let textOdd = "";
  let textEven = "";
  // console.log("funkcijoj:", text);
  for (let j = 1; j < text.length; j += 2) {
    textOdd = textOdd + text[j];
  }
  for (let j = 0; j < text.length; j += 2) {
    textEven = textEven + text[j];
  }
  if (text == "" || n <= 0) {
    return text;
  } else if (n > 0) {
    text = textOdd + textEven;
    return (text = encrypt(text, n - 1));
  }
}

console.log("atsakymas", encrypt("This is a test!", 3));
console.log("atsakymas", encrypt("012345", 3));

function decrypt(encryptedText, n) {
  
}

console.log("atsakymas", decrypt("This is a test!", 3));
console.log("atsakymas", decrypt("012345", 3));

console.log("lanas"[4]);
