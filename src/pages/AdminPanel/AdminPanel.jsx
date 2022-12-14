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

  console.log("github|71990918")
  console.log('users', users)



  const handleDeleteUser = async (userId) => {
    const token = await getAccessTokenSilently()
    const res = await adminService.deleteUser(token, userId)
    console.log(res)
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