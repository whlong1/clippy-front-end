import { useApproveProfile } from "../../../hooks/useApproveProfile"

const AdminPanel = ({ profile, cohortId }) => {
  // const approvalData = { formerRole: "waitlist", newRole: "students" }
  const approvalData = { formerRole: "instructors", newRole: "students" }

  const mutatation = useApproveProfile(cohortId, profile._id, approvalData)
  // const handleApproveProfile = async () => { }

  return (
    <>
      <button onClick={mutatation.mutate}>Admit to Cohort</button>
      <button>Edit Profile</button>
      <button>Remove from Cohort</button>
      <button>Change Role</button>
    </>
  )
}

export default AdminPanel