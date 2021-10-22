import { useState } from "react"
import { CommentVoter } from "./Voter"

const CommentVotes = ({ comment, setComments }) => {
  const [voted, setVoted] = useState(false)
  return (
    <span>
      <CommentVoter
        comment={comment}
        setComments={setComments}
        voted={voted}
        setVoted={setVoted}
        value={1}
      />
      <CommentVoter
        comment={comment}
        setComments={setComments}
        voted={voted}
        setVoted={setVoted}
        value={-1}
      />
      {comment.votes}
    </span>
  )
}

export default CommentVotes
