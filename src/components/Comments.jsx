import { useState, useEffect } from "react"
import { getReviewComments } from "../utils/api"

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getReviewComments(review_id).then((commentsFromAPI) => {
      setComments(commentsFromAPI)
    })
  }, [review_id])

  return (
    <section>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>{comment.body}</li>
        ))}
      </ul>
    </section>
  )
}

export default Comments
