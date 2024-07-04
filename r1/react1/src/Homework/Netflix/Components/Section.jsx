import { useContext} from "react";
import { MainContext } from "../Contexts/MainBody";

function Section() {
  const { i, img, h, text } = useContext(MainContext);

  return (
    <section style={{ flexDirection: i % 2 ? "row-reverse" : "row" }}>
      <div
        className="SectiontextBox"
        style={{ alignItems: i % 2 ? null : "flex-end" }}
      >
        <div className="textWidth">
          <h2>{h}</h2>
          <span>{text}</span>
        </div>
      </div>
      <div
        className="ImgCont"
        style={{ justifyContent: i % 2 ? "flex-end" : null }}
      >
        <img alt="" src={img} />
      </div>
    </section>
  );
}

export default Section;
