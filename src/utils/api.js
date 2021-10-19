import axios from "axios"

const gamesApi = axios.create({
  baseURL: "http://board-games-api.herokuapp.com/api",
})

export const getCategories = async () => {
  const { data } = await gamesApi.get("/categories")
  return data.categories
}

export const getReviews = async (sortBy, order, category_slug) => {
  const { data } = await gamesApi.get("/reviews", {
    params: {
      sort_by: sortBy,
      order: order,
      category: category_slug,
    },
  })
  return data.reviews
}

export const getReview = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}`)

  return data.review
}
