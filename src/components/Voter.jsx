import styles from "../styles/Voter.module.css"

export const Voter = ({ value, addVote, type, vote }) => {
  const className = `${styles[type]} ${
    styles[value > 0 ? "upvote" : "downvote"]
  }`
  return (
    <button
      disabled={vote === value}
      className={className}
      onClick={() => {
        addVote(value)
      }}
    >
      <span className={styles.thumb}>{value > 0 ? "👍" : "👎"}</span>
    </button>
  )
}
