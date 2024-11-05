import styles from "./Paragraph.module.css";
import cn from "classnames";

// eslint-disable-next-line react/prop-types
function Paragraph({ text }) {
  return <p className={cn(styles["paragraph"])}>{text}</p>;
}

export default Paragraph;
