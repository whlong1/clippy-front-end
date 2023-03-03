import { useState } from "react"
import { Link } from "react-router-dom"
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

const PeopleList = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const { role, people } = props
  const roleHeader = role[0].toUpperCase() + role.slice(1)


  return (
    <section>
      <header>
        <h2>{roleHeader}</h2>
        <p>{people.length}</p>
        <button onClick={() => setIsOpen(!isOpen)}>
          X
        </button>
      </header>

      {isOpen && people.map((profile) => (
        <Link key={profile._id} to={`/people/${profile._id}`}>
          <ProfileInfo profile={profile} />
        </Link>
      ))}

    </section>
  )
}

export default PeopleList