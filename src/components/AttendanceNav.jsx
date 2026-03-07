import { NavLink } from 'react-router-dom'

const AttendanceNav = () => {
  return (
    <nav className="fixed top-30 left-0 w-full z-10 px-10 py-5 flex items-center gap-8">
      
      <NavLink 
        to="/attendance"
        end
        className={({ isActive }) => 
            isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
        }
      >
        출석 체크
      </NavLink>

      <NavLink 
        to="/attendance/submit"
        className={({ isActive }) => 
            isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
        }
      >
        스터디 과제 제출
      </NavLink>

      <NavLink 
        to="/attendance/status"
        className={({ isActive }) => 
            isActive ? "opacity-100" : "opacity-50 hover:opacity-100"
        }
      >
        출석 현황
      </NavLink>

    </nav>
  )
}

export default AttendanceNav