import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCategories } from "../utils/api"
import { slugToName } from "../utils/string"

const Nav = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((categoriesFromAPI) => {
      setCategories(categoriesFromAPI)
    })
  }, [])

  console.log(categories)

  return (
    <section>
      <ul>
        {categories.map((category) => (
          <Link key={category.slug} to={`/categories/${category.slug}`}>
            {slugToName(category.slug)}
          </Link>
        ))}
      </ul>
    </section>
  )
}
export default Nav
