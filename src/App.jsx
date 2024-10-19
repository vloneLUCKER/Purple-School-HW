import "./App.css";
import Button from "./Components/Button/Button";
import Heading from "./Components/Heading/Heading";
import Paragraph from "./Components/Paragraph/Paragraph";

function App() {
  const props = [
    { text: "Искать" },
    { text: "Поиск" },
    {
      text: "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.",
    },
  ];
  return (
    <>
      <Heading text={props[1].text} />
      <Paragraph text={props[2].text} />
      <Button text={props[0].text} />
    </>
  );
}

export default App;
