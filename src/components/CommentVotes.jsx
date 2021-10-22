import { useState } from "react"
import { Voter } from "./Voter"
import { addCommentVote } from "../utils/api"

const CommentVotes = ({ comment, setComments }) => {
  const [voted, setVoted] = useState(false)
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
    setVoted(true)
  }

  return (
    <span>
      {[1, -1].map((value) => (
        <Voter key={value} addVote={addVote} value={value} voted={voted} />
      ))}
      {comment.votes}
    </span>
  )
}

export default CommentVotes
