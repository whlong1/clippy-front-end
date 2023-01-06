import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/deliverables`

const indexDeliverables = async (cohortId) => {
  const res = await fetch(`${BASE_URL}?cohortId=${cohortId}`,
    { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
  )
  return await res.json()
}

const showDeliverable = async (deliverableId) => {
  const res = await fetch(`${BASE_URL}/${deliverableId}`,
    { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
  )
  return await res.json()
}

const createDeliverable = async (data) => {
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

const deleteDeliverable = async (data) => {
  const { deliverableId } = data
  try {
    const res = await fetch(`${BASE_URL}/${deliverableId}`,
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

const showStudentDeliverable = async (studentDeliverableId) => {
  const res = await fetch(`${BASE_URL}/${studentDeliverableId}/view`,
    { headers: { 'Authorization': `Bearer ${tokenService.getToken()}` } },
  )
  return await res.json()
}

const gradeStudentDeliverable = async (data) => {
  const { studentDeliverableId } = data
  try {
    const res = await fetch(`${BASE_URL}/${studentDeliverableId}/grade`,
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

const submitStudentDeliverable = async (data) => {
  const { studentDeliverableId } = data
  try {
    const res = await fetch(`${BASE_URL}/${studentDeliverableId}/submit`,
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
  showDeliverable,
  indexDeliverables,
  createDeliverable,
  deleteDeliverable,
  showStudentDeliverable,
  gradeStudentDeliverable,
  submitStudentDeliverable,
}