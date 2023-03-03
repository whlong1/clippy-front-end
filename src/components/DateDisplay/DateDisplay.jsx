const DateDisplay = ({ date }) => {
  const options = {
    hour12: true,
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    year: 'numeric',
    weekday: 'long',
    minute: 'numeric',
  }

  const dateObj = new Date(date)
  const formattedDate = dateObj.toLocaleDateString('en-US', options)

  return (
    <p>
      {formattedDate}
    </p>
  )
}

export default DateDisplay