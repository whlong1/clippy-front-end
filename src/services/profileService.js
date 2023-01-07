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

const getAllMyAttendance = async (cohortId, profileId) => {
  try {
    const path = `${BASE_URL}/${profileId}/attendance?cohortId=${cohortId}`
    const res = await fetch(path,
      { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
    )
    return await res.json()
  } catch (error) {
    throw error
  }
}

const getAllMyDeliverables = async (cohortId, profileId) => {
  try {
    const path = `${BASE_URL}/${profileId}/deliverables?cohortId=${cohortId}`
    const res = await fetch(path,
      { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
    )
    return await res.json()
  } catch (error) {
    throw error
  }
}


const show = async (cohortId, profileId)  => {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}?cohortId=${cohortId}`,
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
  getAllMyAttendance,
  getAllMyDeliverables
}