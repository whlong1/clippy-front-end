import { useState } from "react"
import { Link } from "react-router-dom"

// Components
import Counter from "../../components/Counter/Counter"
import ToggleArrow from "../../components/ToggleArrow/ToggleArrow"
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

const PeopleList = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const getRoleHeader = () => {
    if (props.role === 'ias') return 'IAs'
    if (props.role === 'tas') return 'TAs'
    return props.role[0].toUpperCase() + props.role.slice(1)
  }

  const sortedByNormalizedName = props.people.sort((a, b) => {
    return a.normalizedName > b.normalizedName ? 1 : -1
  })

  return (
    <section>
      <header onClick={() => setIsOpen(!isOpen)}>
        <h2>{getRoleHeader()}</h2>
        <Counter num={sortedByNormalizedName.length} />
        <ToggleArrow isOpen={isOpen} />
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