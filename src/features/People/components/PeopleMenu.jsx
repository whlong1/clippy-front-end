import { useSelector } from 'react-redux'
import MenuLayout from '../../../layouts/MenuLayout'

import { useGetProfilesQuery } from '../../../services/profileService'

const PeopleMenu = () => {
  const people = useSelector((state) => state.people)
  console.log(people)

  const { data, error, isLoading } = useGetProfilesQuery()

  console.log('Profiles:',data)
  
  return (
    <MenuLayout>
      <p>People Menu</p>
    </MenuLayout>
  )
}

export default PeopleMenu