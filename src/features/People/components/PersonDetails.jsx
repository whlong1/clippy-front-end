import { useParams, useLocation } from "react-router-dom"
import { useProfileDetails } from "../../../hooks/useProfileDetails"

const PersonDetails = () => {
  const location = useLocation()
  const { profileId } = useParams()
  const { profile, status } = useProfileDetails(profileId)
  const cohortRole = location.search.slice(6, -1).toUpperCase()

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      <img
        alt="github-profile"
        style={{ width: '50px' }}
        src={`https://github.com/${profile.gitHubUserName}.png`}
      />

      {cohortRole}
      {profile.email}
      {profile.lastName}
      {profile.firstName}
      {profile.preferredName}
      {profile.gitHubUserName}
      {profile.linkedInUserName}
      {profile.codeWarsUserName}
      {profile.preferredPronouns}
    </section>
  )
}

export default PersonDetails 