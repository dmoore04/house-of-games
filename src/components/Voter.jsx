import { addReviewVote } from "../utils/api"
import styles from "../styles/Voter.module.css"

const Voter = ({ review, setReview }) => {
  function addVote() {
    setReview((currReview) => {
      const newVotes = currReview.votes + 1
      return { ...currReview, votes: newVotes }
    })
    addReviewVote(review.review_id).then((reviewFromAPI) => {
      setReview(reviewFromAPI)
    })
  }

  return (
    <button className={styles.voter} onClick={addVote}>
      👍
    </button>
  )
}

export default Voter
