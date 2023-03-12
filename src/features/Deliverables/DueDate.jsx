// Assets
import dateIcon from '../../assets/icons/headers/date.svg'

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
      <h3>
        <img src={dateIcon} alt="date" />
        Date
      </h3>
      <p>{formattedDate}</p>
    </div>
  )
}

export default DueDate