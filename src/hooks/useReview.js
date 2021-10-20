import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getReview } from "../utils/api"

const useReview = () => {
  const { review_id } = useParams()
  const [review, setReview] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null)
    getReview(review_id)
      .then((reviewFromAPI) => {
        setReview(reviewFromAPI)
      })
      .catch((err) => {
        setError(err)
      })
  }, [review_id])

  return { review_id, review, setReview, error }
}

export default useReview
