import { useState } from "react"
import { Link } from "react-router-dom"

// Components
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

// Assets
import arrow from '../../assets/arrow.svg'
import downArrow from '../../assets/downArrow.svg'


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
          <img src={isOpen ? downArrow : arrow} alt="An arrow" />
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