import { useState } from "react"
import { useRoleManager } from "../../hooks/useRoleManager"

const AdminPanel = ({ person, cohortId }) => {
  const [changeRoleData, setChangeRoleData] = useState({
    formerRole: person.role, newRole: ""
  })

  // console.log('person', person)

  const mutation = useRoleManager(cohortId, person._id)

  const denialData = { person, formerRole: "waitlist", newRole: null }
  const removalData = { person, formerRole: "students", newRole: "inactive" }
  const approvalData = { person, formerRole: "waitlist", newRole: "students" }

  const handleChange = ({ target }) => {
    setChangeRoleData({ ...changeRoleData, [target.name]: target.value })
  }

  console.log('Change role data', changeRoleData)

  return (
    <>
      <button onClick={() => mutation.mutate({ type: 'approve', payload: approvalData })}>
        Admit to Cohort
      </button>
      <button onClick={() => mutation.mutate({ type: 'deny', payload: denialData })}>
        Deny Student
      </button>
      <button onClick={() => mutation.mutate({ type: 'remove', payload: removalData })}>
        Remove from Cohort
      </button>

      <select name="newRole" onChange={handleChange} defaultValue={changeRoleData.newRole}>
        <option value="students">Student</option>
        <option value="instructors">Instructor</option>
        <option value="tas">Teaching Assistant</option>
        <option value="ias">Instructional Associate</option>
      </select>


      <button onClick={() => mutation.mutate({ type: 'remove', payload: changeRoleData })}>
        Change Role
      </button>


      <button>Edit Profile</button>
    </>
  )
}

export default AdminPanel