const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/auth`

const getUserMetadata = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/verify`,
      { headers: { Authorization: `Bearer ${token}` } },
    )
    return await res.json()
  } catch (err) {
    throw err
  }
}

export { getUserMetadata }