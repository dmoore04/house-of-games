import styles from "../styles/ReviewCard.module.css"
import { slugToName } from "../utils/string"
import { Link } from "react-router-dom"

const ReviewCard = ({ review }) => {
  return (
    <Link className={styles.link} to={`/reviews/${review.review_id}`}>
      <div className={styles.card}>
        <Heading review={review} />
        <Metadata review={review} />
      </div>
    </Link>
  )
}

const Heading = ({ review }) => {
  return (
    <>
      <h2 className={styles.title}>{review.title}</h2>
      <p className={styles.category}>
        {slugToName(review.category).toLowerCase()}
      </p>
    </>
  )
}

const Metadata = ({ review }) => {
  const published = new Date(review.created_at)

  return (
    <>
      <p className={styles.author}>
        by <strong>{review.owner}</strong>
      </p>
      <div className={styles.metadata}>
        <span className={styles.date}>{published.toDateString()} ⏰</span>
        <span className={styles.votes}>{review.votes} 👍</span>
        <span className={styles.comments}>{review.comment_count} 💬</span>
      </div>
    </>
  )
}
export default ReviewCard
