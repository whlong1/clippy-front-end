import { Navigate, useParams } from "react-router-dom"
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
  // This might cause an issue if people belong to multiple cohorts.
  // if (person.cohort !== cohortId && person.role === 'students') return <Navigate to='/people' />

  const formattedRole = person.role.at(-1) === 's'
    ? person.role[0].toUpperCase() + person.role.slice(1, -1)
    : person.role[0].toUpperCase() + person.role.slice(1)

  const last = person.lastName[0].toUpperCase() + person.lastName.slice(1)
  const first = person.preferredName[0].toUpperCase() + person.preferredName.slice(1)
  const fullName = first + " " + last

  return (
    <section>
      <ProfilePicture gitHubUserName={person.gitHubUserName} size="100px" />

      {formattedRole}
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