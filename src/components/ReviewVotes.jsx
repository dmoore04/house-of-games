import styles from "../styles/ReviewVotes.module.css"
import Voter from "./Voter"
import { useState } from "react"

const ReviewVotes = ({ review, setReview }) => {
  const [voted, setVoted] = useState(false)

  return (
    <div className={styles.voting}>
      <p className={styles.votes}>
        <strong className={styles.title}>Votes: </strong>
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
