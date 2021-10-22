import { useState, useEffect } from "react"
import { getReviewComments } from "../utils/api"

const useComments = (review_id) => {
  const [comments, setComments] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    getReviewComments(review_id)
      .then((commentsFromAPI) => {
        setIsLoading(false)
        setComments(commentsFromAPI)
      })
      .catch((err) => {
        setError(err)
      })
  }, [review_id])

  return { comments, error, isLoading, setComments }
}

export default useComments
