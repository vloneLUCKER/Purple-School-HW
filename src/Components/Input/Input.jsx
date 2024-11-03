import styles from "./Input.module.css";
import { Children, forwardRef, useState } from "react";
import cn from "classnames";

const Input = forwardRef(function Input({ text, svg, className }, ref) {
  const [value, setValue] = useState(text);
  const [inputSvg, setInputSvg] = useState(svg);
  const inputChange = (e) => {
    setValue(e.target.value);
  };
  const inputFocus = () => {
    setValue("");
    setInputSvg("");
  };
  const styleSvg = className ? className : "label-container";

  return (
    <>
      <label htmlFor="search" className={cn(styles["search-label"])}>
        <div className={cn(styles[`${styleSvg}`])}>
          <img src={inputSvg} alt="" className={cn(styles["search-svg"])} />
          {value}
        </div>
      </label>
      <input
        ref={ref}
        id="search"
        className={cn(styles["input"])}
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
});

export default Input;
