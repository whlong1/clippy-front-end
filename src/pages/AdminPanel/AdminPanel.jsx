import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import * as adminService from '../../services/adminService'

const AdminPanel = () => {
  const [users, setUsers] = useState([])
  const { getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently()
      if (token) {
        const userList = await adminService.getUsers(token)
        setUsers(userList)
      } else {
        console.log('Something went wrong')
      }
    }
    getToken()
  }, [getAccessTokenSilently])

  return (
    <main>
      <h1>Admin</h1>
      {users.map((u) => (
        <div key={u.user_id}>
          <p>{u.name}</p>
          <img src={u.picture} alt={u.name} />
        </div>
      ))}
    </main>
  )
}

export default AdminPanel