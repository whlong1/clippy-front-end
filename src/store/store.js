import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/Auth/authSlice'
import peopleReducer from '../features/People/peopleSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    people: peopleReducer,
  }
})