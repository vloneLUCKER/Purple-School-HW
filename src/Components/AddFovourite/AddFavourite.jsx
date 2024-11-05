import styles from "./AddFavourite.module.css";
import cn from "classnames";

// eslint-disable-next-line react/prop-types
function AddFavourite({ status }) {
  if (!status) {
    return (
      <div className={cn(styles["favor"])}>
        <img src="/like.svg" alt="" className={cn(styles["favor-svg"])} />
        <span className={cn(styles["favor-text"], styles["purple"])}>
          В избранное
        </span>
      </div>
    );
  }
  return (
    <div className={cn(styles["favor"])}>
      <img
        src="/Bookmark-green.svg"
        alt=""
        className={cn(styles["favor-svg"])}
      />
      <span className={cn(styles["favor-text"], styles["green"])}>
        В избраном
      </span>
    </div>
  );
}

export default AddFavourite;
