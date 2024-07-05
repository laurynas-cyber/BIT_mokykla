import Header from "./Homework/Netflix/Components/Header";
import Section from "./Homework/Netflix/Components/Section";
import { MainContext, MainBody } from "./Homework/Netflix/Contexts/MainBody"; //main body nebutina buvo galima padaryti kitaip. dariau mainbody nes galvojau kad nera galeciau iwrapping i body bet to nereikejo daryt
import "./Homework/Netflix/style.scss";
import { sectionText } from "./Homework/Netflix/Data/SectionText";
import FAQ from "./Homework/Netflix/Components/FAQ";
import Footer from "./Homework/Netflix/Components/Footer";

function App() {
  return (
    <>
      <MainBody>
        <Header />

        {sectionText.map((s, i) => (
          <MainContext.Provider
            key={i}
            value={{
              i,
              img: s.img,
              h: s.h,
              text: s.text,
            }}
          >
            <Section />
          </MainContext.Provider>
        ))}
        <FAQ />
        <Footer />
      </MainBody>
    </>
  );
}

export default App;
