import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getReview } from "../utils/api"
import { slugToName } from "../utils/string"
import Comments from "./Comments"
import styles from "../styles/Review.module.css"
import Voter from "./Voter"

const Review = () => {
  const { review_id } = useParams()
  const [review, setReview] = useState({})

  useEffect(() => {
    getReview(review_id).then((reviewFromAPI) => {
      setReview(reviewFromAPI)
    })
  }, [review_id])

  return (
    <section className={styles.review}>
      <Heading review={review} />
      <img className={styles.img} src={review.review_img_url} alt="" />
      <p className={styles.metadata}>
        Designed by <strong>{review.designer}</strong>
      </p>
      <p className={styles.body}>{review.review_body}</p>
      <Votes review={review} setReview={setReview} />
      <Comments review_id={review_id} />
    </section>
  )
}

const Heading = ({ review }) => {
  const published = new Date(review.created_at)

  return (
    <>
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
    </>
  )
}

const Votes = ({ review, setReview }) => {
  const [voted, setVoted] = useState(false)

  return (
    <div className={styles.voting}>
      <p className={styles.votes}>
        <strong>Votes: </strong>
        {review.votes}
      </p>
      <div className={styles.voters}>
        {[1, -1].map((value) => (
          <Voter
            value={value}
            review={review}
            setReview={setReview}
            voted={voted}
            setVoted={setVoted}
          />
        ))}
      </div>
    </div>
  )
}

export default Review
