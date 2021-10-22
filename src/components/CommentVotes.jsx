import { useState } from "react"
import { Voter } from "./Voter"
import { addCommentVote } from "../utils/api"
import styles from "../styles/CommentVotes.module.css"

const CommentVotes = ({ comment, setComments }) => {
  const [vote, setVote] = useState(null)
  // hacky solution because no GET comments/:comment_id endpoint
  function addVote(value) {
    setComments((currComments) =>
      currComments.map((currComment) =>
        currComment.comment_id === comment.comment_id
          ? { ...currComment, votes: currComment.votes + value }
          : currComment
      )
    )
    addCommentVote(comment.comment_id, value)
    setVote(value)
  }

  return (
    <span className={styles.votes}>
      {[1, -1].map((value) => (
        <Voter
          type="comment"
          key={value}
          addVote={addVote}
          value={value}
          vote={vote}
        />
      ))}
      <span
        className={`${styles.count} ${
          styles[
            comment.votes && (comment.votes >= 1 ? "positive" : "negative")
          ]
        }`}
      >
        {comment.votes}
      </span>
    </span>
  )
}

export default CommentVotes
