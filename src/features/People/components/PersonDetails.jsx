import { useParams } from "react-router-dom"
import { useProfileDetails } from "../../../hooks/useProfileDetails"

const PersonDetails = () => {
  const { profileId } = useParams()
  const { profile, status } = useProfileDetails(profileId)

  return (
    <section>
      People details
    </section>
  )
}

export default PersonDetails 