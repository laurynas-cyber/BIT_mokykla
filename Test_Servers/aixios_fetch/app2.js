const url = "http://www.thecocktaildb.com/api/json/v1/1/list.php?g=list";

// fetch(url).then((res) => res.json().then((data) => console.log(data))); lygiai tas pats

axios.get(url).then((res) => console.log(res.data));
