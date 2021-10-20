import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getReview } from "../utils/api"

const useReview = () => {
  const { review_id } = useParams()
  const [review, setReview] = useState({})

  useEffect(() => {
    getReview(review_id).then((reviewFromAPI) => {
      setReview(reviewFromAPI)
    })
  }, [review_id])

  return { review_id, review, setReview }
}

export default useReview
