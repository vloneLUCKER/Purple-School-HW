import "./FilmList.css";
import ListItem from "../ListItem/ListItem";

function FilmList({ INITIAL_ITEMS }) {
  return (
    <div className="film-list">
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
