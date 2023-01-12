import { Link } from "react-router-dom"
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

const PeopleList = (props) => {
  const { role, people } = props
  return (
    <>
      <h2>{role}</h2>
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