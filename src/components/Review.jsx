import { slugToName } from "../utils/string"
import Comments from "./Comments"
import ReviewVotes from "./ReviewVotes"
import styles from "../styles/Review.module.css"
import useReview from "../hooks/useReview"
import { HashLoader } from "react-spinners"
import Error from "./Error"
import { css } from "@emotion/react"
import { Slide } from "@mui/material"

const Review = () => {
  const { review_id, review, error, isLoading, setReview } = useReview()

  return error ? (
    <Error error={error} />
  ) : (
    <section className={styles.review}>
      <HashLoader
        loading={isLoading}
        color={"#81b29a"}
        css={css`
          position: relative;
          top: 15vh;
        `}
      />
      {!isLoading && (
        <Slide direction="up" in={true} mountOnEnter>
          <div>
            <Heading review={review} />
            <div className={styles.img__container}>
              <img className={styles.img} src={review.review_img_url} alt="" />
            </div>
            <p className={styles.metadata}>
              Designed by <strong>{review.designer}</strong>
            </p>
            <p className={styles.body}>{review.review_body}</p>
            <ReviewVotes review={review} setReview={setReview} />
          </div>
        </Slide>
      )}
      <Comments review_id={review_id} reviewIsLoading={isLoading} />
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
