import { useState } from "react"
import { Link } from "react-router-dom"

// Components
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

// Assets
import arrow from '../../assets/icons/arrow.svg'
import downArrow from '../../assets/icons/downArrow.svg'


const PeopleList = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const roleHeader = props.role[0].toUpperCase() + props.role.slice(1)

  const sortedByNormalizedName = props.people.sort((a, b) => {
    return a.normalizedName > b.normalizedName ? 1 : -1
  })

  return (
    <section>
      <header>
        <h2>{roleHeader}</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? downArrow : arrow} alt="An arrow" />
        </button>
      </header>

      {isOpen && sortedByNormalizedName.map((profile) => (
        <Link key={profile._id} to={`/people/${profile._id}`}>
          <ProfileInfo profile={profile} />
        </Link>
      ))}

    </section>
  )
}

export default PeopleList