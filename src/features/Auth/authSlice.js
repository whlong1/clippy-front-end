import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  profile: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        profile: action.payload.profile,
      }
    },
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      }
    },
  },
})

export const {
  setUser,
  authenticate,
} = authSlice.actions

export default authSlice.reducer