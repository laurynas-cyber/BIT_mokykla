import { useRef, useState } from "react";

import rand from "../../funkcijos/randnum";

let randId = (_) => {
  return rand(0, 9999999).toString().padStart(7, "0");
};

function CWfield({ animal }) {
  animal.current = [];
  for (let i = 0; i < rand(1, 25); i++) {
    // setSAnimal((a) => [...a, { id: "A" + randId() }]);
    animal.current.push({ id: "K" + randId() });
  }
  // const [figure, setFigure] = useState("square");

  // const move = (e) => {
  //   setFigure((figure) => (figure = 0));
  // };

  return (
    <div className="field">
      <h2>Cows</h2>
      <div className="CowsCont animalCont">
        {animal.current.map((a, i) => (
          <div
            key={i}
            // onClick={move}
            className="cow"
            // style={{ bottom: figure }}
          >
            {a.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CWfield;
