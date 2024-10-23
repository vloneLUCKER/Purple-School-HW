import "./App.css";
import Button from "./Components/Button/Button";
import Heading from "./Components/Heading/Heading";
import Paragraph from "./Components/Paragraph/Paragraph";
import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";

function App() {
  const clicked = () => {
    console.log("click");
  };

  return (
    <div className="container">
      <Header />
      <Heading text="Поиск" />
      <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      <Input text={"Введите название"} />
      <Button text="Искать" clicked={clicked} />
    </div>
  );
}

export default App;
