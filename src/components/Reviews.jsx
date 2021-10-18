import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"
import ReviewCard from "./ReviewCard"

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI)
    })
  }, [])

  return (
    <section>
      <ul>
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </section>
  )
}

export default Reviews
