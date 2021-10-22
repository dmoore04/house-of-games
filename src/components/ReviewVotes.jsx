import styles from "../styles/ReviewVotes.module.css"
import { Voter } from "./Voter"
import { useState } from "react"
import { addReviewVote } from "../utils/api"

const ReviewVotes = ({ review, setReview }) => {
  const [vote, setVote] = useState(null)

  function addVote(value) {
    setReview((currReview) => {
      const newVotes = currReview.votes + value
      return { ...currReview, votes: newVotes }
    })
    setVote(value)
    addReviewVote(review.review_id, value)
  }

  return (
    <div className={styles.voting}>
      <p className={styles.votes}>
        <strong className={styles.title}>Votes: </strong>
        {review.votes}
      </p>
      <div className={styles.voters}>
        {[1, -1].map((value) => (
          <Voter
            type="review"
            key={value}
            value={value}
            vote={vote}
            addVote={addVote}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewVotes
