import { useParams, useLocation } from "react-router-dom"
import { useShowPerson } from "../../hooks/useShowPerson"

// Components
import AdminPanel from "./AdminPanel"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"

const ShowPerson = ({ user, cohortId }) => {
  // const location = useLocation()
  const { profileId } = useParams()

  const { person, status } = useShowPerson(cohortId, profileId)
  // const cohortRole = location.search.slice(6, -1).toUpperCase()

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      <ProfilePicture gitHubUserName={person.gitHubUserName} size='100px' />

      {person.role}
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

export default ShowPerson