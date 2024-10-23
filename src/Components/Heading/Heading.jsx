import "./Heading.css";

function Heading({ text }) {
  return (
    <h1 className="heading" text={text}>
      {text}
    </h1>
  );
}

export default Heading;
