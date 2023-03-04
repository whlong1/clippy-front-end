const FormatDate = ({ date }) => {
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
    <div>
      <h4>Date</h4>
      <p>
        {formattedDate}
      </p>
    </div>
  )
}

export default FormatDate