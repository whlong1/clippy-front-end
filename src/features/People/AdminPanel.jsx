import { useRoleManager } from "../../hooks/useRoleManager"

const AdminPanel = ({ profile, cohortId }) => {
  const mutation = useRoleManager(cohortId, profile._id)
  
  const denialData = { profile, formerRole: "waitlist", newRole: null }
  const removalData = { profile, formerRole: "students", newRole: "inactive" }
  const approvalData = { profile, formerRole: "waitlist", newRole: "students" }

  console.log(profile)
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