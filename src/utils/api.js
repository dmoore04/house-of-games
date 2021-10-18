import axios from "axios"

const gamesApi = axios.create({
  baseURL: "http://board-games-api.herokuapp.com/api",
})

export const getCategories = async () => {
  const { data } = await gamesApi.get("/categories")
  return data.categories
}
