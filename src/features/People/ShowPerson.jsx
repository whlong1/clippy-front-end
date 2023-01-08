import { useParams } from "react-router-dom"
import { useShowPerson } from "../../hooks/useShowPerson"

// Components
import RolePanel from "./RolePanel"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"

const ShowPerson = ({ user, cohortId }) => {
  const { profileId } = useParams()
  const { person, status } = useShowPerson(cohortId, profileId)

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

      {user.isAdmin && <RolePanel person={person} cohortId={cohortId} />}
    </section>
  )
}

export default ShowPerson