import styles from "./App.module.css";
import Button from "./Components/Button/Button";
import Heading from "./Components/Heading/Heading";
import Paragraph from "./Components/Paragraph/Paragraph";
import Input from "./Components/Input/Input";
import Header from "./Components/Header/Header";
import FilmList from "./Components/FilmList/FilmList";
import cn from "classnames";
import { useContext, useReducer, useRef, useState } from "react";
import { loginReducer, INITIAL_CONDITIONS } from "./login.state";
import { User, UserProvider } from "./context/user.context";

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
  const searchRef = useRef();
  const loginRef = useRef();
  const [loginState, dispatchLogin] = useReducer(
    loginReducer,
    INITIAL_CONDITIONS
  );
  const { isLogged, userName, name } = loginState;

  const clicked = () => {
    if (!searchRef.current.value) {
      searchRef.current.focus();
    }
  };

  const onLoginClick = () => {
    if (!loginRef.current.value) {
      loginRef.current.focus();
    } else {
      dispatchLogin({ type: "LOGIN", payload: loginRef.current.value });
      // setUser(loginRef.current.value);
    }
  };

  console.log(isLogged);

  return (
    <UserProvider>
      <div className={cn(styles["container"])}>
        <Header userName={userName} isLogged={isLogged} />
        <div className={cn(styles["main-head"])}>
          <Heading text="Поиск" />
          <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
        </div>
        <section className={cn(styles["search-section"])}>
          <Input
            ref={searchRef}
            text={"Введите название"}
            svg={"/Left-icon.svg"}
            className={"label-svg"}
          ></Input>
          <Button text="Искать" clicked={clicked} />
        </section>
        <FilmList INITIAL_ITEMS={INITIAL_ITEMS} />

        <div className="login-page">
          <Heading text="Вход" />
          <div className={cn(styles["input-container"])}>
            <Input text="Ваше имя" ref={loginRef} />
            <Button text="Войти в профиль" clicked={onLoginClick} />
          </div>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
