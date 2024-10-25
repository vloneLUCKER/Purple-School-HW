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
      <div className="main-head">
        <Heading text="Поиск" />
        <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      </div>
      <Input
        text={"Введите название"}
        svg={"/Left-icon.svg"}
        className={"label-svg"}
      ></Input>
      <Button text="Искать" clicked={clicked} />
      <Input text={"Ваше имя"}></Input>
    </div>
  );
}

export default App;
