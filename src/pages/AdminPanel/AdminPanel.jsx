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

  const handleDeleteUser = async (userId) => {
    const token = await getAccessTokenSilently()
    await adminService.deleteUser(token, userId)
    setUsers(users.filter((u)=> u.user_id !== userId ))
  }

  return (
    <main>
      <h1>Admin</h1>
      {users.map((u) => (
        <div key={u.user_id} style={{ border: '1px solid black' }}>
          <p>{u.name}</p>
          <p>{u.user_id}</p>
          <img style={{ height: '20px' }} src={u.picture} alt={u.name} />
          <button onClick={() => handleDeleteUser(u.user_id)}>
            Delete
          </button>
        </div>
      ))}
    </main>
  )
}

export default AdminPanel