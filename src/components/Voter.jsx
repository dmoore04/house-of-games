import { addReviewVote } from "../utils/api"
import styles from "../styles/Voter.module.css"

const Voter = ({ review, setReview, value, voted, setVoted }) => {
  function addVote() {
    setReview((currReview) => {
      const newVotes = currReview.votes + value
      return { ...currReview, votes: newVotes }
    })
    setVoted(!voted)
    addReviewVote(review.review_id, value)
  }

  return (
    <button disabled={voted} className={styles.voter} onClick={addVote}>
      {value > 0 ? "👍" : "👎"}
    </button>
  )
}

export default Voter
