import { useState } from "react"

const SelectRole = ({ mutation, person }) => {
  const [changeRoleData, setChangeRoleData] = useState({
    person, formerRole: person.role, newRole: ""
  })

  const handleMutate = () => {
    mutation.mutate({ type: 'change', payload: changeRoleData })
  }

  const handleChange = ({ target }) => {
    setChangeRoleData({ ...changeRoleData, [target.name]: target.value })
  }

  return (
    <>
      <h2>Change Role:</h2>
      <select name="newRole" onChange={handleChange} defaultValue={person.role}>
        <option value="students">Student</option>
        <option value="inactive">Withdrawn</option>
        <option value="instructors">Instructor</option>
        <option value="tas">Teaching Assistant</option>
        <option value="ias">Instructional Associate</option>
      </select>

      <button disabled={!changeRoleData.newRole} onClick={handleMutate}>
        CHANGE ROLE
      </button>
    </>
  )
}

export default SelectRole