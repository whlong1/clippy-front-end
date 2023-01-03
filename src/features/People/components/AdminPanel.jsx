import { useManageRoles } from "../../../hooks/useManageRoles"

const AdminPanel = ({ profile, cohortId }) => {

  const mutation = useManageRoles(cohortId, profile._id)
  const approvalData = { profile, formerRole: "instructors", newRole: "students" }
  // const approvalData = { formerRole: "waitlist", newRole: "students" }

  console.log(profile)
  return (
    <>
      <button onClick={() => mutation.mutate({ type: 'approve', payload: approvalData })}>
        Admit to Cohort
      </button>
      <button>
        Deny Student
      </button>
      <button>
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