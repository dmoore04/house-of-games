import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getReview } from "../utils/api"
import { slugToName } from "../utils/string"
import Comments from "./Comments"
import styles from "../styles/Review.module.css"

const Review = () => {
  const { review_id } = useParams()
  const [review, setReview] = useState({})

  useEffect(() => {
    getReview(review_id).then((reviewFromAPI) => {
      setReview(reviewFromAPI)
    })
  }, [review_id])

  const published = new Date(review.created_at)

  return (
    <section className={styles.review}>
      <p className={styles.kicker}>
        Categories /
        <span className={styles.category}> {slugToName(review.category)}</span>
      </p>
      <h2 className={styles.title}>{review.title}</h2>
      <p className={styles.metadata}>
        Published by
        <strong className={styles.author}> {review.owner} </strong>
        on
        <strong> {published.toDateString()}</strong>
      </p>
      <img className={styles.img} src={review.review_img_url} alt="" />
      <p className={styles.metadata}>
        Designed by <strong>{review.designer}</strong>
      </p>
      <p className={styles.body}>{review.review_body}</p>
      <div className={styles.voting}>
        <p className={styles.votes}>Votes: {review.votes}</p>
        <div className={styles.voters}>
          <button className={styles.voter}>👍</button>
          <button className={styles.voter}>👎</button>
        </div>
      </div>
      <Comments review_id={review_id} />
    </section>
  )
}

export default Review
