import { useSelector } from 'react-redux'
import MenuLayout from '../../layouts/MenuLayout'

const PeopleMenu = () => {
  const people = useSelector((state) => state.people)
  console.log(people)
  return (
    <MenuLayout>
      <p>People Menu</p>
    </MenuLayout>
  )
}

export default PeopleMenu