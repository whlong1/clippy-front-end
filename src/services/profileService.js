const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getProfiles() {
  const res = await fetch(BASE_URL)
  return await res.json()
}

export { getProfiles }
