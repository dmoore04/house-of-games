import { createContext, useState } from "react"

export const UserContext = createContext()

// default user context

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "tickle122",
    avatar_url:
      "https://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg",
    name: "Tom Tickle",
  })
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
