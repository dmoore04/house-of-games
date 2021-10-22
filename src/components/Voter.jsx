import styles from "../styles/Voter.module.css"
import { useState } from "react"

export const Voter = ({ value, voted, addVote, type }) => {
  const [wasClicked, setWasClicked] = useState(false)
  const className = `${styles[type]} ${
    styles[value > 0 ? "upvote" : "downvote"]
  } ${styles[voted && !wasClicked ? "unselected" : "selected"]}`
  return (
    <button
      disabled={voted}
      className={className}
      onClick={() => {
        setWasClicked(true)
        addVote(value)
      }}
    >
      <span className={styles.thumb}>{value > 0 ? "👍" : "👎"}</span>
    </button>
  )
}
