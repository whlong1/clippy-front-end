import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { useSelector } from 'react-redux'
import MenuLayout from '../../../layouts/MenuLayout'

// import { setPeople } from '../peopleSlice' 
// import * as profileService from '../../../services/profileService'

const PeopleMenu = () => {
  // const dispatch = useDispatch()
  const { getAccessTokenSilently } = useAuth0()
  const state = useSelector((state) => state)
  
  // const { data, error, isLoading } = useGetProfilesQuery()
  // console.log('data',data)
  
  console.log(state)
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token = await getAccessTokenSilently()
        console.log(token)
        // const data = await profileService.getProfiles(token)
        // dispatch(setPeople(data))
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfiles()
  }, [getAccessTokenSilently])

  // const { data, error, isLoading } = useGetProfilesQuery()
  // console.log('Profiles:',data)

  return (
    <MenuLayout>
      <p>People Menu</p>
    </MenuLayout>
  )
}

export default PeopleMenu