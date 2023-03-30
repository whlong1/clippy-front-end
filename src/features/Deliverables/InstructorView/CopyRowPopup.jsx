// Components
import Popup from "../../../layouts/Popup"

const CopyRowPopup = ({ student, isOpen, setIsOpen }) => {
  console.log('student data:', student)

  return (
    <Popup key={student._id} isOpen={isOpen}>
      <button onClick={() => setIsOpen(false)}>
        CANCEL
      </button>
    </Popup>
  )
}

export default CopyRowPopup