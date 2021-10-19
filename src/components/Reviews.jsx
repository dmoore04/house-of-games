import { useState } from "react"
import ReviewCard from "./ReviewCard"
import useReviews from "../hooks/useReviews"
import Filters from "./Filters"
import styles from "../styles/Reviews.module.css"

const Reviews = () => {
  const [sortBy, setSortBy] = useState("created_at")
  const reviews = useReviews(sortBy)

  console.log(sortBy)

  return (
    <section className={styles.reviews}>
      <h2 className={styles.heading}>All Reviews</h2>
      <Filters setSortBy={setSortBy} />
      <ul className={styles.list}>
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </section>
  )
}

export default Reviews
