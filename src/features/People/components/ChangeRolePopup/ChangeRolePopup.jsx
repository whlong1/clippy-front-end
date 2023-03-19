import Popup from "../../../../layouts/Popup"
import SelectRole from '../SelectRole/SelectRole'

const ChangeRolePopup = ({person, isOpen, setIsOpen, handleMutate}) => {
  return (
    <Popup key={person._id} isOpen={isOpen}>
      <SelectRole
        person={person}
        setIsOpen={setIsOpen}
        handleMutate={handleMutate}
      />
    </Popup>
  )
}

export default ChangeRolePopup