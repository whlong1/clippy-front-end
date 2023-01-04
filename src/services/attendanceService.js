import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/attendance`

const indexAttendance = async (cohortId) => {
  const res = await fetch(`${BASE_URL}?cohortId=${cohortId}`,
    { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
  )
  return await res.json()
}

const createAttendance = async (data) => {
  try {
    const res = await fetch(`${BASE_URL}`,
      {
        method: 'POST',
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
  indexAttendance,
  createAttendance,
}