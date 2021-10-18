import styles from "../styles/ReviewCard.module.css"

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{review.title}</h2>
      <p className={styles.author}>
        by <em>{review.owner}</em>
      </p>
    </div>
  )
}
export default ReviewCard
