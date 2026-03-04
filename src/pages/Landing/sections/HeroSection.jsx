import React from 'react'
import styles from './HeroSection.module.css'
import bgLogo from '@/assets/logo/bgLogo.png'

const HeroSection = () => {
  return (
    <section 
        className = {styles.heroSection}
        style={{backgroundImage: `url(${bgLogo})`}}
    >
        <main className={styles.mainContent}>
            <p>중앙대학교</p>
            <p>웹/앱 개발동아리</p>
            <p>COMP</p>
        </main>
    </section>
  )
}

export default HeroSection