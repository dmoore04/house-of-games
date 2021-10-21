import styles from "../styles/Header.module.css"
import { Link } from "react-router-dom"
import { Slide } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../context/User"
import DiceRoll from "./DiceRoll"

const Header = () => {
  const { user } = useContext(UserContext)
  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <h1 className={styles.title}>House of Games</h1>
        </Link>
        <DiceRoll />
        <span className={styles.user}>
          logged in as <strong>{user.username}</strong>
        </span>
      </header>
    </Slide>
  )
}

export default Header
