import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

const getMyProfile = async () => {
  try {
    const res = await fetch(`${BASE_URL}`,
      { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
    )
    return await res.json()
  } catch (error) {
    throw error
  }
}

const show = async (profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`,
      { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
    )
    return await res.json()
  } catch (error) {
    throw error
  }
}

const updateProfile = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    return await res.json()
  } catch (error) {
    throw error
  }
}


export {
  show,
  getMyProfile,
  updateProfile,
}