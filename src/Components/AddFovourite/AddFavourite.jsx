import "./AddFavourite.css";

// eslint-disable-next-line react/prop-types
function AddFavourite({ status }) {
  if (!status) {
    return (
      <div className="favor">
        <img src="/like.svg" alt="" className="favor-svg" />
        <span className="favor-text purple">В избранное</span>
      </div>
    );
  }
  return (
    <div className="favor">
      <img src="/Bookmark-green.svg" alt="" className="favor-svg" />
      <span className="favor-text green">В избраном</span>
    </div>
  );
}

export default AddFavourite;
