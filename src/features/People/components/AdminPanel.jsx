// import * as cohortService from '../../../services/cohortService'
import { useApproveProfile } from "../../../hooks/useApproveProfile"

const AdminPanel = ({ profile, cohortId }) => {
  // Need { formerRole: "waitlist", newRole: "ias" }
  const mutatation = useApproveProfile(cohortId, profile._id, { formerRole: "waitlist", newRole: "ias" })



  console.log('Mutate', mutatation)

  const handleApproveProfile = async () => {
    // const res = useApproveProfile(cohortId, profile.id, { formerRole: "waitlist", newRole: "ias" })
    // mutate()
  }

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