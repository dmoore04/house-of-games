import styles from "../styles/Page404.module.css"

const Page404 = () => {
  return (
    <section>
      <div className={styles.container}>
        <p className={styles.construction}>🚧</p>
        <h2 className={styles.title}>
          <span className={styles.status}>404:</span> Not Found
        </h2>
        <p className={styles.description}>This page does not exist.</p>
      </div>
    </section>
  )
}

export default Page404
