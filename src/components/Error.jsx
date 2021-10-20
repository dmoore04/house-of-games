import styles from "../styles/Page404.module.css"

const Error = ({ error }) => {
  return (
    <section>
      <div className={styles.container}>
        <p className={styles.construction}>🚧</p>
        <h2 className={styles.title}>
          <span className={styles.status}>{error.response.status}: </span>
          {error.response.statusText}
        </h2>
        <p className={styles.description}>{error.response.data.msg}</p>
      </div>
    </section>
  )
}

export default Error
