import styles from "./ListItem.module.css";
import AddFavourite from "../AddFovourite/AddFavourite";
import cn from "classnames";

function ListItem({ url, name, rating, status }) {
  return (
    <div className={cn(styles["list-item"])}>
      <img src={url} alt="" className={cn(styles["item-img"])} />
      <p className={cn(styles["item-paragraph"])}>{name}</p>
      <AddFavourite status={status} />
      <div className={cn(styles["rating"])}>
        <img src="/star.svg" alt="" className={cn(styles["item-svg"])} />
        <span className={cn[styles["item-rating"]]}>{rating}</span>
      </div>
    </div>
  );
}

export default ListItem;
