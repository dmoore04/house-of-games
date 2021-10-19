import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"

const useReviews = (sortBy, order, category_slug) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews(sortBy, order, category_slug).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI)
    })
  }, [sortBy, order, category_slug])

  return reviews
}

export default useReviews
