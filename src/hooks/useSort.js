import { useState } from "react"

const useSort = () => {
  const [sortBy, setSortBy] = useState("created_at")
  const [order, setOrder] = useState("desc")

  return { sortBy, setSortBy, order, setOrder }
}

export default useSort
