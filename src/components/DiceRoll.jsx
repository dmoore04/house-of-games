import { useHistory } from "react-router"
import useReviews from "../hooks/useReviews"
import styles from "../styles/DiceRoll.module.css"

const DiceRoll = () => {
  const { reviews } = useReviews()
  const history = useHistory()

  function getRandomId() {
    const r = Math.floor(Math.random() * reviews.length)
    return reviews[r].review_id
  }

  function changePage() {
    history.push(`/reviews/${getRandomId()}`)
  }

  return (
    <button className={styles.button} onClick={changePage}>
      🎲
    </button>
  )
}

export default DiceRoll
