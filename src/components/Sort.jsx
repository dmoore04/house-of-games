import styles from "../styles/Sort.module.css"

const Sort = ({ setSortBy, setOrder }) => {
  return (
    <div className={styles.sorting}>
      <label className={styles.label} htmlFor="sort_by">
        sort by
        <select
          name="sort_by"
          id="sort_by"
          className={styles.select}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="created_at">⏰</option>
          <option value="votes">👍</option>
          <option value="comment_count">💬</option>
        </select>
      </label>
      <label className={styles.label} htmlFor="order">
        order
        <select
          onChange={(e) => setOrder(e.target.value)}
          className={styles.select}
          name="order"
          id="order"
        >
          <option value="desc">⬇️</option>
          <option value="asc">⬆️</option>
        </select>
      </label>
    </div>
  )
}

export default Sort
