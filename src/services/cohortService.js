import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/cohorts`

async function indexCohorts() {
  const res = await fetch(`${BASE_URL}`,
    { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
  )
  return await res.json()
}



export {
  indexCohorts,
}