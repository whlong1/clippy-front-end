import { useParams, Navigate } from "react-router-dom"
import { useShowPerson } from "../../hooks/useShowPerson"
import './styles/ShowPerson.css'

// Components
import RolePanel from "./RolePanel"
import ContentStatus from "../../components/ContentStatus/ContentStatus"
import ProfileSection from "../../components/ProfileSection/ProfileSection"

const ShowPerson = ({ user, cohortId }) => {
  const { profileId } = useParams()
  const { person, status } = useShowPerson(cohortId, profileId)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />
  if (!person.role) return <Navigate to='/people' />
  // ^^ When viewing a person, if we refresh the page, the cohortId defaults
  // to our current cohort, but the person we were viewing will still be displayed,
  // even if they are not in that cohort. This check will catch that, and redirect.
  // The show person functionality uses a person's cohortId to find their associated role.
  // If no role is present, the redirect should occur. If there is a role, we might be looking 
  // at someone in multiple cohorts (instructor, ta), in which case the redirect should not occur.

  return (
    <section className="person" style={{ position: 'relative' }}>
      <section>
        <ProfileSection person={person} displayRole={true} />
        {user.isAdmin && <RolePanel person={person} cohortId={cohortId} />}
      </section>
    </section>
  )
}

export default ShowPerson