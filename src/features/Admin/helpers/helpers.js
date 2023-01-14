const formatDate = (dueDate) => {
  const date = new Date(dueDate)
  const difference = new Date().getUTCHours() - new Date().getHours()
  date.setHours(date.getHours() + difference)
  const tzoffset = (new Date()).getTimezoneOffset() * 60000
  const formattedTime = (new Date(date - tzoffset)).toISOString().slice(0, 16)
  return formattedTime
}

const handleDate = (date) => {
  if (date) {
    const newDate = new Date(date)
    return newDate.toISOString().slice(0, 10)
  } else {
    const newDate = new Date()
    return newDate.toISOString().slice(0, 10)
  }
}

export {
  handleDate,
  formatDate,
}