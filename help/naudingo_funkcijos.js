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
