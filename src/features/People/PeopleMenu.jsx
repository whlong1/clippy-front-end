import PeopleList from './PeopleList'
import MenuLayout from '../../layouts/MenuLayout'

import { useIndexPeople } from '../../hooks/useIndexPeople'

const PeopleMenu = (props) => {
  const { people, status } = useIndexPeople(props.cohortId)

  // console.log('people', people)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

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