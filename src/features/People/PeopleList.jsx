import { Link } from "react-router-dom"
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

const PeopleList = (props) => {
  const { role, people } = props
  return (
    <>
      <h3>{role}</h3>
      <p>{people.length}</p>
      {people.map((profile) => (
        <Link key={profile._id} to={`/people/${profile._id}`}>
          <ProfileInfo profile={profile} />
        </Link>
      ))}
    </>
  )
}

export default PeopleList