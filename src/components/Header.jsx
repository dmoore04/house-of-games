import styles from "../styles/Header.module.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h1 className={styles.title}>House of Games 🎲</h1>
      </Link>
    </header>
  )
}

export default Header
