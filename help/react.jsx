// componentai, props, state - react trys kojos

// componentai - javascrip funkcija kuri grazina htmla
// Funkcijos vardas turi prasideti is dideles raides


// Trys props pasiėmimu variantai

export default function Vat(props) {
  console.log(props);

  const vat = (props.productPrice / 100) * 21;
  return (
    <>
      <div>
        <span>VAT: </span>
        <b>{vat} eur</b>
      </div>
    </>
  );
}
kitas variantas

export default function Vat(props) {

  const { productPrice, color } = props;

  const vat = (productPrice / 100) * 21;
  return (
    <>
      <div>
        <span>VAT: </span>
        <b style={{ color }}>{vat} eur</b>
      </div>
    </>
  );
}
dar kitas variantas

export default function Vat({ productPrice, color, show }) {
    console.log(productPrice, color);
  
    const vat = (productPrice / 100) * 21;
    return (
      <>
        <div className={show}>
          <span>VAT: </span>
          <b style={{ color }}>{vat} eur</b>
        </div>
      </>
    );
  }


  // mygtuku panaudojimui naudojame onclick. trys variantai

 <button type="button" className="blue" onClick={blueClick}>
  Click
</button>
<button
  type="button"
  className="red"
  onClick={(_) => redClick("helllo")} // turi buti funkcija funkcijoje
>
  Click
</button>
<button
  type="button"
  className="yellow"
  onClick={(e) => buttonClick(e, "valio")} //galima perduoti eventa
>
  Click
</button>
<button type="button" className="white" onClick={buttonClick}>
  Click
</button>
<button type="button" className="green" onClick={buttonClick}>
  Click
</button>
<button
  type="button"
  className="blue"
  onClick={(_) => console.log("****")} //galima tiesiai perduoti veiksma
>
  Click
</button>
  

  // varinatai kaip galima sudeti sarasa

  <ul>
  {fruits2.map((f) =>
    f.name !== "fig" ? (
      <Fruit key={f.id} fruit={f} /> //naudojam Fruit komponanta kuriame yra li bet perduodam jam {f} propsa. KEY TURI BUTI PIRMAS ELEMENTAS PO mapo!!
    ) : (
      <Fig key={f.id} fruit={f} /> //key yra privalumas ir turi buti unikalus
    )
  )}
  {fruits2
    .sort((a, b) => a.name.length - b.name.length) //galima iskarto sortinti ir kitu metodus naudoti
    .map((f) => (
      <li key={f.id} style={{ color: f.color }}>
        <i>{f.name}</i>
      </li>
    ))}
</ul>
<ul>
  {fruits
    .sort((a, b) => a.length - b.length)
    .map((f, i) =>
      f.length > 5 ? (
        <li style={{ color: "skyblue" }} key={i}>
          {f}
        </li>
      ) : (
        <li style={{ color: "crimson" }} key={i}>
          {f}
        </li>
      )
    )}
</ul>

const [sq, setSq] = useState([]); //modifikuojant naudojant state App( ) pasileidzia is naujo

    
  const readRed = (_) => {
    // const el = document.querySelector("#text2"); niekada nerasyti nes yra nefektyvu
    console.log(text2.current.value, "text2"); //niekam tikes budas inpute naudoti UseRef
  };


//Hooks taisykles

// Only Call Hooks at the Top Level: you cannot call useState() in loops, conditions, nested functions, etc. On multiple useState() calls, the invocation order must be the same between renderings.
// Only Call Hooks from React Functions: you must call useState() only inside the functional component or a custom hook.
Kaip sukurti savo hooka https://legacy.reactjs.org/docs/hooks-custom.html

const imageInput = useRef();

// reactas negali skaityti failu ne htmle jie yra read-only ir taip pat failu skaitymas vyksta asinchroniskai. Todel
const imageReader = (img) => { 
  return new Promise((resolve, reject) => {//sukuriam eile
    const reader = new FileReader(); //sukuriam failu readeri
    reader.readAsDataURL(img);//skaitom faila ir laukiam
    reader.onload = (_) => resolve(reader.result); // kai sulaukiam  grazinam rezultata
    reader.onerror = (error) => reject; // jeigu negero nutinka tai rejectinam
  });
};

const handleTexts = (e) => {
  setTexts((t) => ({ ...t, [e.target.name]: e.target.value })); // objekto propertis owerwritena
  console.log(texts); // kodel console.log veluoja. Reikia naudoti useEfekta
};

const ButtonContext = createContext(); //sukuriam konteksta

<ButtonContext.Provider value="red">
<C />
</ButtonContext.Provider>

import { useContext } from "react";
import { ButtonContext } from "../../App";

function A() {
  const color = useContext(ButtonContext);

  return <button type="button">Button</button>;
}

export default A;

//conteksto pabaiga. negalima siuti i

const WidthColor = (Component) => (color) => <Component color={color} />; //hof 014/015 pamoka

function Figure({ children, color }) {
  return <>{WidthColor(children.type)({ color })}</>;
}

export default Figure;

export default function countReducer(state, action) {
  //reduceris visada gauna state ir action metoda(objekta) kitaip nebuna
}


structuredClone(state) // nukopijuoja state

connection.query(sql, (err, result) => {
  if (err) throw err;

  res.json({ success: true, id: result.insertId }); //insertId my sql budas
});
});


const [count, setCount ] = useState (( ) => { // useState numeris pasileis tik pirma karta kai rerendirins, taip galima sumazinti sumazins naudojimo resursus. Tai galioja ypac jeigu naudoji funkcijos komponenta

  return 4
})

useEffecte(_ => {
  window.addEventListener("ressize", handleResize)

  return () => {
    window.removeEventListener("resize", handleResize) // kad nesuletintu appso reiketu nuiimti evenlistenerius, nes jie prisideda kiekviena karta. Effekte pirma pasileidzia return tada visa kita
  }
}, [])

useMemo // prisimena kitnamaji ir renderinimo metu nenaudoja jo kodo jeigu jis nepasikete, taip musu aplikacija gali veikti greiciau

useRef // geriausia naudoti tada kai useEffekte negautum uzsiciklinimo nes useRef nerenderina. Ir tada kai reikia pasizymeti html elementa. Taip pat gerai saugaoti pries tai buvusi useState reiksme