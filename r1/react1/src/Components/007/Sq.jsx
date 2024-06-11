import { useEffect } from "react";

function Sq({ sq, destroySq }) {
  useEffect(
    (_) => {
      console.log(sq.id);
      return (_) => console.log(sq.id, "OuT"); //return atvaizduoja tada kai istrinam
    },
    [sq]
  );

  return (
    <div className="sq" onClick={(_) => destroySq(sq.id)}>
      {sq.id}
    </div>
  );
}

export default Sq;
