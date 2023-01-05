import { useParams, useLocation } from "react-router-dom"
import { useShowPerson } from "../../hooks/useShowPerson"

// Components
import AdminPanel from "./AdminPanel"

const PersonDetails = ({ user, cohortId }) => {
  const location = useLocation()
  const { profileId } = useParams()

  const { person, status } = useShowPerson(profileId)
  const cohortRole = location.search.slice(6, -1).toUpperCase()

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      {person.gitHubUserName &&
        <img
          alt="github-profile"
          style={{ width: '50px' }}
          src={`https://github.com/${person.gitHubUserName}.png`}
        />
      }

      {cohortRole}
      {person.email}
      {person.lastName}
      {person.firstName}
      {person.preferredName}
      {person.gitHubUserName}
      {person.linkedInUserName}
      {person.codeWarsUserName}
      {person.preferredPronouns}

      {user.isAdmin && <AdminPanel person={person} cohortId={cohortId} />}
    </section>
  )
}

export default PersonDetails 