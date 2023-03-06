const DueDate = ({ date }) => {
  const options = {
    hour12: true,
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'America/New_York'
  }

  const dateObj = new Date(date)
  const formattedDate = dateObj.toLocaleDateString('en-US', options)

  return (
    <div>
      <h4>Date</h4>
      <p>{formattedDate}</p>
    </div>
  )
}

export default DueDate