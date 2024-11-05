import styles from "./Heading.module.css";
import cn from "classnames";

function Heading({ text }) {
  return (
    <h1 className={cn(styles["heading"])} text={text}>
      {text}
    </h1>
  );
}

export default Heading;
