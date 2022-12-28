import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/Auth/authSlice'
import peopleReducer from '../features/People/peopleSlice'

import { profileApi } from '../services/profileService'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    people: peopleReducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),
})