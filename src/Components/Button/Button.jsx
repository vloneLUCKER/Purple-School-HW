import "./Button.css";

// eslint-disable-next-line react/prop-types
function Button({ text, clicked }) {
  return (
    <button className="button" onClick={clicked}>
      {text}
    </button>
  );
}

export default Button;
