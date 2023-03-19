import "./ToggleArrow.css"

// Assets
import arrow from '../../assets/icons/arrow.svg'
import downArrow from '../../assets/icons/downArrow.svg'

const ToggleArrow = ({isOpen}) => {
  return (
    <button className="toggleArrow">
      <img src={isOpen ? downArrow : arrow} alt="An arrow" />
    </button>
  )
}

export default ToggleArrow 