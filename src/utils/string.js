export const slugToName = (slug) => {
  if (!slug) return null
  const words = slug.split("-")
  const names = words.map(
    (word) => word.charAt(0).toUpperCase() + word.substr(1)
  )
  return names.join(" ")
}
