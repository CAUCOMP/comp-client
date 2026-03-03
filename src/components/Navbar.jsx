import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navLeft">
        <div className="brandMark" aria-hidden="true" />
        <nav className="navLinks" aria-label="Top navigation">
          <a href="#">아카이브</a>
          <a href="#">프로젝트</a>
          <a href="#">지원하기</a>
        </nav>
      </div>
    </header>
  );
}