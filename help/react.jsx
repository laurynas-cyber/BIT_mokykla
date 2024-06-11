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



//Hooks taisykles

// Only Call Hooks at the Top Level: you cannot call useState() in loops, conditions, nested functions, etc. On multiple useState() calls, the invocation order must be the same between renderings.
// Only Call Hooks from React Functions: you must call useState() only inside the functional component or a custom hook.
Kaip sukurti savo hooka https://legacy.reactjs.org/docs/hooks-custom.html