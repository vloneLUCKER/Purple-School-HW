import styles from "./Header.module.css";
import cn from "classnames";

function Header({ userName, isLogged }) {
  const onClick = () => {
    if (isLogged) {
      localStorage.clear();
    }
  };

  let name;
  if (isLogged) {
    name = "Выйти";
  } else {
    name = "Войти";
  }

  return (
    <header className={cn(styles["header"])}>
      <a href="">
        <img src="/Bookmark.svg" alt="icon" />
      </a>
      <nav className={cn(styles["nav"])}>
        <a href="">Поиск фильмов</a>
        <a href="">Мои фильмы</a>

        <a
          href=""
          onClick={onClick}
          className={cn(styles["enter-container"], styles["login-name"], {
            [styles["is-hidden"]]: !isLogged,
          })}
        >
          <span className={cn(styles["enter"])}>{userName}</span>
          <img src="/user.svg" alt="" className={cn(styles["enter-svg"])} />
        </a>

        <a href="" onClick={onClick} className={cn(styles["enter-container"])}>
          <span className={cn(styles["enter"])}>{name}</span>
          <img
            src="/Login.svg"
            alt=""
            className={cn(styles["enter-svg"], {
              [styles["is-hidden"]]: isLogged,
            })}
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;
