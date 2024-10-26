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
        <a href="" className="enter-container">
          <span className="enter">Войти</span>
          <img src="/Login.svg" alt="" className="enter-svg" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
