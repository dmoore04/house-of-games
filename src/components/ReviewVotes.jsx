import styles from "../styles/ReviewVotes.module.css"
import Voter from "./Voter"
import { useState } from "react"
import useReview from "../hooks/useReview"

const ReviewVotes = () => {
  const { review, setReview } = useReview()
  const [voted, setVoted] = useState(false)

  return (
    <div className={styles.voting}>
      <p className={styles.votes}>
        <strong>Votes: </strong>
        {review.votes}
      </p>
      <div className={styles.voters}>
        {[1, -1].map((value) => (
          <Voter
            key={value}
            value={value}
            review={review}
            setReview={setReview}
            voted={voted}
            setVoted={setVoted}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewVotes
