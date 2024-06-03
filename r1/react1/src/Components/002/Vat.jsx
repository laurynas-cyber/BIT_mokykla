import "./vat.css";

// export default function Vat(props) {
//   console.log(props);

//   const vat = (props.productPrice / 100) * 21;
//   return (
//     <>
//       <div>
//         <span>VAT: </span>
//         <b>{vat} eur</b>
//       </div>
//     </>
//   );
// }
//kitas variantas

// export default function Vat(props) {

//   const { productPrice, color } = props;

//   const vat = (productPrice / 100) * 21;
//   return (
//     <>
//       <div>
//         <span>VAT: </span>
//         <b style={{ color }}>{vat} eur</b>
//       </div>
//     </>
//   );
// }
// dar kitas variantas

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
