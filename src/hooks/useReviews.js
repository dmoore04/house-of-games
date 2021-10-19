import { useEffect, useState } from "react"
import { getReviews } from "../utils/api"

const useReviews = (sortBy) => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    getReviews(sortBy).then((reviewsFromAPI) => {
      setReviews(reviewsFromAPI)
    })
  }, [sortBy])

  return reviews
}

export default useReviews
