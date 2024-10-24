import "./Input.css";
import { Children, useState } from "react";

function Input({ text, svg }) {
  const [value, setValue] = useState(text);
  const [inputSvg, setInputSvg] = useState(svg);
  const inputChange = (e) => {
    setValue(e.target.value);
  };
  const inputFocus = () => {
    setValue("");
    setInputSvg("");
  };

  return (
    <>
      <label htmlFor="search" className="search-label">
        <div className="label-container">
          <img src={inputSvg} alt="" className="search-svg" />
          {value}
        </div>
      </label>
      <input
        id="search"
        className="input"
        // onChange={inputChange}
        onBlur={(e) => {
          if (e.target.value === "") {
            setValue(text);
            setInputSvg(svg);
          }
        }}
        onFocus={inputFocus}
      ></input>
    </>
  );
}

export default Input;
