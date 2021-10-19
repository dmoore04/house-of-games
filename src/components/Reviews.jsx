import styles from "../styles/Reviews.module.css"
import ReviewCard from "./ReviewCard"
import Sort from "./Sort"
import useReviews from "../hooks/useReviews"
import useSort from "../hooks/useSort"

const Reviews = () => {
  const { sortBy, setSortBy, order, setOrder } = useSort()
  const reviews = useReviews(sortBy, order)

  return (
    <section className={styles.reviews}>
      <h2 className={styles.heading}>All Reviews</h2>
      <Sort setSortBy={setSortBy} setOrder={setOrder} />
      <ul className={styles.list}>
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </section>
  )
}

export default Reviews
