import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/deliverables`

const indexDeliverables = async (cohortId) => {
  const res = await fetch(`${BASE_URL}?cohortId=${cohortId}`,
    { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
  )
  return await res.json()
}

export {
  indexDeliverables,
}