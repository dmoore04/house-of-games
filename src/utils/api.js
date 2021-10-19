import axios from "axios"

const gamesApi = axios.create({
  baseURL: "http://board-games-api.herokuapp.com/api",
})

export const getCategories = async () => {
  const { data } = await gamesApi.get("/categories")
  return data.categories
}

export const getReviews = async (sortBy) => {
  const { data } = await gamesApi.get("/reviews", {
    params: {
      sort_by: sortBy,
    },
  })
  return data.reviews
}
