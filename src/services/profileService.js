import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

const getProfile = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}`,
      { headers: { Authorization: `Bearer ${tokenService.getToken()}` } },
    )
    return await res.json()
  } catch (error) {
    throw error
  }
}


async function getProfiles(token) {
  const res = await fetch(`${BASE_URL}`,
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return await res.json()
}

export {
  getProfile,
  getProfiles,
}