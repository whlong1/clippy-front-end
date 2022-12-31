const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getProfiles(token) {
  const res = await fetch(`${BASE_URL}`,
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return await res.json()
}

export { getProfiles }