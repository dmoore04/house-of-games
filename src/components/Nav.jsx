import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
          <Link
            className={styles.link}
            key={category.slug}
            to={`/categories/${category.slug}`}
          >
            {slugToName(category.slug)}
          </Link>
        ))}
      </ul>
    </nav>
  )
}
export default Nav
