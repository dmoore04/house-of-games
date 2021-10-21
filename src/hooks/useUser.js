import { useState, useEffect } from "react"
import { getUser } from "../utils/api"

const useUser = (username) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    getUser(username).then((userFromAPI) => {
      setUser(userFromAPI)
    })
  }, [username])

  return { user }
}

export default useUser
