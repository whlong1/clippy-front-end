import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/attendance`

const indexAttendance = async (cohortId) => {
  const res = await fetch(`${BASE_URL}?cohortId=${cohortId}`,
    { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
  )
  return await res.json()
}

const showAttendance = async (attendanceId) => {
  const res = await fetch(`${BASE_URL}/${attendanceId}`,
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

const updateAttendance = async (data) => {
  const { attendanceId } = data
  try {
    const res = await fetch(`${BASE_URL}/${attendanceId}`,
      {
        method: 'PUT',
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

const deleteAttendance = async (data) => {
  const { attendanceId } = data
  try {
    const res = await fetch(`${BASE_URL}/${attendanceId}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`,
        },
      })
    return await res.json()
  } catch (error) {
    throw error
  }
}

export {
  showAttendance,
  indexAttendance,
  createAttendance,
  updateAttendance,
  deleteAttendance,
}