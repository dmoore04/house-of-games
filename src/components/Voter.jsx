import styles from "../styles/Voter.module.css"
import { useState } from "react"

export const Voter = ({ value, voted, addVote }) => {
  const [wasClicked, setWasClicked] = useState(false)

  return (
    <button
      disabled={voted}
      className={`${styles.voter} ${
        wasClicked && (value > 0 ? styles.upvote : styles.downvote)
      }`}
      onClick={() => {
        setWasClicked(true)
        addVote(value)
      }}
    >
      {value > 0 ? "👍" : "👎"}
    </button>
  )
}
