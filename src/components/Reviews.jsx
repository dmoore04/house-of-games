import { useState } from "react"
import ReviewCard from "./ReviewCard"
import useReviews from "../hooks/useReviews"
import Sort from "./Sort"
import styles from "../styles/Reviews.module.css"

const Reviews = () => {
  const [sortBy, setSortBy] = useState("created_at")
  const [order, setOrder] = useState("desc")
  const reviews = useReviews(sortBy, order)

  console.log(sortBy)

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
