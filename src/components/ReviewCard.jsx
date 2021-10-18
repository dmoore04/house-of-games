import styles from "../styles/ReviewCard.module.css"

const ReviewCard = ({ review }) => {
  return (
    <div className={styles.card}>
      <h2>{review.title}</h2>
      <p>
        by <em>{review.owner}</em>
      </p>
    </div>
  )
}
export default ReviewCard
