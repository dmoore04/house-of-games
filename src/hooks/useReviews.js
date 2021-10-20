import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"

const useReviews = (sortBy, order, category_slug) => {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    getReviews(sortBy, order, category_slug)
      .then((reviewsFromAPI) => {
        setReviews(reviewsFromAPI)
      })
      .catch((err) => {
        setError(err)
      })
  }, [sortBy, order, category_slug])

  return { reviews, error }
}

export default useReviews
