import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="">
        <img src="/Bookmark.svg" alt="icon" />
      </a>
      <nav className="nav">
        <a href="">Поиск фильмов</a>
        <a href="">Мои фильмы</a>
        <a href="">
          Войти
          <img src="/Login.svg" alt="" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
