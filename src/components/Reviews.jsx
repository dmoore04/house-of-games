import styles from "../styles/Reviews.module.css"
import ReviewCard from "./ReviewCard"
import Sort from "./Sort"
import useReviews from "../hooks/useReviews"
import useSort from "../hooks/useSort"
import Error from "./Error"
import { useParams } from "react-router"
import { slugToName } from "../utils/string"

const Reviews = () => {
  const { category_slug } = useParams()
  const { sortBy, setSortBy, order, setOrder } = useSort()
  const { reviews, error } = useReviews(sortBy, order, category_slug)

  return error ? (
    <Error error={error} />
  ) : (
    <section className={styles.reviews}>
      <h2 className={styles.heading}>
        {category_slug ? slugToName(category_slug) : "All"} Reviews
      </h2>
      <Sort setSortBy={setSortBy} setOrder={setOrder} />
      <ul className={styles.list}>
        {reviews.map((review) => (
          <ReviewCard key={review.review_id} review={review} />
        ))}
      </ul>
    </section>
  )
}

export default Reviews
