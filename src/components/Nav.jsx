import { NavLink } from "react-router-dom"
import { slugToName } from "../utils/string"
import styles from "../styles/Nav.module.css"
import useCategories from "../hooks/useCategories"
import { Slide } from "@mui/material"

const Nav = () => {
  const { categories, isLoading } = useCategories()
  console.log(isLoading)

  return (
    !isLoading && (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
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
      </Slide>
    )
  )
}

export default Nav
