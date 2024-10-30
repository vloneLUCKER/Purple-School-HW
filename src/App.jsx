import styles from "./App.module.css";
import Button from "./Components/Button/Button";
import Heading from "./Components/Heading/Heading";
import Paragraph from "./Components/Paragraph/Paragraph";
import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";
import FilmList from "./Components/FilmList/FilmList";
import cn from "classnames";

const INITIAL_ITEMS = [
  {
    url: "/Shang-Chi.jpg",
    name: "Black Widow",
    status: false,
    rating: 324,
    id: 1,
  },
  {
    url: "/shang.jpg",
    name: "Shang Chi",
    status: false,
    rating: 124,
    id: 2,
  },
  {
    url: "/loki.jpg",
    name: "Loki",
    status: false,
    rating: 235,
    id: 3,
  },
  {
    url: "/meet-mom.jpg",
    name: "How I Met Your Mother",
    status: false,
    rating: 123,
    id: 4,
  },
  {
    url: "/robbery.jpg",
    name: "How I Met Your Mother",
    status: true,
    rating: 8125,
    id: 5,
  },
  {
    url: "/friends.jpg",
    name: "Friends",
    status: false,
    rating: 123,
    id: 6,
  },
  {
    url: "/theory.jpg",
    name: "The Big Bang Theory",
    status: false,
    rating: 12,
    id: 7,
  },
  {
    url: "/two.jpg",
    name: "Two And a Half Men",
    status: false,
    rating: 456,
    id: 8,
  },
];

function App() {
  const clicked = () => {
    console.log("click");
  };

  return (
    <div className={cn(styles["container"])}>
      <Header />
      <div className={cn(styles["main-head"])}>
        <Heading text="Поиск" />
        <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      </div>
      <Input
        text={"Введите название"}
        svg={"/Left-icon.svg"}
        className={"label-svg"}
      ></Input>
      <Button text="Искать" clicked={clicked} />
      <FilmList INITIAL_ITEMS={INITIAL_ITEMS} />
    </div>
  );
}

export default App;
