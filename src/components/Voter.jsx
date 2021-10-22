import { addReviewVote } from "../utils/api"
import styles from "../styles/Voter.module.css"
import { useState } from "react"

const Voter = ({ review, setReview, value, voted, setVoted }) => {
  const [wasClicked, setWasClicked] = useState(false)

  function addVote() {
    setWasClicked(true)
    setReview((currReview) => {
      const newVotes = currReview.votes + value
      return { ...currReview, votes: newVotes }
    })
    setVoted(!voted)
    addReviewVote(review.review_id, value)
  }

  return (
    <button
      disabled={voted}
      className={`${styles.voter} ${
        wasClicked && (value > 0 ? styles.upvote : styles.downvote)
      }`}
      onClick={addVote}
    >
      {value > 0 ? "👍" : "👎"}
    </button>
  )
}

export default Voter
