import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from '../features/peopleSlice'

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  }
})