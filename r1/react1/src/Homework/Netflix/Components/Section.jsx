import { useContext, useEffect } from "react";
import { MainContext } from "../Contexts/MainBody";

function Section() {
  const { img, h, text, isReverse, setReverse } = useContext(MainContext);

//   setReverse(!isReverse);
    useEffect((_) => {
      setReverse(!isReverse);
    }, []);

    console.log(isReverse);

  return (
    <section style={{ flexDirection: isReverse ? "row-reverse" : "row" }}>
      <div className="SectiontextBox">
        <div className="textWidth">
          <h2>{h}</h2>
          <span>{text}</span>
        </div>
      </div>
      <div className="ImgCont">
        <img alt="" src={img} />
      </div>
    </section>
  );
}

export default Section;
