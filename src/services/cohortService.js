import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/cohorts`

const indexCohorts = async () => {
  const res = await fetch(`${BASE_URL}`,
    { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
  )
  return await res.json()
}

const getCohortPeople = async (cohortId) => {
  const res = await fetch(`${BASE_URL}/${cohortId}/people`,
    { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
  )
  return await res.json()
}


const addProfileToWaitlist = async (cohortId, profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${cohortId}/waitlist/${profileId}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokenService.getToken()}`,
        }
      })
    if (!res.ok) throw await res.json()
    return await res.json()
  } catch (err) {
    throw err
  }
}


export {
  indexCohorts,
  getCohortPeople,
  addProfileToWaitlist
}