const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/admin`

const getUsers = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/users`,
      { headers: { Authorization: `Bearer ${token}` } },
    )
    return await res.json()
  } catch (err) {
    throw err
  }
}

const deleteUser = async (token, userId) => {
  try {
    const res = await fetch(`${BASE_URL}/users/${userId}`,
      {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    return await res.json()
  } catch (err) {
    throw err
  }
}

export {
  getUsers,
  deleteUser,
}