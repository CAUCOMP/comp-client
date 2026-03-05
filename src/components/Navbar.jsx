import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-100 bg-[#001228] p-7">
      <div className="flex flex-row items-center gap-6">
        <div className="text-2xl" aria-hidden="true" >
          <span>&lt;OM/&gt;</span>
        </div>
        <nav className="flex gap-6 text-[18px]" aria-label="Top navigation">
          <Link to="archive" className="no-underline opacity-85 hover:opacity-100">아카이브</Link>
          <Link to="projects" className="no-underline opacity-85 hover:opacity-100">프로젝트</Link>
          <Link to="apply" className="no-underline opacity-85 hover:opacity-100">지원하기</Link>
        </nav>
      </div>
    </header>
  );
}