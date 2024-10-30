import styles from "./Header.module.css";
import cn from "classnames";

function Header() {
  return (
    <header className={cn(styles["header"])}>
      <a href="">
        <img src="/Bookmark.svg" alt="icon" />
      </a>
      <nav className={cn(styles["nav"])}>
        <a href="">Поиск фильмов</a>
        <a href="">Мои фильмы</a>
        <a href="" className={cn(styles["enter-container"])}>
          <span className={cn(styles["enter"])}>Войти</span>
          <img src="/Login.svg" alt="" className={cn(styles["enter-svg"])} />
        </a>
      </nav>
    </header>
  );
}

export default Header;
