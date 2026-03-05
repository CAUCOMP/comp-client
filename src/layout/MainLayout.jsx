import Navbar from "@/components/Navbar"

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="pt-5">
        {children}
      </main>
    </div>
  )
}

export default MainLayout