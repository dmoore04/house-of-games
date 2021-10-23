import axios from "axios"

const gamesApi = axios.create({
  baseURL: "https://board-games-api.herokuapp.com/api",
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

export const getReviewComments = async (review_id) => {
  const { data } = await gamesApi.get(`/reviews/${review_id}/comments`)
  return data.comments
}

export const addReviewVote = async (review_id, value) => {
  const { data } = await gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: value,
  })
  return data.review
}

export const postComment = async (review_id, body, author) => {
  const { data } = await gamesApi.post(`/reviews/${review_id}/comments`, {
    body,
    username: author,
  })

  return data.comment
}

export const getUsers = async () => {
  const { data } = await gamesApi.get("/users")

  return data.users
}

export const getUser = async (username) => {
  const { data } = await gamesApi.get(`users/${username}`)
  return data.user
}

export const addCommentVote = async (comment_id, value) => {
  const { data } = await gamesApi.patch(`/comments/${comment_id}`, {
    inc_votes: value,
  })

  return data.comment
}

export const deleteComment = async (comment_id) => {
  const { data } = await gamesApi.delete(`/comments/${comment_id}`)
  return data.comment
}
