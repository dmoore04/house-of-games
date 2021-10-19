import styles from "../styles/Filters.module.css"

const Filters = ({ setSortBy }) => {
  return (
    <div>
      <label className={styles.label} htmlFor="">
        sort by
        <select
          className={styles.select}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="created_at">⏰</option>
          <option value="votes">👍</option>
        </select>
      </label>
    </div>
  )
}

export default Filters
