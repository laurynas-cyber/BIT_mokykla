import { useRef, useEffect, useState } from "react";

function LanguageInput() {
  const item = useRef();
  const [focus, setFocus] = useState(false);

  // useEffect((_) => {
  //   item.current.focus();
  // }, []);

  function handleFocus(e) {
    setFocus(true);
    // item.current.focus();
    // e.target.focus();

    console.log(e.target);
  }

  return (
    <select
      className="languageSelect"
      autoFocus="true"
      ref={item}
      onClick={(e) => handleFocus(e)}
    >
      <option style={{ color: "black" }}>English</option>
      <option>Ruski</option>
    </select>
  );
}

export default LanguageInput;
