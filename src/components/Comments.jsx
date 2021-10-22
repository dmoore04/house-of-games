import { useState, useContext } from "react"
import { postComment } from "../utils/api"
import CommentCard from "./CommentCard"
import styles from "../styles/Comments.module.css"
import { UserContext } from "../context/User"
import { BeatLoader } from "react-spinners"
import useComments from "../hooks/useComments"

const Comments = ({ review_id, reviewIsLoading }) => {
  const [newComment, setNewComment] = useState("")
  const { user } = useContext(UserContext)
  const { comments, error, isLoading, setComments } = useComments(review_id)
  const [newPostLoading, setNewPostLoading] = useState(false)

  function addComment(e) {
    e.preventDefault()
    setNewPostLoading(true)
    const form = e.target
    const body = form.comment_body.value
    postComment(review_id, body, user.username).then((commentFromAPI) => {
      setComments((currComments) => [commentFromAPI, ...currComments])
      setNewPostLoading(false)
      setNewComment("")
    })
  }

  return (
    <section className={styles.comments}>
      {error ? (
        <p className={styles.error}>
          Could not fetch comments, please refresh.
        </p>
      ) : (
        <>
          {!reviewIsLoading && (
            <BeatLoader loading={isLoading} color={"#81b29a"} />
          )}
          {!isLoading && (
            <>
              <h3 className={styles.title}>Comments 💬</h3>
              <form
                action=""
                onSubmit={addComment}
                className={styles.post__form}
              >
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
              <BeatLoader loading={newPostLoading} color={"#81b29a"} />
              <ul className={styles.comment__list}>
                {comments.map((comment) => (
                  <CommentCard
                    key={comment.comment_id}
                    comment={comment}
                    setComments={setComments}
                  />
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </section>
  )
}

export default Comments
