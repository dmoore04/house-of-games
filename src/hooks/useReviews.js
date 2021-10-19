import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"

const useReviews = (sortBy, order) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews(sortBy, order).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI)
    })
  }, [sortBy, order])

  return reviews
}

export default useReviews
