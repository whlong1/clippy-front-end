import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/squads`

const getAllSquads = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw err
  }
}

const createSquad = async (squadData) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(squadData)
    })
    return await res.json()
  } catch (err) {
    throw err
  }
}

const addSquadMember = async (squadId, profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${squadId}/students/${profileId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return await res.json()
  } catch (err) {
    throw err
  }
}

const removeSquadMember = async (squadId, profileId) => {
  try {
    const res = await fetch(`${BASE_URL}/${squadId}/students/${profileId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      }
    })
    return await res.json()
  } catch (err) {
    throw err
  }
}

const deleteSquad = async (squadId) => {
  try {
    const res = await fetch(`${BASE_URL}/${squadId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return await res.json()
  } catch (err) {
    throw err
  }
}

export {
  getAllSquads,
  createSquad,
  deleteSquad,
  addSquadMember,
  removeSquadMember
}