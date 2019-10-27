const formatTimeValue = t => (String(t).length < 2 ? `0${t}` : t)

const getTime = () => {
  const now = new Date()
  const hours = formatTimeValue(now.getHours())
  const minutes = formatTimeValue(now.getMinutes())
  const seconds = formatTimeValue(now.getSeconds())

  return `${hours}:${minutes}:${seconds}`
}

export default getTime
