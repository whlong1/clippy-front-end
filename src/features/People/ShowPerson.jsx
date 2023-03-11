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
  // This might cause an issue if people belong to multiple cohorts.
  // if (person.cohort !== cohortId && person.role === 'students') return <Navigate to='/people' />

  const formattedRole = person.role.at(-1) === 's'
    ? person.role[0].toUpperCase() + person.role.slice(1, -1)
    : person.role[0].toUpperCase() + person.role.slice(1)

  const last = person.lastName[0].toUpperCase() + person.lastName.slice(1)
  const first = person.preferredName[0].toUpperCase() + person.preferredName.slice(1)
  const fullName = first + " " + last

  const checkProp = (prop) => prop ? prop : 'Not Available'

  return (
    <section className="person">

      <section>
        <ProfilePicture gitHubUserName={person.gitHubUserName} size="128px" />
        <span>
          <h3>{formattedRole}</h3>
          <h1>{fullName}</h1>
          <p>{person.preferredPronouns}</p>
        </span>
        <span>
          o o o
        </span>
        {user.isAdmin && <RolePanel person={person} cohortId={cohortId} />}
      </section>

      <section>
        <h1>Contact Information</h1>
        <div>
          <h3>[ ] Email</h3>
          <p>{checkProp(person.email)}</p>
        </div>
        <div>
          <h3>[ ] Github</h3>
          <p>{checkProp(person.gitHubUserName)}</p>
        </div>
        <div>
          <h3>[ ] LinkedIn</h3>
          <p>{checkProp(person.linkedInUserName)}</p>
        </div>
        <div>
          <h3>[ ] Codewars</h3>
          <p>{checkProp(person.codeWarsUserName)}</p>
        </div>
      </section>

    </section>
  )
}

export default ShowPerson