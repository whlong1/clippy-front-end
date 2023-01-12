import { useParams } from "react-router-dom"
import { useShowPerson } from "../../hooks/useShowPerson"

// Components
import RolePanel from "./RolePanel"
import ContentStatus from "../../components/ContentStatus/ContentStatus"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"

const ShowPerson = ({ user, cohortId }) => {
  const { profileId } = useParams()
  const { person, status } = useShowPerson(cohortId, profileId)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  const fullName = `${person.preferredName} ${person.lastName}`

  return (
    <section>
      <ProfilePicture gitHubUserName={person.gitHubUserName} size='100px' />
      {person.role}
      <h1>{fullName}</h1>
      {person.preferredPronouns}

      {person.email}
      {person.firstName}
      {person.gitHubUserName}
      {person.linkedInUserName}
      {person.codeWarsUserName}

      {user.isAdmin && <RolePanel person={person} cohortId={cohortId} />}
    </section>
  )
}

export default ShowPerson