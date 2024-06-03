import Vat from "./Vat";

export default function Price2({ productPrice, discount = 0, vatColor }) {
  //conditional rendiring component

  if (discount === 0) {
    return (
      <>
        <div>
          <span>Price: </span>
          <b>{productPrice} Eur</b>
        </div>
        <div>
          <Vat productPrice={productPrice} color={vatColor} show={"big"} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <span>Price: </span>
          <b style={{ textDecoration: "line-through" }}>{productPrice} Eur </b>
          <b>{productPrice - discount} Eur</b>
        </div>
        <div>
          <Vat
            productPrice={productPrice - discount}
            color={vatColor}
            show={"big"}
          />
        </div>
      </>
    );
  }
}
