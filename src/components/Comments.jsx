import { useState, useEffect, useContext } from "react"
import { getReviewComments, postComment } from "../utils/api"
import CommentCard from "./CommentCard"
import styles from "../styles/Comments.module.css"
import { UserContext } from "../context/User"

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")
  const [error, setError] = useState(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    getReviewComments(review_id)
      .then((commentsFromAPI) => {
        setComments(commentsFromAPI)
      })
      .catch((err) => {
        setError(err)
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
      {error ? (
        <p className={styles.error}>
          Could not fetch comments, please refresh.
        </p>
      ) : (
        <>
          <form action="" onSubmit={addComment} className={styles.post__form}>
            <input
              className={styles.post__input}
              autoComplete="off"
              type="text"
              id="comment_body"
              name="comment_body"
              placeholder="Enter comment..."
              maxLength="255"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button className={styles.post__button}>Post</button>
          </form>
          <ul className={styles.comment__list}>
            {comments.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

export default Comments
