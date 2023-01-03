import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/auth`

// ======== Not being used (replaced by useAuth hook and getMyProfile service) ======== 
const getUserDataFromToken = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}`,
      // { headers: { Authorization: `Bearer ${token}` } },
      { headers: { Authorization: `Bearer ${tokenService.getToken()}` } },
    )
    return await res.json()
  } catch (error) {
    throw error
  }
}

export { getUserDataFromToken }