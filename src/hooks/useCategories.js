import { useState, useEffect } from "react"
import { getCategories } from "../utils/api"

const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getCategories().then((categoriesFromAPI) => {
      setCategories(categoriesFromAPI)
      setIsLoading(false)
    })
  }, [])

  return { categories, isLoading }
}

export default useCategories
