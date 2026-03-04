import "./Navbar.css";
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <header className="nav">
      <div className="navLeft">
        <div className="brandMark" aria-hidden="true" />
        <nav className="navLinks" aria-label="Top navigation">
          <Link to="#">아카이브</Link>
          <Link to="#">프로젝트</Link>
          <Link to="#">지원하기</Link>
        </nav>
      </div>
    </header>
  );
}