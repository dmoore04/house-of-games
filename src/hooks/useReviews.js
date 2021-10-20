import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"

const useReviews = (sortBy, order, category_slug) => {
  const [reviews, setReviews] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setError(null)
    setIsLoading(true)
    getReviews(sortBy, order, category_slug)
      .then((reviewsFromAPI) => {
        setReviews(reviewsFromAPI)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
      })
  }, [sortBy, order, category_slug])

  return { reviews, error, isLoading }
}

export default useReviews
