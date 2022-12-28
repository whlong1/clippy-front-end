import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  isAuthenticated: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticate: (state, action) => {
      console.log('PAYLOAD', action.payload)
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      }
    },
  },
})

export const { authenticate } = authSlice.actions
export default authSlice.reducer