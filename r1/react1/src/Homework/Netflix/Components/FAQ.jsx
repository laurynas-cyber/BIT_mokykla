import Email from "./Email";
import { sectionFaq } from "../Data/SectionText";
import { useState } from "react";

function FAQ() {
  const [isToggled, setToggled] = useState(null);

  function handleToggle(e) {
    setToggled((b) => (+e.target.value === b ? null : +e.target.value));
  }

  return (
    <section className="AccordionSection">
      <h2>Frequently Asked Questions</h2>
      <div className="AccordionCont">
        {sectionFaq.map((q, i) => (
          <div key={i} className="QnAcontainer">
            <button
              className="question"
              value={i}
              onClick={(e) => handleToggle(e)}
            >
              {q.question}
            </button>
            <div
              className="answerCont"
              style={{
                maxHeight: isToggled === i ? "300px" : null,
              }}
            >
              <div className="answer">
                {q.answer}
                {q.answer2 ? (
                  <>
                    <br />
                    <br />
                  </>
                ) : null}
                {q.answer2}
              </div>
            </div>
          </div>
        ))}
      </div>
      <span>
        Ready to watch? Enter your email to create or restart your membership.
      </span>
      <Email />
    </section>
  );
}

export default FAQ;
