// Components
import PeopleList from './PeopleList'
import MenuLayout from '../../layouts/MenuLayout'
import MenuStatus from '../../components/MenuStatus/MenuStatus'

// Hooks
import { useIndexPeople } from '../../hooks/useIndexPeople'

const PeopleMenu = (props) => {
  const { people, status } = useIndexPeople(props.cohortId)

  if (status === 'error') return <MenuStatus {...props} status={status} />
  if (status === 'loading') return <MenuStatus {...props} status={status} />

  const roles = Object.keys(people).filter((k) => k !== '_id')

  return (
    <MenuLayout {...props}>
      <span><h1>People</h1></span>
      {roles.map((role) => (
        <PeopleList key={role} role={role} people={people[role]} />
      ))}
    </MenuLayout>
  )
}

export default PeopleMenu