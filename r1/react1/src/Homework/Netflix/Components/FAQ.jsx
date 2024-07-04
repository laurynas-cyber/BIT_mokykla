import Email from "./Email";
import { sectionFaq } from "../Data/SectionText";




function FAQ() {
  return (
    <section className="AccordionSection">
      <h2>Frequently Asked Questions</h2>
      <div className="AccordionCont">
        {sectionFaq.map((q, i) => (
          <div key={i} className="QnAcontainer">
            <div className="question">{q.question}</div>
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
