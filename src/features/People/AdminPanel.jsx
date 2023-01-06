import { useRoleManager } from "../../hooks/useRoleManager"

const AdminPanel = ({ person, cohortId }) => {
  const mutation = useRoleManager(cohortId, person._id)

  const denialData = { person, formerRole: "waitlist", newRole: null }
  const removalData = { person, formerRole: "students", newRole: "inactive" }
  const approvalData = { person, formerRole: "waitlist", newRole: "students" }

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

      <button>
        Change Role
      </button>
      <button>Edit Profile</button>
    </>
  )
}

export default AdminPanel