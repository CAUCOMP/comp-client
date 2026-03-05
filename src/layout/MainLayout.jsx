import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-5">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout