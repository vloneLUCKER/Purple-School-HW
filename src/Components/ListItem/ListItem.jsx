import "./ListItem.css";
import AddFavourite from "../AddFovourite/AddFavourite";

function ListItem({ url, name, rating, status }) {
  return (
    <div className="list-item">
      <img src={url} alt="" className="item-img" />
      <p className="item-paragraph">{name}</p>
      <AddFavourite status={status} />
      <div className="rating">
        <img src="/star.svg" alt="" className="item-svg" />
        <span className="item-rating">{rating}</span>
      </div>
    </div>
  );
}

export default ListItem;
