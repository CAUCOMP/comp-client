import Navbar from "@/components/Navbar"
import styles from "./MainLayout.module.css"

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  )
}

export default MainLayout