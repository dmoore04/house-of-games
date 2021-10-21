import { createContext, useState } from "react"

export const UserContext = createContext()

// default user context

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "grumpy19",
    avatar_url: "https://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg",
    name: "Paul Grump",
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
