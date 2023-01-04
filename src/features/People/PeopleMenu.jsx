import PeopleList from './PeopleList'
import MenuLayout from '../../layouts/MenuLayout'

const PeopleMenu = (props) => {
  const { people } = props
  const roles = Object.keys(people).filter((k) => k !== '_id')

  return (
    <MenuLayout {...props}>
      <h1>People Menu</h1>
      {roles.map((role) => (
        <PeopleList key={role} role={role} people={people[role]} />
      ))}
    </MenuLayout>
  )
}

export default PeopleMenu