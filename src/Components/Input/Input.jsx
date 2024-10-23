import "./Input.css";
import { useState } from "react";

function Input({ text }) {
  const [value, setValue] = useState(text);
  const inputChange = (e) => {
    setValue(e.target.value);
  };
  const inputFocus = () => {
    setValue("");
  };

  return (
    <input
      className="input"
      value={value}
      onChange={inputChange}
      onFocus={inputFocus}
    ></input>
  );
}

export default Input;
