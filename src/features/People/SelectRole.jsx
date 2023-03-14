import { useState } from "react"

const SelectRole = ({ mutation, person, setIsOpen }) => {
  const [changeRoleData, setChangeRoleData] = useState({
    person, formerRole: person.role, newRole: ""
  })

  const handleMutate = () => {
    setIsOpen((prev) => !prev)
    mutation.mutate({ type: 'change', payload: changeRoleData })
  }

  const handleChange = ({ target }) => {
    setChangeRoleData({ ...changeRoleData, [target.name]: target.value })
  }

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
        <button disabled={!changeRoleData.newRole} onClick={handleMutate}>
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