import * as tokenService from './tokenService'
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

const getUser = async (token, userId) => {
  try {
    const res = await fetch(`${BASE_URL}/users/${userId}`,
      {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    return await res.json()
  } catch (err) {
    throw err
  }
}

const updateUser = async (token, userId, data) => {
  try {
    const res = await fetch(`${BASE_URL}/users/${userId}`,
      {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    return res.json()
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

const createCohortAndOnboardAdmin = async (data) => {
  console.log(data)
  try {
    const res = await fetch(`${BASE_URL}/cohorts/first-time-signup`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    return res.json()
  } catch (err) {
    throw err
  }
}

export {
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  createCohortAndOnboardAdmin,
}