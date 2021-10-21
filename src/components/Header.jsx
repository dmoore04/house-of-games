import styles from "../styles/Header.module.css"
import { Link } from "react-router-dom"
import { Slide } from "@mui/material"

const Header = () => {
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.title}>House of Games 🎲</h1>
        </Link>
      </header>
    </Slide>
  )
}

export default Header
