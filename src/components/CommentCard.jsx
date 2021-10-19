import styles from "../styles/CommentCard.module.css"
import { randomPersonEmoji } from "../utils/string"

const CommentCard = ({ comment }) => {
  const published = new Date(comment.created_at)
  return (
    <div className={styles.card}>
      <p className={styles.body}>{comment.body}</p>
      <div className={styles.metadata}>
        <strong className={styles.author}>{`${randomPersonEmoji()} ${
          comment.author
        }`}</strong>
        <span>📆 {published.toDateString()}</span>
        <span className={styles.votes}>👍 {comment.votes}</span>
      </div>
    </div>
  )
}

export default CommentCard
