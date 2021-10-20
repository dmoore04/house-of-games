import { useState, useEffect, useContext } from "react"
import { getReviewComments, postComment } from "../utils/api"
import CommentCard from "./CommentCard"
import styles from "../styles/Comments.module.css"
import { UserContext } from "../context/User"

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const { user } = useContext(UserContext)

  useEffect(() => {
    getReviewComments(review_id).then((commentsFromAPI) => {
      setComments(commentsFromAPI)
    })
  }, [review_id])

  function addComment(e) {
    e.preventDefault()
    const form = e.target
    const body = form.comment_body.value
    postComment(review_id, body, user.username).then((commentFromAPI) => {
      setComments((currComments) => [commentFromAPI, ...currComments])
      setNewComment("")
    })
  }

  return (
    <section>
      <h3>Comments</h3>
      <form action="" onSubmit={addComment}>
        <input
          type="text"
          id="comment_body"
          name="comment_body"
          placeholder="Enter comment..."
          maxLength="255"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          required
        />
        <button>Post</button>
      </form>
      <ul className={styles.comment__list}>
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))}
      </ul>
    </section>
  )
}

export default Comments
