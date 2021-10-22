import { addReviewVote, addCommentVote } from "../utils/api"
import styles from "../styles/Voter.module.css"
import { useState } from "react"

export const Voter = ({ review, setReview, value, voted, setVoted }) => {
  const [wasClicked, setWasClicked] = useState(false)

  function addVote() {
    setWasClicked(true)
    setReview((currReview) => {
      const newVotes = currReview.votes + value
      return { ...currReview, votes: newVotes }
    })
    setVoted(true)
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

export const CommentVoter = ({
  comment,
  setComments,
  voted,
  setVoted,
  value,
}) => {
  const [wasClicked, setWasClicked] = useState(false)

  function addVote() {
    setWasClicked(true)
    setComments((currComments) =>
      currComments.map((currComment) =>
        currComment.comment_id === comment.comment_id
          ? { ...currComment, votes: currComment.votes + value }
          : currComment
      )
    )
    addCommentVote(comment.comment_id, value)
    setVoted(true)
  }

  return (
    <button
      className={`${
        wasClicked && (value > 0 ? styles.upvote : styles.downvote)
      }`}
      disabled={voted}
      onClick={addVote}
    >
      {value > 0 ? "👍" : "👎"}
    </button>
  )
}
