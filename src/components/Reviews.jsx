import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews().then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI)
    })
  }, [])

  return <section>Reviews</section>
}

export default Reviews
