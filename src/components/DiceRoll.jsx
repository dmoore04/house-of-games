import { useState } from "react"
import { useHistory } from "react-router"
import useReviews from "../hooks/useReviews"
import styles from "../styles/DiceRoll.module.css"

const DiceRoll = () => {
  const { reviews } = useReviews()
  const history = useHistory()
  const [onCooldown, setOnCooldown] = useState(false)

  function getRandomId() {
    const r = Math.floor(Math.random() * reviews.length)
    return reviews[r].review_id
  }

  function changePage() {
    setTimeout(() => setOnCooldown(false), 800)
    setOnCooldown(true)
    history.push(`/reviews/${getRandomId()}`)
  }

  return (
    <button
      className={styles.button}
      onClick={changePage}
      disabled={onCooldown}
    >
      🎲
    </button>
  )
}

export default DiceRoll
