import { useState } from "react"
import { useRoleManager } from "../../hooks/useRoleManager"

const AdminPanel = ({ person, cohortId }) => {
  const mutation = useRoleManager(cohortId, person._id)

  const denialData = { person, formerRole: "waitlist", newRole: null }
  const removalData = { person, formerRole: "students", newRole: "inactive" }
  const approvalData = { person, formerRole: "waitlist", newRole: "students" }
  const [changeRoleData, setChangeRoleData] = useState({
    person, formerRole: person.role, newRole: ""
  })

  const handleChange = ({ target }) => {
    setChangeRoleData({ ...changeRoleData, [target.name]: target.value })
  }

  return (
    <>
      <button>Edit Profile</button>

      <h3>Manage Roles</h3>

      <button onClick={() => mutation.mutate({ type: 'approve', payload: approvalData })}>
        Admit to Cohort
      </button>
      <button onClick={() => mutation.mutate({ type: 'deny', payload: denialData })}>
        Deny Student
      </button>
      <button onClick={() => mutation.mutate({ type: 'remove', payload: removalData })}>
        Remove from Cohort
      </button>

      <h3>Change Role:</h3>
      <select name="newRole" onChange={handleChange} defaultValue={changeRoleData.formerRole}>
        <option value="students">Student</option>
        <option value="inactive">Withdrawn</option>
        <option value="instructors">Instructor</option>
        <option value="tas">Teaching Assistant</option>
        <option value="ias">Instructional Associate</option>
      </select>

      <button
        disabled={!changeRoleData.newRole}
        onClick={() => mutation.mutate({ type: 'change', payload: changeRoleData })}>
        Change Role
      </button>
    </>
  )
}

export default AdminPanel