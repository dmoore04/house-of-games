import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { getCategories } from "../utils/api"
import { slugToName } from "../utils/string"
import styles from "../styles/Nav.module.css"

const Nav = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((categoriesFromAPI) => {
      setCategories(categoriesFromAPI)
    })
  }, [])

  return (
    <nav className={styles.nav}>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <NavLink
            className={styles.link}
            activeClassName={styles.selected}
            key={category.slug}
            to={`/categories/${category.slug}`}
          >
            {slugToName(category.slug)}
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}
export default Nav
