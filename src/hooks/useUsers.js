import { useState, useEffect } from "react"
import { getUsers } from "../utils/api"

const useUsers = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then((usersFromAPI) => {
      setUsers(usersFromAPI)
    })
  }, [])

  return { users }
}

export default useUsers
