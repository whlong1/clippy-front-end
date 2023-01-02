import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/cohorts`

const indexCohorts = async () => {
  const res = await fetch(`${BASE_URL}`,
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
    return await res.json()
  } catch (err) {
    throw err
  }

}

// router.post('/:cohortId/waitlist/:profileId', cohortsCtrl.addProfileToWaitlist)

export {
  indexCohorts,
  addProfileToWaitlist
}