import { useState, useEffect } from "react"
import { getReviewComments } from "../utils/api"
import CommentCard from "./CommentCard"
import styles from "../styles/Comments.module.css"

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
      <ul class={styles.comment__list}>
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </section>
  )
}

export default Comments
