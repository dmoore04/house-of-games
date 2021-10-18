import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import ReviewCard from "./ReviewCard"
import styles from "../styles/Reviews.module.css"

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI)
    })
  }, [])

  return (
    <section className={styles.reviews}>
      <h2 className={styles.heading}>All Reviews</h2>
      <ul className={styles.list}>
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </section>
  )
}

export default Reviews
