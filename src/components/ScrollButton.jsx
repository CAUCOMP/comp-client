import React from 'react'
import styles from './ScrollButton.module.css'
import { FaArrowCircleDown } from "react-icons/fa";

const ScrollButton = ({onClick}) => {
  return (
    <>
        <button className={styles.scrollBtn} onClick={onClick}>
            COMP 소개 
            <FaArrowCircleDown />
        </button>
    </>
  )
}

export default ScrollButton