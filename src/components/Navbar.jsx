import { useState } from "react";
import {Link} from "react-router-dom"

const NavLink = ({ to, children }) => (
  <Link to={to} className="no-underline opacity-85 hover:opacity-100">
    {children}
  </Link>
)

export default function Navbar() {
  const [archiveOpen, setArchiveOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-[#000925] p-7 flex items-center justify-between text-[18px]">
      <div className="flex flex-row items-center gap-6">
        <div className="text-3xl" aria-hidden="true" >
          <NavLink to="/">&lt;OM/&gt;</NavLink>
        </div>
        <nav className="flex gap-6" aria-label="Top navigation">
          <div className="relative">
            <button
              className="flex items-center gap-1 opacity-85 hover:opacity-100 cursor-pointer"
              onClick={() => setArchiveOpen(prev => !prev)}
            >
              아카이브
            </button>

            {archiveOpen && (
              <div className="absolute top-full -left-7 mt-3 flex flex-col bg-[#000925] border border-blue-400/20 rounded-xl overflow-hidden min-w-[120px] items-center">
                <Link
                  to="/archive/gallery"
                  onClick={() => setArchiveOpen(false)}
                  className="px-5 py-3 text-white/60 hover:text-white no-underline"
                >
                  갤러리
                </Link>
                <Link
                  to="/archive/ob"
                  onClick={() => setArchiveOpen(false)}
                  className="px-5 py-3 text-white/60 hover:text-white no-underline"
                >
                  OB
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/projects">프로젝트</NavLink>
          <NavLink to="/apply">지원하기</NavLink>
        </nav>
      </div>
      <NavLink to="/login">로그인</NavLink>
    </header>
  );
}