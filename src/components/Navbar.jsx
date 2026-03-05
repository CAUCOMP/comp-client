import {Link} from "react-router-dom"

const NavLink = ({ to, children }) => (
  <Link to={to} className="no-underline opacity-85 hover:opacity-100">
    {children}
  </Link>
)

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#001228] p-7 flex items-center justify-between text-[18px]">
      <div className="flex flex-row items-center gap-6">
        <div className="text-3xl" aria-hidden="true" >
          <NavLink to="/">&lt;OM/&gt;</NavLink>
        </div>
        <nav className="flex gap-6" aria-label="Top navigation">
          <NavLink to="/archive">아카이브</NavLink>
          <NavLink to="/projects">프로젝트</NavLink>
          <NavLink to="/apply">지원하기</NavLink>
        </nav>
      </div>
      <NavLink to="/login">로그인</NavLink>
    </header>
  );
}