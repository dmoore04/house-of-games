import styles from "../styles/ReviewCard.module.css"

const ReviewCard = ({ review }) => {
  const published = new Date(review.created_at)
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{review.title}</h2>
      <p className={styles.author}>
        by <strong>{review.owner}</strong>
      </p>
      <div className={styles.metadata}>
        <span className={styles.date}>{published.toDateString()} ⏰</span>
        <span className={styles.votes}>{review.votes} 👍</span>
      </div>
    </div>
  )
}
export default ReviewCard
