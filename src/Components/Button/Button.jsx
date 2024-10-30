import styles from "./Button.module.css";
import cn from "classnames";

// eslint-disable-next-line react/prop-types
function Button({ text, clicked }) {
  return (
    <button className={cn(styles["button"])} onClick={clicked}>
      {text}
    </button>
  );
}

export default Button;
