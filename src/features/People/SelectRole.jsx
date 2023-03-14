import { useState, useEffect } from "react"

const SelectRole = ({ person, setIsOpen, handleMutate }) => {
  const [changeRoleData, setChangeRoleData] = useState({})

  const handleSubmit = () => {
    handleMutate(changeRoleData)
  }

  const handleChange = ({ target }) => {
    setChangeRoleData({ ...changeRoleData, newRole: target.value })
  }

  useEffect(() => {
    setChangeRoleData({ person, formerRole: person.role, newRole: "" })
  }, [person])

  return (
    <div className="roleConfirmation">
      <header>
        <h1>Change Role</h1>
        <p>Please select a role from the menu below.</p>
      </header>
      <select name="newRole" onChange={handleChange} defaultValue={person.role}>
        <option value="students">Student</option>
        <option value="inactive">Withdrawn</option>
        <option value="instructors">Instructor</option>
        <option value="tas">Teaching Assistant</option>
        <option value="ias">Instructional Associate</option>
      </select>

      <section>
        <button disabled={!changeRoleData.newRole} onClick={handleSubmit}>
          CONFIRM
        </button>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          CANCEL
        </button>
      </section>
    </div>
  )
}

export default SelectRole