import { slugToName } from "../utils/string"
import Comments from "./Comments"
import ReviewVotes from "./ReviewVotes"
import styles from "../styles/Review.module.css"
import useReview from "../hooks/useReview"
import { HashLoader } from "react-spinners"
import Error from "./Error"
import { css } from "@emotion/react"

const Review = () => {
  const { review_id, review, error, isLoading } = useReview()

  return error ? (
    <Error error={error} />
  ) : isLoading ? (
    <HashLoader
      loading={isLoading}
      color={"#81b29a"}
      css={css`
        position: relative;
        top: 15vh;
      `}
    />
  ) : (
    <section className={styles.review}>
      <Heading review={review} />
      <img className={styles.img} src={review.review_img_url} alt="" />
      <p className={styles.metadata}>
        Designed by <strong>{review.designer}</strong>
      </p>
      <p className={styles.body}>{review.review_body}</p>
      <ReviewVotes />
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

export default Review
