const formatDate = (dueDate) => {
  const date = new Date(dueDate)
  const difference = new Date().getUTCHours() - new Date().getHours()
  date.setHours(date.getHours() + difference)
  const tzoffset = (new Date()).getTimezoneOffset() * 60000
  const formattedTime = (new Date(date - tzoffset)).toISOString().slice(0, 16)
  return formattedTime
}

// The goal here is the generate a default date for new deliverables.
// The default date will be 2 days from the current date at 8:59 AM.
const getDefaultDate = () => {
  const date = new Date()

  date.setHours(8)
  date.setSeconds(0)
  date.setMinutes(59)
  date.setMilliseconds(0)
  date.setDate(date.getDate() + 2)

  const difference = new Date().getUTCHours() - new Date().getHours() - 5
  date.setHours(date.getHours() + difference)
  const tzoffset = (new Date()).getTimezoneOffset() * 60000
  const formattedTime = (new Date(date - tzoffset)).toISOString().slice(0, 16)
  return formattedTime
}

export {
  formatDate,
  getDefaultDate
}