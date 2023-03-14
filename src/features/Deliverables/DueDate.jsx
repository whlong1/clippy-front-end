// Helpers
import { dateOptions } from './helpers/helpers'

// Assets
import dateIcon from '../../assets/icons/headers/date.svg'

const DueDate = ({ date }) => {

  const dateObj = new Date(date)
  const formattedDate = dateObj.toLocaleDateString('en-US', dateOptions)

  return (
    <div className="subheader">
      <h3>
        <img src={dateIcon} alt="date" />
        Date
      </h3>
      <p style={{ marginTop: '2px' }}>{formattedDate}</p>
    </div>
  )
}

export default DueDate