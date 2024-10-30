import styles from "./FilmList.module.css";
import ListItem from "../ListItem/ListItem";
import cn from "classnames";

function FilmList({ INITIAL_ITEMS }) {
  return (
    <div className={cn(styles["film-list"])}>
      {INITIAL_ITEMS.map((el) => (
        <ListItem
          url={el.url}
          name={el.name}
          status={el.status}
          rating={el.rating}
          key={el.id}
        />
      ))}
    </div>
  );
}

export default FilmList;
