import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getReview } from "../utils/api"

const useReview = () => {
  const { review_id } = useParams()
  const [review, setReview] = useState({})
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    getReview(review_id)
      .then((reviewFromAPI) => {
        setIsLoading(false)
        setReview(reviewFromAPI)
      })
      .catch((err) => {
        setError(err)
      })
  }, [review_id])

  return { review_id, review, setReview, error, isLoading }
}

export default useReview
