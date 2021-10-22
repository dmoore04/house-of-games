import styles from "../styles/CommentCard.module.css"
import useUser from "../hooks/useUser"
import CommentVotes from "./CommentVotes"
import { Avatar } from "@mui/material"
import { Slide } from "@mui/material"
import { deleteComment } from "../utils/api"
import { useContext } from "react"
import { UserContext } from "../context/User"

const CommentCard = ({ comment, setComments }) => {
  const { user: loggedInAs } = useContext(UserContext)
  const { user } = useUser(comment.author)
  const published = new Date(comment.created_at)

  function removeComment() {
    const idToDelete = comment.comment_id
    setComments((currComments) =>
      currComments.filter((comment) => comment.comment_id !== idToDelete)
    )
    deleteComment(idToDelete)
  }

  return (
    <Slide in={true} direction="right">
      <div className={styles.card}>
        <p className={styles.body}>{comment.body}</p>
        <div className={styles.metadata}>
          <div className={styles.user}>
            <Avatar sx={{ width: 24, height: 24 }} src={user.avatar_url} />
            <strong className={styles.author}>{comment.author}</strong>
          </div>
          <span>📆 {published.toDateString()}</span>
          <CommentVotes comment={comment} setComments={setComments} />
          {comment.author === loggedInAs.username && (
            <button onClick={removeComment}>❌</button>
          )}
        </div>
      </div>
    </Slide>
  )
}

export default CommentCard
