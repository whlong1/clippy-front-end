import { useParams, useLocation } from "react-router-dom"
import { useShowProfile } from "../../hooks/useShowProfile"

// Components
import AdminPanel from "./AdminPanel"

const PersonDetails = ({ user, cohortId }) => {
  const location = useLocation()
  const { profileId } = useParams()

  // Should we use a different variable for profile?
  // Maybe use person in place of profile here to avoid confusion
  const { profile, status } = useShowProfile(profileId)
  const cohortRole = location.search.slice(6, -1).toUpperCase()

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      {profile.gitHubUserName &&
        <img
          alt="github-profile"
          style={{ width: '50px' }}
          src={`https://github.com/${profile.gitHubUserName}.png`}
        />
      }

      {cohortRole}
      {profile.email}
      {profile.lastName}
      {profile.firstName}
      {profile.preferredName}
      {profile.gitHubUserName}
      {profile.linkedInUserName}
      {profile.codeWarsUserName}
      {profile.preferredPronouns}

      {user.isAdmin && <AdminPanel profile={profile} cohortId={cohortId} />}
    </section>
  )
}

export default PersonDetails 